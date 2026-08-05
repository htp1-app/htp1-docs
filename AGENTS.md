# AGENTS.md

## Repository guidance

This repository contains the HTP-1 firmware, UI, on-device help, and online documentation.

Before changing volume-control code, labels, help text, or user documentation, read:

- `docs/development/volume-control-findings.md`

Treat that file as the current shared understanding of the HTP-1 volume-control system unless newer source-code or hardware evidence clearly contradicts it.

## Volume-control terminology

Use these terms consistently:

- **Reference Output Voltage**
- **Maximum Digital Headroom**
- **configured digital headroom**
- **currently available digital headroom**
- **Highest volume with full digital headroom**
- **Maximum Volume**
- **Zero Point**
- **Peak Monitor**

Avoid wording that implies:

- **Maximum Digital Headroom** is permanently available at every master-volume setting;
- **Reference Output Voltage** is the instantaneous output of arbitrary program material;
- a Peak Monitor value can be converted directly into Vrms without knowing the waveform;
- unused CS3318 gain-setting range equals unused clean output-voltage capability;
- the volume control always follows a simple analog-then-digital sequence;
- **Maximum Volume** changes the internal gain calculation;
- **Zero Point** changes actual playback level.

## Volume-control behavior

Keep these distinctions clear:

- **Reference Output Voltage** defines the nominal RMS output of a **0 dBFS sine at 0 dB master volume**.
- **Peak Monitor** records instantaneous post-processing sample peaks, not RMS, crest factor, or analog voltage.
- **Maximum Digital Headroom** is the maximum reserve the HTP-1 attempts to preserve.
- Available digital headroom decreases when master volume rises beyond the point shown as **Highest volume with full digital headroom**.
- **Maximum Volume** only clamps the user-accessible volume range.
- **Zero Point** only offsets the displayed volume value.
- Positive digital gain may be used at very high master-volume settings, depending on the configured Reference Output Voltage.
- Reallocating gain cannot create clean output voltage beyond the analog hardware limit; it can only move clipping between stages.

Do not reintroduce the older simplified model of:

```text
analog gain only
→ digital gain only
→ analog gain only
```

The actual behavior depends on both Reference Output Voltage and Maximum Digital Headroom.

## Confirmed analog and output limits

Preserve these distinctions:

- `volAna` is capped at **+22 dB**, matching the CS3318 gain-control limit.
- Gain requested beyond +22 dB is transferred to the digital stage.
- The CS3318 is operated from approximately **±9 V** rails.
- Its specified `THD+N < 1%` signal range is approximately **±7.65 Vpeak**, equivalent to about **5.41 Vrms for a sine wave**.
- The output stage after the CS3318 has approximately **-2.7 dB gain**.
- This produces an external balanced-output ceiling of approximately **4 Vrms**.
- The remaining CS3318 gain-setting range must not be described as unused clean output-voltage headroom.
- With **Reference Output Voltage = 4 Vrms**, a full-scale sine at 0 dB Master Volume is already near the clean output limit.
- Raising Master Volume above that point does not provide proportionally higher clean voltage for a full-scale signal; it can instead cause digital or analog clipping.

Do not describe **Reference Output Voltage** as either:

- the analog gain limit;
- the RMS voltage of arbitrary program material;
- or a promise that higher Master Volume can produce clean voltage beyond 4 Vrms.

## UI guidance

On the Levels page, do not present:

```text
Reference Output Voltage × 10^(Master Volume / 20)
```

as a generic **Effective voltage**.

That value is only the expected RMS output of a **0 dBFS sine** at the selected
Master Volume. It does not include the Peak Monitor result and is not a
headroom or amplifier-clipping indicator.

Preferred options:

- remove the value from the Levels page; or
- move it to diagnostics and label it explicitly as:
  **Expected output for a 0 dBFS sine at this volume**.

Prefer a headroom-preservation status instead, for example:

```text
Full configured headroom is preserved up to -11 dB MV.
```

or:

```text
Maximum Volume consumes 3 dB of configured digital headroom.
```

Use the implementation's live result where possible rather than duplicating the
gain algorithm in the UI.

## Documentation style

For user-facing documentation:

- explain observable behavior before implementation details;
- keep on-device help concise and task-oriented;
- reserve formulas, internal variable names, correction factors, and detailed examples for internal or developer documentation;
- distinguish configured digital headroom from currently available digital headroom;
- distinguish instantaneous peak level from RMS voltage;
- explain that DSP features such as Dirac Live, PEQ, trims, tone controls, Loudness, bass management, and mixing may affect peak levels.

## Safety and compatibility

Changes to volume-control behavior can create large and potentially unsafe playback-level changes.

Before modifying how Reference Output Voltage, Maximum Volume, or Maximum Digital Headroom interact:

- preserve existing behavior unless the change is explicitly intentional;
- consider migration of existing settings;
- avoid silently redefining the electrical meaning of stored values;
- do not assume a new gain split creates additional clean analog output;
- document any behavior change clearly;
- add or update tests where possible.

## Source of truth

When documentation and implementation disagree:

1. inspect the current `avController`, UI source, Peak Monitor implementation, and relevant hardware evidence;
2. update `docs/development/volume-control-findings.md` with the evidence;
3. then update on-device help and online documentation consistently.

Do not guess at unresolved implementation details. Mark them as open questions instead.

The engineering reference remains:

- `docs/development/volume-control-findings.md`
