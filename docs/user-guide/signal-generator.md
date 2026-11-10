# Signal Generator

The HTP-1 provides a set of signal generator functions that can be quite helpful in system setup.

![Signal Generator page with the on/off button, Signal Select and Speaker Select tables, and the Volume Control field](images/ui-signal-generator.jpg)

First choose a signal type from the **Signal Select** list. Then choose a channel from the **Speaker Select** list — the list of channels matches the speakers you have enabled on the speakers page. Then turn the signal generator on using the on/off button at the top of the page.

Select **No Upmix** before using the generator. If another mode is selected, the notice on
this page includes a **No Upmix** button. This disables upmixing; it does not bypass the
other processing described below.

The signal generator emulates an external (off-board) generator. Once enabled it remains active until
you explicitly turn it off — it keeps running when you navigate to other configuration pages, such as
**Calibration** or **PEQ**, and when you switch inputs.

!!! note
    The generator's output is routed through the full processing chain: Dirac Live room correction,
    tone controls, loudness compensation, bass management, PEQ filters, and other signal processing
    all apply to it. Keep this in mind when using the generator to take measurements — what you
    measure includes whatever processing is currently active.

!!! note
    The subwoofers are a special case. Their behavior is different depending on whether the HTP-1 bass manager or the Dirac Live bass manager is engaged. When the HTP-1 bass manager is engaged (and Dirac Live is not), the bass manager is turned off and each subwoofer receives an independent signal. You cannot generate independent subwoofer signals when the Dirac Live bass manager is engaged: it applies the crossover to the main channels and generates all of the subwoofers you have enabled. Subwoofer 1 sends signal to all subwoofers in that case.

A **Volume Control** field on this page lets you set the output level in dB without leaving the page. It is clamped to the minimum and maximum volume you have configured.

Volume changes on this page are unavailable while the Dirac Live calibration tool is connected.

Several test signals are available:

## "THX-like" Band-Limited Noise

The industry commonly uses a reference originally defined by THX. This is a band-limited pink noise signal. Each of these signals is calibrated to be at 30 dB below full scale RMS.

![Spectrum of the main-channel THX-like noise: 4th-order band-limiting filters at each end with a pink 1/f slope from 400 to 2000 Hz](images/p62-2.jpg)

The main channel spectrum looks something like the illustration above. The left- and right-hand sides of the spectrum are 4th-order band-limiting filters. The slope downward from 400 to 2000 Hz is the "pink" spectrum falling off as 1/f.

![Spectrum of the subwoofer THX-like noise: band-limited pink noise with 8th-order filters at 30 and 80 Hz](images/p62-3.jpg)

The spectrum of the subwoofer signal is quite different from the main speaker spectrum. It is similarly band-limited pink noise, but the band limiting is applied with 8th-order filters at 30 and 80 Hz.

## Full Bandwidth Pink Noise

This is pink noise without the THX-like signal's band limiting — its energy spreads across the full audible range rather than falling off at either end. It suits full-range measurement sweeps and broadband level checks in tools like REW, where the THX-like signal's band limits would get in the way.

## Louder Reference Noise

This more generic noise is band-limited differently on the mains and on the subs. The band limiting is not so drastic, and the 1/f spectrum is not so accurate.

The signal level is approximately **−20&nbsp;dBFS RMS**, about 10&nbsp;dB louder than the THX-like
signal. The main-channel signal has energy between 300&nbsp;Hz and 3&nbsp;kHz, with a spectral
peak at 1&nbsp;kHz. The subwoofer signal uses a lower frequency band.

!!! tip
    It might be easier to hear if you are just listening.

## Polarity Pulse

The polarity pulse is an upward-going tick presented about once per second. This can be helpful in checking the phase of speakers.

![Waveform of the polarity pulse: a single upward-going tick followed by ringing](images/p63-1.jpg)

## Left/Right Input as Signal

Here the left (or right) input channel is taken as the input to the signal generator and routed to the selected channel. This allows you to supply any test signal to the system via a Blu-ray player or any other test source such as REW.

This also lets you measure an enabled speaker that is not individually available in
your computer's HDMI PCM output-channel list, such as a configured height or wide speaker:

1. Send the measurement signal on the computer's left or right output channel.
2. Select that HDMI input on the HTP-1 and choose **Left input as signal** or
   **Right input as signal**, matching the channel used by the computer.
3. Choose the speaker to measure in **Speaker Select**, then turn the generator on.

The available destinations still depend on your speaker configuration and the subwoofer
restrictions described above. The channels directly available to REW depend on the audio
device and driver; see [REW's soundcard setup guide](https://www.roomeqwizard.com/betahelp/help/html/calsoundcard.html).

## Left and Right Input as Signal

This mode takes both the left and right input channels as signal at once, and routes each to its own channel. Selecting it splits **Speaker Select** into two tables — one for the left input, one for the right — so you can route a two-channel test signal. For example, you can route the left channel to a dedicated timing-reference speaker in REW while routing the right channel to the speaker being measured.

## Sine Wave

A sine wave can also be chosen as the signal. Frequency is adjustable from 10 to 20000 Hz. Amplitude is set in dBFS (peak), from −140 to 0 dBFS.

You can type a frequency in whole Hz or an amplitude with decimal dB values. Use the
**Step size** control beside **Frequency (Hz)** to choose 1, 5, 10 or 100 Hz, and the one beside
**Amplitude (peak, dBFS)** to choose 1, 5 or 10 dB. The default steps are 10 Hz and 5 dB each
time you visit the page.

The minus/plus buttons, up/down arrow keys in a field, and mouse wheel over a focused
field use the selected step. They move to the next multiple of that step: for example,
with a 10 Hz step, 32 Hz moves up to 40 Hz or down to 30 Hz. Typed values do not have to
be multiples of the step. Values stay within the frequency and amplitude limits.

Frequency and amplitude changes are unavailable while the Dirac Live calibration tool
is connected. Disconnect the tool to adjust them here.

![Signal generator page with "Sinewave" selected, showing the Sinewave Generator frequency and amplitude controls](images/ui-sinewave-crop.png)
