# Volume Setup

The HTP-1's master volume is a combination of analog and digital gain. Volume Setup is where you
set how that combination behaves: the volume the unit wakes up at, the range you're allowed to
move it in, and how its output level is matched to your amplifier.

![Volume Setup page showing Power On, Volume Limits, and Output Level controls](images/ui-volume-setup.png)

## Power On

**Power On Volume** sets the master volume the HTP-1 comes up at when it turns on, from −100 to 0 dB.

**Mix Out Power On Volume** does the same for the Mix Out (secondary) output, which has its own
independent volume. Set it separately if you use Mix Out for a zone that should come up at a
different level than the main output.

## Volume Limits

The **Min. Volume** and **Max. Volume** controls define the allowed range for the master volume
control, so you — or anyone else in the house — can't drive the system below or above levels
you've decided are sensible.

| Control | Range | Default button |
|---|---|---|
| Min. Volume | −100 to −60 dB | Resets to the factory minimum |
| Max. Volume | −59 to +22 dB | Resets to the factory maximum |

## Output Level

The **Max. Output Level** sets the upper limit of the analog volume control, in Vrms. It is designed
to help match the HTP-1's output to your amplifier's sensitivity — the input level, in volts, that
drives your amplifier to full power.

If the HTP-1's maximum output is higher than your amplifier needs, you lose fine control at the top
of the volume range: most of your usable range is crammed into a few dB at the very end of the dial.
Setting the Max. Output Level closer to what your amplifier actually requires spreads the volume
control across its full range and makes the level easier to set precisely by ear.

| Control | Range | Default button |
|---|---|---|
| Max. Output Level | 0.1 to 4 Vrms | Resets to the factory value |

The HTP-1's balanced outputs are on XLR connectors.

![XLR output connector pinout](images/p46-2.jpg)

## Show Advanced Settings and Peak Monitor

Turn on **Show Advanced Settings and Peak Monitor** to reveal the Zero Point, Headroom, and Peak
Monitor controls described below.

![Volume Setup advanced section showing Zero Point, Headroom, and the embedded Peak Monitor](images/ui-volume-advanced.png)

### Zero Point

By default, the master volume is shown in dB relative to full scale, so 0 dB is the loudest the
system can go. **Zero Point** shifts what number is displayed for that same physical volume — some
owners prefer the displayed number to reflect the headroom they've built into their system rather
than dB full scale. It only changes what's shown on the front panel and in the UI; it does not
change the actual output level.

Zero Point ranges from −100 to +22 dB, with a **Default** button, and the advanced section shows
both the current internal master volume and the current display volume so you can see the
relationship between the two.

### Max. Digital Headroom

Digital headroom is the cushion that protects against clipping when processing — Dirac Live, PEQ,
tone controls — adds gain to the signal. As you turn the volume up, the HTP-1 first raises the
analog volume; once that's maxed out, it starts raising digital gain instead. Turned down far enough,
the same thing happens in reverse: digital gain is pulled back before the analog stage takes over.
The **Max. Digital Headroom** setting controls how much of that digital gain is held in reserve.

The default is 12 dB. If your system adds a lot of gain from Dirac Live or PEQ — bass boost is the
usual cause — increase the headroom so that gain has somewhere to go without clipping.

| Control | Range | Default |
|---|---|---|
| Max. Digital Headroom | 0 to 30 dB | 12 dB |

The page also shows two live readouts: the maximum volume that still leaves the full digital
headroom available, and how much digital headroom is currently available at the present volume.

!!! tip
    The [Peak Monitor](peak-monitor.md) is the fastest way to find out how much headroom you actually
    need. Play your loudest material with peak monitoring on — if any channel is clipping or close to
    it, increase Max. Digital Headroom or lower Max. Output Level.
