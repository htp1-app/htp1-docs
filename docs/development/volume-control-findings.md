# HTP-1 Volume-Control Findings

This document records the current understanding of the HTP-1 volume-control
implementation. It is based on inspection of the `avController` source, related
UI code, hardware/output-stage information, and observed behavior.

Treat this as an engineering reference for changes to volume-control code, UI
labels, on-device help, and online documentation. Where a point remains
unverified, it is marked as an open question rather than presented as fact.

## Terminology

### Master Volume

The user-facing volume control.

The normal available range is approximately:

```text
-100 dB to +22 dB
```

### Maximum Volume

**Maximum Volume** only clamps the user-accessible Master Volume range.

It does not:

- move the internal 0 dB reference point;
- change the gain calculation;
- redefine Reference Output Voltage;
- guarantee that reference playback level remains reachable.

### Reference Output Voltage

Previously called **Maximum Output Level**.

The setting ranges from **0.1 to 4.0 Vrms** and defines the nominal balanced
output voltage associated with **0 dB Master Volume** for a full-scale signal
under nominal conditions.

It does not mean:

- the instantaneous output voltage is always fixed at that value;
- every signal produces that voltage;
- processing cannot raise or lower the signal level;
- the value is necessarily the hardware's absolute maximum output in every
  operating condition.

The instantaneous output also depends on program level and processing such as
Dirac Live, PEQ, trims, tone controls, Loudness, bass management, and mixing.

The name **Reference Output Voltage** is intended to distinguish the setting
from the hardware's absolute output limit. In user-facing help, define the
reference explicitly as **0 dB Master Volume**.

### Maximum Digital Headroom

**Maximum Digital Headroom** specifies the maximum amount of digital headroom
the HTP-1 attempts to preserve for DSP processing.

It is not a fixed reserve guaranteed at every Master Volume setting.

As Master Volume rises beyond the point reported as **Highest volume with full
digital headroom**, the HTP-1 gradually consumes the configured reserve to allow
higher playback levels.

### Configured and available digital headroom

These are different quantities:

- **Configured digital headroom** is the value selected with Maximum Digital
  Headroom.
- **Currently available digital headroom** is the reserve remaining at the
  current Master Volume.

Documentation must not use these terms interchangeably.

### Zero Point

**Zero Point** changes only the displayed Master Volume value.

It does not change:

- the underlying Master Volume;
- analog or digital gain;
- output voltage;
- the internal 0 dB reference point.

## Confirmed implementation details

### Voltage conversion

The user-facing voltage setting is converted approximately as follows:

```text
Vrms
→ 20 × log10(Vrms)
→ user clip/reference level in dBV
→ board correction
→ _correctedClipVolume_dB
```

The production-board correction found in the source is approximately:

```text
2.556 dB
```

derived from:

```text
((12.077 + 12.035) / 2) - 9.5
```

The full engineering rationale for this correction has not yet been verified.
Do not expose it in normal user documentation unless that rationale is known.

### Internal 1 dB reserve

The implementation retains an additional approximately **1 dB** digital reserve.

With configured headroom `H`, the highest Master Volume that retains the full
configured headroom is approximately:

```text
Highest MV with full configured headroom ≈ 1 dB - H
```

Examples:

```text
12 dB configured headroom → approximately -11 dB MV
18 dB configured headroom → approximately -17 dB MV
```

Use the live UI readout as the authoritative value where available.

### Analog gain limit

`volAna` is capped at **+22 dB**, matching the maximum gain of the CS3318 analog
volume-control stage.

Conceptually, the implementation does this:

```cpp
if (volAna > 22) {
    volDig += (volAna - 22);
    volAna = 22;
}
```

Any requested gain beyond the analog stage's +22 dB limit is transferred to the
digital stage.

### Maximum external balanced output

The HTP-1's clean external balanced output is approximately **4.0 Vrms**.

This is a separate concept from the CS3318's +22 dB maximum analog gain:

- **+22 dB** is the analog gain-control limit.
- **Approximately 4 Vrms** is the external balanced output limit.

With **Reference Output Voltage = 4 Vrms**, a full-scale signal at 0 dB Master
Volume is already at approximately the clean external output limit. Raising
Master Volume further cannot produce proportionally higher clean voltage for
that signal; additional digital gain instead causes sufficiently high-level
signals to clip.

With a lower Reference Output Voltage, analog gain may remain available above
0 dB Master Volume until the output approaches approximately 4 Vrms.

Example:

```text
Reference Output Voltage = 2 Vrms
2 Vrms → 4 Vrms requires approximately +6 dB
```

Beyond that point, any further requested increase must come from digital gain
and may clip sufficiently high-level signals.

## Gain algorithm

The system does not follow one universal, simple sequence such as:

```text
analog only → digital only → analog only
```

Its behavior depends on both **Reference Output Voltage** and **Maximum Digital
Headroom**.

A useful approximation is:

### Region 1: Full configured headroom

At lower Master Volume settings, analog gain increases while the full configured
digital headroom remains available.

### Region 2: Configured headroom is consumed

Above **Highest volume with full digital headroom**, the HTP-1 begins consuming
the configured digital reserve to allow higher playback levels.

At approximately 0 dB Master Volume, only the normal internal reserve remains.

### Region 3: Analog gain above 0 dB

Above 0 dB Master Volume, the processor may continue increasing analog gain,
depending on the configured Reference Output Voltage and the remaining analog
output capability.

### Region 4: Positive digital gain

Once `volAna` reaches its +22 dB limit, any remaining requested gain is moved to
`volDig`.

Whether and where this region occurs depends on Reference Output Voltage.

## Important consequences

### Maximum Digital Headroom is not permanent

The configured value is the maximum reserve the HTP-1 attempts to preserve.

It remains fully available only up to the displayed **Highest volume with full
digital headroom**. Above that point, available headroom decreases.

### Reference Output Voltage is anchored to 0 dB MV

Reference Output Voltage is not anchored to Maximum Volume.

Reducing Maximum Volume therefore reduces the highest output level the user can
reach without changing the gain calculation.

### A 4 Vrms setting does not imply clean output above 4 Vrms

With Reference Output Voltage set to 4 Vrms, a full-scale signal at 0 dB Master
Volume is already near the clean balanced-output limit.

Higher Master Volume settings may request more gain, but they do not create
proportionally higher clean voltage for a full-scale signal. Positive digital
gain can instead drive the digital signal into clipping.

### Processing affects actual output and clipping risk

The nominal voltage reference does not account for every possible processing
state. Actual output and peak level can be changed by:

- program material;
- channel trims;
- user delay/trim interactions where applicable;
- Dirac Live filters;
- PEQ;
- tone controls;
- Loudness;
- bass management;
- channel summation and mixing.

## Practical reference-level limitation

A common home-theater goal is to:

1. preserve a fixed amount of digital headroom that is never consumed; and
2. still reach the amplifier voltage required for acoustic reference level at
   the highest permitted Master Volume.

The current implementation makes those goals difficult to combine because:

- Reference Output Voltage is anchored to **0 dB Master Volume**;
- Maximum Volume only clamps the UI;
- Reference Output Voltage is limited to **4 Vrms**.

### Example: 12 dB headroom, 1.66 Vrms amplifier sensitivity

Assume:

```text
Amplifier sensitivity: 1.66 Vrms
Maximum Digital Headroom: 12 dB
Highest MV preserving full headroom: approximately -11 dB
```

To produce 1.66 Vrms at -11 dB Master Volume, the voltage referenced to 0 dB
would need to be:

```text
1.66 × 10^(11/20) ≈ 5.89 Vrms
```

The HTP-1 setting is limited to 4 Vrms.

At 4 Vrms, the nominal voltage available at -11 dB is approximately:

```text
4 × 10^(-11/20) ≈ 1.13 Vrms
```

This is approximately **3.4 dB below** 1.66 Vrms.

### Example: 18 dB headroom, 1.66 Vrms amplifier sensitivity

Assume:

```text
Amplifier sensitivity: 1.66 Vrms
Maximum Digital Headroom: 18 dB
Highest MV preserving full headroom: approximately -17 dB
```

To produce 1.66 Vrms at -17 dB Master Volume, the voltage referenced to 0 dB
would need to be:

```text
1.66 × 10^(17/20) ≈ 11.8 Vrms
```

This is far beyond the 4 Vrms setting and external-output limit.

## Possible future Reference Level Mode

An optional mode could define Reference Output Voltage at **Maximum Volume**
instead of at **0 dB Master Volume**.

Conceptually:

```text
Current mode:
Reference Output Voltage ↔ 0 dB MV

Proposed mode:
Reference Output Voltage ↔ Maximum Volume
```

This could allow the user to:

- choose a fixed digital-headroom reserve;
- set Maximum Volume so that reserve is never consumed;
- produce the desired amplifier input voltage at Maximum Volume.

Such a change must be optional or include careful migration logic. Silently
changing the meaning of existing settings could cause a large and potentially
unsafe increase in playback level.

## Documentation guidance

Preferred terms:

- **Reference Output Voltage**
- **Maximum Digital Headroom**
- **configured digital headroom**
- **currently available digital headroom**
- **Highest volume with full digital headroom**
- **Maximum Volume**
- **Zero Point**

Recommended user-level explanation:

> The HTP-1 automatically combines analog and digital volume control. At lower
> listening levels it preserves the full configured Maximum Digital Headroom.
> As Master Volume increases beyond the displayed Highest volume with full
> digital headroom, that reserve is gradually consumed. Above 0 dB Master
> Volume, analog gain may continue to increase until the analog stage reaches
> its limit. Any remaining requested gain is applied digitally and may clip
> sufficiently high-level signals.

Avoid wording that implies:

- Maximum Digital Headroom is permanently reserved;
- Reference Output Voltage is always the instantaneous output voltage;
- Reference Output Voltage is unrelated to 0 dB Master Volume;
- Reference Output Voltage is the only factor controlling actual output;
- the HTP-1 always follows one fixed analog/digital gain sequence;
- Maximum Volume changes internal gain calculations;
- Zero Point changes playback level;
- a 4 Vrms reference setting allows clean full-scale output above 4 Vrms.

## Open questions

- Full engineering rationale for the approximately 2.556 dB board correction.
- Exact behavior under every processing combination and every Reference Output
  Voltage setting.
- Whether additional hardware tolerances or per-board calibration affect the
  practical 4 Vrms limit.
