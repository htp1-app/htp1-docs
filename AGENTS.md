# AGENTS.md

## Repository guidance

This repository contains the HTP-1 firmware, UI, on-device help, and online documentation.

Before changing volume-control code, labels, help text, or user documentation, read:

- `docs/development/volume-control-findings.md`

Treat that file as the current shared understanding of the HTP-1 volume-control system unless newer source-code evidence clearly contradicts it.

## Volume-control terminology

Use these terms consistently:

- **Reference Output Voltage**
- **Maximum Digital Headroom**
- **currently available digital headroom**
- **Highest volume with full digital headroom**
- **Maximum Volume**
- **Zero Point**

Avoid wording that implies:

- **Maximum Digital Headroom** is permanently available at every master-volume setting;
- **Reference Output Voltage** is the hardware's absolute maximum output voltage;
- the volume control always follows a simple analog-then-digital sequence;
- **Maximum Volume** changes the internal gain calculation;
- **Zero Point** changes actual playback level.

## Volume-control behavior

Keep these distinctions clear:

- **Reference Output Voltage** defines the nominal output voltage associated with **0 dB master volume**.
- **Maximum Digital Headroom** is the maximum reserve the HTP-1 attempts to preserve.
- Available digital headroom decreases when master volume rises beyond the point shown as **Highest volume with full digital headroom**.
- **Maximum Volume** only clamps the user-accessible volume range.
- **Zero Point** only offsets the displayed volume value.
- Positive digital gain may be used at very high master-volume settings, depending on the configured Reference Output Voltage.

Do not reintroduce the older simplified model of:

```text
analog gain only
→ digital gain only
→ analog gain only
```

The actual behavior depends on both Reference Output Voltage and Maximum Digital Headroom.

## Documentation style

For user-facing documentation:

- explain observable behavior before implementation details;
- keep on-device help concise and task-oriented;
- reserve formulas, internal variable names, correction factors, and detailed examples for internal or developer documentation;
- distinguish configured digital headroom from currently available digital headroom;
- explain that DSP features such as Dirac Live, PEQ, trims, tone controls, and Loudness may affect peak levels.

## Safety and compatibility

Changes to volume-control behavior can create large and potentially unsafe playback-level changes.

Before modifying how Reference Output Voltage, Maximum Volume, or Maximum Digital Headroom interact:

- preserve existing behavior unless the change is explicitly intentional;
- consider migration of existing settings;
- avoid silently redefining the electrical meaning of stored values;
- document any behavior change clearly;
- add or update tests where possible.

## Source of truth

When documentation and implementation disagree:

1. inspect the current `avController` and UI source;
2. update `docs/development/volume-control-findings.md` with the evidence;
3. then update on-device help and online documentation consistently.

Do not guess at unresolved implementation details. Mark them as open questions instead.
