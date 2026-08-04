# HTP-1 Volume Control Findings

This document summarizes the current understanding of the HTP-1 volume-control
implementation. It is based on reverse engineering of the `avController` source,
code inspection, and observed system behavior.

Unless newer evidence contradicts these findings, this document should be treated
as the authoritative description of the HTP-1 volume system.

---

# Terminology

## Master Volume

The user-facing volume control.

Default range:

-100 dB … +22 dB

Maximum Volume merely limits the user interface and does not change the internal
gain calculation.

---

## Reference Output Voltage

Formerly called **Maximum Output Level**.

Defines the analog output voltage (Vrms) produced at **0 dB master volume**.

It does **not** define the maximum voltage the HTP-1 is capable of producing.

Higher master-volume settings may produce a higher output voltage.

The value should normally match the amplifier's input sensitivity.

---

## Maximum Digital Headroom

Specifies the maximum amount of digital headroom the HTP-1 attempts to preserve
for DSP processing.

This value is **not** guaranteed to remain available at every listening level.

As the master volume increases, the HTP-1 gradually consumes the configured
digital headroom to allow higher playback levels.

---

# Confirmed implementation

## Reference Output Voltage

User value:

0.1 … 4 Vrms

Conversion:

Vrms

↓

20 × log10(V)

↓

dBV

↓

subtract board correction

↓

_correctedClipVolume_dB

Board correction:

2.556 dB

derived from

((12.077 + 12.035) / 2) - 9.5

---

## Internal headroom

The firmware permanently keeps an additional 1 dB of headroom.

Therefore:

Highest MV with full configured headroom

≈

1 dB − Maximum Digital Headroom

Examples:

12 dB headroom

↓

approximately -11 dB MV

18 dB headroom

↓

approximately -17 dB MV

---

# Gain algorithm

The implementation is more sophisticated than a simple

Analog

↓

Digital

transition.

Instead it behaves approximately as follows.

## Region 1

Low master volume

The analog gain increases while the configured digital headroom remains fully
available.

## Region 2

Approaching 0 dB

The HTP-1 gradually consumes the configured digital headroom while continuing
to increase playback level.

At 0 dB MV only the internal 1 dB reserve remains.

## Region 3

Above 0 dB

Analog gain continues increasing until the analog stage reaches its maximum
capability.

## Region 4

If additional gain is required

Positive digital gain is applied.

This region depends on Reference Output Voltage and does not necessarily occur
for every configuration.

---

# Important consequences

Configured Digital Headroom

≠

Currently Available Digital Headroom

The configured value is the maximum reserve.

The available value depends on master volume.

This distinction should be reflected throughout the documentation.

---

Reference Output Voltage

does not define

maximum analog output

It defines

output voltage at 0 dB master volume.

---

Maximum Volume

does not influence

gain calculation

It only limits the user interface.

---

Zero Point

changes only the displayed volume scale.

It has no effect on gain or output level.

---

# Practical implications

The commonly recommended configuration

Maximum Volume

=

-(Maximum Digital Headroom)

(or similar)

does indeed prevent the configured headroom from being consumed.

However,

it also reduces the maximum analog output available to the user because
Reference Output Voltage remains referenced to 0 dB MV.

Example

Amplifier sensitivity

1.66 Vrms

Maximum Digital Headroom

12 dB

Maximum Volume

-11 dB

To achieve

1.66 Vrms

at

-11 dB

the Reference Output Voltage would need to be

approximately

5.9 Vrms

The HTP-1 only allows

4 Vrms

therefore the system remains roughly

3.4 dB

below reference level.

With

18 dB

headroom

the required Reference Output Voltage would be

approximately

11.8 Vrms.

---

# Documentation decisions

Preferred terminology

Reference Output Voltage

instead of

Maximum Output Level

because the setting is referenced to

0 dB MV

rather than the maximum achievable output.

Maximum Digital Headroom

should always be described as

the maximum headroom the HTP-1 attempts to preserve.

Avoid wording such as

"reserves digital headroom"

without qualification.

---

# Open questions

Still unknown

• Exact analog output capability of the hardware

• Exact point where positive digital gain begins for every Reference Output
  Voltage

• Engineering rationale behind the 2.556 dB correction factor

---

# Possible future feature

Reference Level Mode

Instead of defining

Reference Output Voltage

at

0 dB MV

allow it to be referenced to

Maximum Volume.

Benefits

• fixed digital headroom is never consumed

• reference level remains reachable

• Maximum Volume becomes the calibration point

This would require either

- migration logic

or

- an optional operating mode

to avoid changing existing installations.