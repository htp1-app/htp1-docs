# Seat Shaker

A seat shaker is a tactile transducer bolted to a chair or a riser under the seating. It turns
low-frequency signal into motion you feel rather than sound you hear. The HTP-1 can route a
dedicated signal to a shaker from its own output, separate from the subwoofer feed, with its own
filtering, delay, gain and PEQ.

![Seat Shaker page showing the output and content buttons, response chart, and PEQ table](images/ui-seat-shaker.png)

## Output

Choose where the seat shaker signal comes from.

| Option | What it does |
| --- | --- |
| Off | The seat shaker is disabled. All other controls on this page are locked. |
| Sub Out *n* | The first unused subwoofer channel becomes the seat shaker channel. The number shown updates automatically to the next available subwoofer slot. |
| Mix Out | Sends a single summed mix to the shaker. |
| Mix Out Diff | Sends a difference version of the mix to the shaker instead of a summed one. |

!!! note
    The seat-shaker channel is highlighted on the Speaker Map on the Speakers page, and again in
    the channel list on the Peak Monitor page, so you can always see which physical output it has
    claimed.

## Mute

The **Mute** button silences the seat shaker output without changing the Output selection. It is
only available once an output other than Off is chosen.

## Content

Choose what the seat shaker plays.

| Option | What it does |
| --- | --- |
| Downmix | The shaker plays a downmix of the full program content. |
| LFE Only | The shaker plays only the LFE (subwoofer) channel. |
| Auto | The HTP-1 chooses between downmix and LFE content automatically. |

## Response Chart

The chart on the page shows the seat shaker's frequency response in real time, combining the LPF
setting and the PEQ bands below it. Use it to see the effect of a filter change before you feel it.

## Available Bands and PEQ

Choose how many PEQ bands are available: **4**, **8**, or **16**. Reducing the band count resets
any bands above the new count back to their default values, so the page asks you to confirm before
it does this.

Each band has the following controls:

| Column | Range | Notes |
| --- | --- | --- |
| Frequency | 10–150 Hz | Center or corner frequency of the band. |
| Gain | −20 to +12 dB | Hidden for filter types that have no gain (All Pass, LPF, HPF). |
| Q | 0.1–10 | Hidden for the All Pass 1st Order type. |
| Filter Type | PEQ, Low Shelf, High Shelf, All Pass 1st Order, All Pass 2nd Order, LPF, HPF | Changing type shows or hides the Gain and Q fields as needed. |
| Reset | — | Returns that single band to its default (50 Hz, 0 dB, Q 1, PEQ). |

Click the gear icon at the right of a band's row to expand it into sliders with step buttons, for
finer adjustment than the number fields allow.

## Presets

Six preset slots store a complete seat shaker setup: content, LPF, delay, LFE gain, trim, phase,
band count, and all PEQ bands.

- Click a preset number to load it.
- **Save** asks which of the six slots to save the current settings into.
- **Clear** removes the saved data from the active preset and returns the page to defaults.

A preset button changes color when its stored settings differ from what is currently on the page,
so you can tell when you have made changes that have not been saved.

## LPF

Sets the low-pass filter corner frequency for the seat shaker, from 20 to 200 Hz. The default is
80 Hz. Use this to keep higher frequencies — which the shaker cannot usefully reproduce and which
can make it buzz — out of the signal.

## Delay

Adds up to 50 ms of delay to the seat shaker channel, in addition to any speaker distance
compensation, so the tactile effect can be time-aligned with the rest of the system. The default is
25 ms.

## LFE Gain

Sets the gain applied to the LFE content feeding the shaker, from 0 to 12 dB in 0.5 dB steps. The
default is 10 dB.

## Trim

A final level trim for the seat shaker output, from −24 to +6 dB. The default is 0 dB.

## Other Controls

Two more two-state buttons on this page are worth knowing about:

- **Loudness Included / Excluded** — chooses whether loudness compensation (see
  [Loudness](loudness.md)) is applied to the seat shaker signal.
- **Polarity Normal / Inverted** — flips the polarity of the seat shaker signal, useful if the
  transducer's motion feels out of phase with what is on screen.

**Peak Monitoring** turns on a live level meter for the seat shaker channel, with a peak-hold
indicator and a **Clear Peak** button to reset it.
