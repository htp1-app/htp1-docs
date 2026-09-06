# HTP-1 Volume-Control Findings

This document records the current understanding of the HTP-1 volume-control
implementation. It is based on inspection of the `avController` source, related
UI code, the Peak Monitor implementation, CS3318 data-sheet limits, hardware
output-stage information, and observed behavior.

Treat this as an engineering reference for changes to volume-control code, UI
labels, on-device help, and online documentation. Where a point remains
unverified, it is marked as an open question rather than presented as fact.

## Terminology

### Master Volume

The main volume control.

The underlying Master Volume (`/volume`) range is:

```text
-100 dB to +22 dB
```

**Zero Point** can shift the value shown to the user without changing this
underlying range or the actual playback level.

### Maximum Volume

**Maximum Volume** only clamps the user-accessible Master Volume range.

It does not:

- move the internal 0 dB reference point;
- change the gain calculation;
- redefine Reference Output Voltage;
- change actual gain below the cap.

Maximum Volume is stored on the underlying Master Volume scale. When Zero Point
is non-zero, the value shown to the user is shifted by the same amount as the
displayed Master Volume.

### Power On Volume

**Power On Volume** defines the underlying Master Volume applied when the HTP-1
starts.

Its underlying range is:

```text
-100 dB to 0 dB
```

The 0 dB upper limit is a safety ceiling and is independent of Maximum Volume.

Power On Volume is stored on the underlying Master Volume scale. When Zero Point
is non-zero, the value shown to the user is shifted by the same amount as the
displayed Master Volume.

For example:

```text
Zero Point = -15 dB
stored Power On Volume = -35 dB
displayed Power On Volume = -20 dB
```

After restart, the HTP-1 restores the stored `-35 dB` underlying Master Volume,
which is again displayed as `-20 dB`.

### Mix Out Volume

The Mix Out uses a separate digital volume control and does not use the main
output's Zero Point.

The confirmed ranges are:

```text
/secondaryVolume         -100 … 0 dBFS
/secondaryPowerOnVolume  -100 … 0 dBFS
```

Unlike the main outputs, Mix Out does not provide the main analog volume
control's gain range above 0 dB.

### Reference Output Voltage

Previously called **Maximum Output Level**.

The setting ranges from **0.1 to 4.0 Vrms** and defines the nominal balanced
output produced by a **0 dBFS sine wave at internal 0 dB Master Volume**, subject
to the normal board correction and calibration tolerances.

It does not mean:

- every signal produces that RMS voltage;
- the instantaneous output voltage is always fixed at that value;
- processing cannot raise or lower peak levels before the master-volume stage;
- a momentary full-scale sample has an independently defined Vrms value;
- the setting can override the HTP-1's approximately 4 Vrms hardware limit.

The name **Reference Output Voltage** distinguishes the calibration setting from
the hardware's absolute clean-output capability.

### Maximum Digital Headroom

**Maximum Digital Headroom** specifies the maximum amount of digital attenuation
the HTP-1 can retain to accommodate gain introduced by DSP processing.

It is not a fixed reserve guaranteed at every Master Volume setting.

As Master Volume rises beyond the point reported as **Highest volume with full
digital headroom**, the HTP-1 gradually consumes the configured reserve to allow
higher playback levels.

### Configured and available digital headroom

These are different quantities:

- **Configured digital headroom** is the value selected with Maximum Digital
  Headroom.
- **Currently available digital headroom** is the reserve remaining at the
  current underlying Master Volume.

Documentation must not use these terms interchangeably.

### Peak Monitor

Peak Monitor records the largest instantaneous post-processing sample at its
measurement point.

A linear value of `1.0` represents digital full scale. It does not calculate:

- RMS level;
- average level;
- crest factor;
- sustained power;
- an analog Vrms value.

If Peak Monitor indicates that `H` dB of headroom is required, the relevant
interpretation is that the largest observed post-processing sample was about
`H` dB above digital full scale before the protective digital attenuation was
applied.

### Zero Point

**Zero Point** changes the displayed scale used for main-volume positions. It
does not change any underlying volume setting or gain.

The relationship is:

```text
displayed Main Volume     = /volume     - /cal/zeroPoint
displayed Power On Volume = /powerOnVol - /cal/zeroPoint
displayed Minimum Volume  = /cal/vpl    - /cal/zeroPoint
displayed Maximum Volume  = /cal/vph    - /cal/zeroPoint
```

The displayed **Highest volume with full digital headroom** is shifted by the
same Zero Point offset.

Zero Point does not change:

- the underlying Master Volume;
- Power On Volume;
- Minimum Volume or Maximum Volume;
- analog or digital gain;
- output voltage;
- the internal 0 dB reference point;
- Maximum Digital Headroom;
- currently available digital headroom;
- Mix Out Volume or Mix Out Power On Volume.

The confirmed underlying ranges are:

```text
/volume                              -100 … +22 dB
/powerOnVol                          -100 …   0 dB

/secondaryVolume                     -100 …   0 dBFS
/secondaryPowerOnVolume              -100 …   0 dBFS
/shaker/savedSecondaryPowerOnVolume  -100 …   0 dBFS
```

Zero Point is never added to or subtracted from these stored values. Changing
Zero Point therefore changes their presentation where applicable, but not the
actual playback level, power-on level, or volume limits.

For example, with Zero Point set to `-15 dB`, an underlying Master Volume or
Power On Volume of `-35 dB` is displayed as `-20 dB`.

When Mix Out tracks Main Volume, the tracked Mix Out level follows the
underlying Main Volume but is clamped to `0 dBFS` if Main Volume rises above
internal 0 dB.

## Confirmed implementation details

### Volume ranges

The confirmed volume-related ranges are:

```text
/volume                              -100 … +22 dB
/powerOnVol                          -100 …   0 dB

/secondaryVolume                     -100 …   0 dBFS
/secondaryPowerOnVolume              -100 …   0 dBFS
/shaker/savedSecondaryPowerOnVolume  -100 …   0 dBFS
```

The main output and Mix Out therefore do not share the same upper volume limit.

The main output's `+22 dB` range is associated with the analog volume-control
stage described below. Mix Out is a digital downmix level and is limited to
`0 dBFS`.

### Power-on restore behavior

Power On Volume values are stored on their underlying scales.

At startup:

```text
/volume = /powerOnVol
```

and:

```text
/secondaryVolume = /secondaryPowerOnVolume
```

subject to Seat Shaker routing and volume-tracking behavior.

Zero Point is not part of this restore calculation.

This distinction is important. Applying Zero Point while restoring Power On
Volume would change the actual playback level after restart rather than merely
changing its displayed value.

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

With configured headroom `H`, the highest underlying Master Volume that retains
the full configured headroom is approximately:

```text
Highest MV with full configured headroom ≈ 1 dB - H
```

Examples:

```text
12 dB configured headroom → approximately -11 dB MV
18 dB configured headroom → approximately -17 dB MV
```

The UI displays this threshold using the current Zero Point scale.

Use the live UI readout as the authoritative value where available.

### Analog gain limit

`volAna` is capped at **+22 dB**, matching the maximum gain setting of the
CS3318 analog volume-control stage.

Conceptually, the implementation does this:

```cpp
if (volAna > 22) {
    volDig += (volAna - 22);
    volAna = 22;
}
```

Any requested gain beyond the analog stage's +22 dB control limit is transferred
to the digital stage.

This analog gain range applies to the main output path. It must not be used as
the range for Mix Out.

### CS3318 signal-swing limit

The CS3318 is operated from approximately **±9 V analog rails**.

Its data sheet specifies the full-scale input/output range for
`THD+N < 1%` as:

```text
(VA-) + 1.35 V  to  (VA+) - 1.35 V
```

With ±9 V rails, this corresponds to approximately:

```text
±7.65 Vpeak
15.3 Vpp
5.41 Vrms for a sine wave
```

This is a signal-swing limit, not the same thing as the CS3318's **+22 dB gain
setting**.

### Output stage and maximum external balanced output

The analog output stage after the CS3318 has approximately **-2.7 dB gain**.

Applying that fixed attenuation to the CS3318's approximately 5.41 Vrms maximum
sine-wave output gives:

```text
5.41 × 10^(-2.7/20) ≈ 3.96 Vrms
```

This explains the HTP-1's approximately **4.0 Vrms clean balanced-output limit**.

The resulting analog structure is approximately:

```text
CS3318 maximum clean sine-wave output: ≈5.4 Vrms
                           ↓ -2.7 dB
Balanced XLR output:                    ≈4.0 Vrms
```

Therefore:

- the CS3318's unused gain-setting range is not necessarily unused clean
  output-voltage capability;
- increasing analog gain also raises any full-scale peak;
- once the required output reaches the hardware limit, further gain only moves
  clipping into the analog path;
- exceeding approximately 4 Vrms cleanly requires hardware changes.

## Gain algorithm

The system does not follow one universal, simple sequence such as:

```text
analog only → digital only → analog only
```

Its behavior depends on both **Reference Output Voltage** and **Maximum Digital
Headroom**.

A useful approximation is:

### Region 1: Full configured headroom

At lower underlying Master Volume settings, analog gain increases while the full
configured digital headroom remains available.

### Region 2: Configured headroom is consumed

Above **Highest volume with full digital headroom**, the HTP-1 begins consuming
the configured digital reserve to allow higher playback levels.

At approximately internal 0 dB Master Volume, only the normal internal reserve
remains.

### Region 3: Analog gain above internal 0 dB

Above internal 0 dB Master Volume, the processor may continue increasing analog
gain, depending on the configured Reference Output Voltage and the remaining
analog output capability.

A non-zero Zero Point may cause this region to appear at a different displayed
volume value.

### Region 4: Positive digital gain

Once `volAna` reaches its +22 dB limit, any remaining requested gain is moved to
`volDig`.

Whether and where this region occurs depends on Reference Output Voltage.

## Important consequences

### Maximum Digital Headroom is not permanent

The configured value is the maximum reserve the HTP-1 attempts to preserve.

It remains fully available only up to **Highest volume with full digital
headroom**. Above that point, available headroom decreases.

The UI displays that threshold using the Zero Point-shifted volume scale, but the
underlying threshold does not change when Zero Point changes.

### Reference Output Voltage is anchored to internal 0 dB MV

Reference Output Voltage is anchored to **internal 0 dB Master Volume**, not
displayed 0 dB and not Maximum Volume.

Reducing Maximum Volume therefore reduces the output of a conventional 0 dBFS
test signal, but it does not by itself describe the output produced by an
internally boosted post-processing peak.

Changing Zero Point does not change Reference Output Voltage or the internal
volume setting to which it is referenced.

### Displayed 0 dB is not necessarily internal 0 dB

With Zero Point set to 0 dB:

```text
displayed 0 dB = internal 0 dB
```

With a non-zero Zero Point, that is no longer true.

For example:

```text
Zero Point = -15 dB
internal Master Volume = -15 dB
displayed Master Volume = 0 dB
```

Documentation and UI text discussing gain behavior, Reference Output Voltage,
or hardware limits must therefore use **internal 0 dB Master Volume** where that
distinction matters.

### Power On Volume is stored independently of Zero Point

Changing Zero Point must not rewrite Power On Volume.

For example:

```text
stored Power On Volume = -35 dB
Zero Point = 0 dB
displayed Power On Volume = -35 dB

Zero Point changed to -15 dB

stored Power On Volume = -35 dB
displayed Power On Volume = -20 dB
```

The actual power-on playback level remains unchanged.

### Mix Out does not use Zero Point

Mix Out Volume and Mix Out Power On Volume remain on their own `-100 … 0 dBFS`
scale regardless of the main output's Zero Point setting.

When Seat Shaker volume tracking routes the signal through Mix Out, the tracked
level follows underlying Main Volume only up to `0 dBFS`.

For example:

```text
Main Volume = -10 dB → Mix Out tracking = -10 dBFS
Main Volume =   0 dB → Mix Out tracking =   0 dBFS
Main Volume =  +8 dB → Mix Out tracking =   0 dBFS
```

### Peak level and Vrms must not be mixed

Peak Monitor reports instantaneous digital sample peaks. Reference Output
Voltage is specified using the RMS value of a sine wave.

A full-scale sine with a 4 Vrms output has:

```text
4.00 Vrms
5.66 Vpeak
11.31 Vpp
```

Any legal DAC signal whose samples stay within ±1.0 cannot require more than the
corresponding instantaneous peak voltage at the same gain setting, although its
RMS value may be very different.

Do not assign a program transient an RMS voltage solely from its sample peak.
RMS requires knowledge of the waveform over time.

### A 4 Vrms setting does not imply clean output above 4 Vrms

With Reference Output Voltage set to 4 Vrms, a full-scale sine at internal 0 dB
Master Volume is already near the clean balanced-output limit.

Higher underlying Master Volume settings may request more gain, but they do not
create proportionally higher clean voltage for a full-scale signal. Positive
digital gain can instead drive the digital or analog path into clipping.

### Gain-setting range is not output-voltage headroom

The earlier idea that apparently unused CS3318 gain could be used to preserve
more digital headroom was based on conflating:

```text
unused CS3318 gain-setting range
```

with:

```text
unused clean analog output-voltage capability
```

They are not equivalent.

If a post-processing peak is attenuated to 0 dBFS at the DAC, adding analog gain
raises that same full-scale peak. Once the XLR output would exceed approximately
4 Vrms for a sine-equivalent full-scale signal, clipping has merely moved from
the digital domain to the analog domain.

### Crest factor does not change the instantaneous clipping limit

Crest factor affects:

- RMS level;
- average power;
- heating;
- perceived loudness.

It does not change the instantaneous voltage required for the specific maximum
sample captured by Peak Monitor.

## Reassessment of “Preserve Digital Headroom” mode

The original proposal assumed the current algorithm left clean analog gain
unused and that gain could be reallocated to preserve more digital headroom
while still reaching an independently selected output voltage.

The hardware review shows that premise is incorrect.

A fixed-headroom or shifted-reference algorithm cannot create additional clean
output capability. It can only:

- change where gain is allocated;
- change where clipping occurs;
- or limit the accessible volume range.

A new gain-allocation mode therefore cannot guarantee both:

1. full configured digital headroom; and
2. an independently chosen Reference Output Voltage at the maximum listening
   level;

unless that combination already fits within the existing total gain and
approximately 4 Vrms hardware limit.

The preferred product improvement is a calibration workflow that configures and
explains the existing controls rather than introducing a second gain algorithm.

## UI guidance

### Displayed and underlying volume values

Any UI that presents main-volume positions must distinguish between the
underlying value and the Zero Point-shifted displayed value.

The intended model is:

```text
displayed value = underlying value - Zero Point
```

for:

- Main Volume;
- Power On Volume;
- Minimum Volume;
- Maximum Volume;
- Highest volume with full digital headroom.

Zero Point must not be applied to:

- Mix Out Volume;
- Mix Out Power On Volume;
- Maximum Digital Headroom;
- currently available digital headroom;
- stored underlying MSO values.

User input entered on a displayed Zero Point-shifted scale must be converted back
to the underlying scale before being stored.

For example:

```text
Zero Point = -15 dB
user enters displayed Power On Volume = -20 dB
stored /powerOnVol = -35 dB
```

### Volume limits

The underlying limits are:

```text
Main Volume:          -100 … +22 dB
Main Power On Volume: -100 …   0 dB
Mix Out Volume:       -100 …   0 dBFS
Mix Out Power On:     -100 …   0 dBFS
```

UI controls must not reuse the main output's `+22 dB` ceiling for Mix Out.

### “Effective voltage at that volume”

A value calculated as:

```text
Reference Output Voltage × 10^(Master Volume / 20)
```

is mathematically valid only as:

> Expected RMS output of a 0 dBFS sine wave at the selected underlying Master
> Volume.

It is not:

- the output of the loudest program material;
- a headroom-status value;
- the RMS voltage corresponding to the Peak Monitor reading;
- proof that the amplifier will or will not clip on a transient.

On the Levels page this value is likely to confuse users because it answers a
test-signal question rather than a calibration question.

Preferred options:

1. remove it from the Levels page; or
2. move it to diagnostics and label it explicitly:

```text
Expected output for a 0 dBFS sine at this volume
```

Do not label it merely as **Effective voltage**.

### Headroom preservation status

A more useful Levels-page status is the relationship between Maximum Volume and
configured headroom.

Examples:

```text
Full configured headroom is preserved up to -11 dB MV.
```

```text
Maximum Volume preserves all configured digital headroom.
```

```text
Maximum Volume consumes 3 dB of configured digital headroom.
```

Where Zero Point is active, normal user-facing values should use the displayed
volume scale. Engineering explanations of the gain algorithm should identify
underlying or internal Master Volume explicitly.

This status should use the live implementation result rather than reproducing
the gain algorithm independently in the UI where possible.

## Documentation guidance

Preferred terms:

- **Reference Output Voltage**
- **Maximum Digital Headroom**
- **configured digital headroom**
- **currently available digital headroom**
- **Highest volume with full digital headroom**
- **Maximum Volume**
- **Power On Volume**
- **Mix Out Volume**
- **Zero Point**
- **Peak Monitor**
- **internal 0 dB Master Volume**, where the distinction from displayed 0 dB
  matters

Recommended user-level explanation:

> The HTP-1 automatically combines analog and digital volume control. At lower
> listening levels it preserves the full configured Maximum Digital Headroom.
> As Master Volume increases beyond the displayed Highest volume with full
> digital headroom, that reserve is gradually consumed. Above internal 0 dB
> Master Volume, analog gain may continue to increase until the analog stage
> reaches its limit. Any remaining requested gain is applied digitally and may
> clip sufficiently high-level signals. Zero Point changes only the displayed
> main-volume scale and does not change these underlying gain relationships.

Avoid wording that implies:

- Maximum Digital Headroom is permanently reserved;
- Reference Output Voltage is always the instantaneous output voltage;
- Reference Output Voltage describes arbitrary program RMS level;
- Reference Output Voltage is referenced to displayed 0 dB when Zero Point is
  non-zero;
- a Peak Monitor sample value can be converted directly into Vrms without
  knowing the waveform;
- unused CS3318 gain-setting range equals unused clean output voltage;
- a different gain split can create clean voltage beyond the hardware limit;
- Maximum Volume changes internal gain calculations;
- Zero Point changes playback level;
- Zero Point changes stored Power On Volume, Minimum Volume, or Maximum Volume;
- Zero Point applies to Mix Out Volume or Mix Out Power On Volume;
- displayed 0 dB necessarily corresponds to internal 0 dB Master Volume;
- the main output and Mix Out have the same upper volume limit;
- Mix Out can use the main analog stage's +22 dB gain range;
- a 4 Vrms reference setting allows clean full-scale output above 4 Vrms.

## Open questions

- Full engineering rationale for the approximately 2.556 dB board correction.
- Exact behavior under every processing combination and every Reference Output
  Voltage setting.
- Exact tolerance of the practical 4 Vrms limit across production units and
  loads.
- Whether the UI should remove the 0 dBFS sine-output calculation entirely or
  retain it in an advanced diagnostics section.