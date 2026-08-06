# Volume Setup

The HTP-1 uses a combination of analog and digital gain to implement the master volume. **Volume Setup** lets you configure the power-on volume, allowable volume range, **Reference Output Voltage**, and digital headroom that determine how the volume control behaves.

![Volume Setup page showing Power On, Volume Limits, and Output Level controls](images/ui-volume-setup.png)

## Power On

**Power On Volume** sets the master volume the HTP-1 comes up at when it turns on, from −100 to 0 dB.

**Mix Out Power On Volume** does the same for the Mix Out (Zone 2) output, which has its own independent volume. Set it separately if you use Mix Out for a zone that should come up at a different level than the main output.

---

## Volume Limits

The **Minimum Volume** and **Maximum Volume** controls define the allowed range for the master volume, preventing the system from being turned down or up beyond limits you've chosen.

| Control | Range | Default button |
|---|---|---|
| Minimum Volume | −100 to −60 dB | Resets to the factory minimum |
| Maximum Volume | −59 to +22 dB | Resets to the factory maximum |

---

## Reference Output Voltage

**Reference Output Voltage** defines the nominal analog output voltage, in Vrms, produced by a **0 dBFS sine wave** at **0 dB Master Volume**. It is intended to match the HTP-1's output to your amplifier's input sensitivity—the input voltage required to drive the amplifier to full power.

This is a calibration reference only. Actual output depends on the program material and any processing such as Dirac Live, PEQ, trims, Loudness, bass management, and mixing.

| Control | Range | Default button |
|---|---|---|
| Reference Output Voltage | 0.1 to 4 Vrms | Resets to the factory value |

The HTP-1's balanced outputs are on XLR connectors.

![XLR output connector pinout](images/p46-2.jpg)

---

## Show Advanced Settings and Peak Monitor

Enable **Show Advanced Settings and Peak Monitor** to reveal the **Zero Point**, **Maximum Digital Headroom**, and **Peak Monitor** controls described below.

![Volume Setup advanced section showing Zero Point, Headroom, and the embedded Peak Monitor](images/ui-volume-advanced.png)

### Zero Point

By default, the master volume is displayed using the HTP-1's standard volume scale. **Zero Point** applies an offset to that displayed value, allowing you to choose which listening level appears as **0 dB**.

This changes only the displayed volume. It does **not** change the actual playback level, underlying Master Volume, or the internal 0 dB reference point.

Zero Point ranges from −100 to +22 dB and includes a **Default** button. The advanced section displays both the internal and displayed Master Volume values so you can see how the offset is applied.

---

### Maximum Digital Headroom

**Maximum Digital Headroom** specifies the maximum amount of digital headroom the HTP-1 attempts to preserve for DSP processing.

The HTP-1 calculates and displays the **Highest playback volume that preserves digital headroom**—the highest master-volume setting before it begins consuming the configured digital headroom.

The full configured digital headroom remains available from the minimum volume up to this value. Above it, the HTP-1 gradually consumes the reserved headroom to allow higher playback levels.

In most systems, the default value provides a good balance between clipping protection and available analog gain.

| Control | Range | Default |
|---|---|---|
| Maximum Digital Headroom | 0 to 30 dB | 12 dB |

Use **Peak Monitor** to determine the smallest **Maximum Digital Headroom** value that avoids digital clipping. Lower values allow the HTP-1 to use more analog gain before it begins consuming digital headroom.

The page also shows two live readouts:

- **Highest playback volume that preserves digital headroom** — the calculated threshold described above.
- **Currently available digital headroom** — the digital headroom remaining at the current master-volume setting.

---

## How the Volume Control Works

The HTP-1 automatically combines analog and digital gain to maximize dynamic range while minimizing the risk of digital clipping. The transition points depend on the configured **Reference Output Voltage** and **Maximum Digital Headroom**.

At lower listening levels, the HTP-1 keeps the full configured **Maximum Digital Headroom** available while adjusting playback level primarily through the analog stage. As the master volume rises beyond **Highest playback volume that preserves digital headroom**, the reserved headroom is gradually consumed.

Above **0 dB**, the HTP-1 continues increasing analog gain when the configured **Reference Output Voltage** leaves sufficient analog output range. Once the analog gain reaches its limit, any remaining requested gain is applied digitally.

---

## Recommended Setup

1. Set **Reference Output Voltage** to match your amplifier's input sensitivity. If you're unsure, leave it at the default.
2. Leave **Maximum Digital Headroom** at **12 dB** initially.
3. Use **Peak Monitor** to determine whether additional digital headroom is required.

!!! tip
    Set **Zero Point** to **Highest playback volume that preserves digital headroom**. This makes **0 dB** your reference listening level. Increasing the volume above **0 dB** gradually reduces the available digital headroom and may cause clipping on very loud peaks.

---

## Peak Monitor

**Peak Monitor** is also available from the [Peak Monitor](peak-monitor.md) page. It is included here because it is primarily used to configure **Maximum Digital Headroom**. See [Peak Monitor](peak-monitor.md) for a complete description of its features.

!!! tip
    Play your loudest program material with **Peak Monitor** enabled. Reduce **Maximum Digital Headroom** until clipping appears, then increase it step by step until clipping stops.
