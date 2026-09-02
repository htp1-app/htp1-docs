# Connectivity

This chapter covers ARC/eARC and CEC — how the HTP-1 picks up audio from your TV, and how it talks to
your TV over CEC. For network setup (Ethernet and Wi-Fi), see [Network](network.md). For the CEC
switch and options table, see [Inputs](inputs.md#hdmi-cec) — the controls live there; this chapter
covers what they mean.

## Setting Up ARC/eARC and CEC

The HTP-1 supports ARC (Audio Return Channel) and the newer eARC (Enhanced Audio Return Channel). The
ARC/eARC channel is used to return audio from the TV to the amplifier. The main difference between
ARC and eARC is that eARC can support higher-fidelity audio formats such as Dolby TrueHD and DTS-HD
Master Audio. eARC can also support Dolby Digital Plus, while only some ARC implementations support
that format. The CEC (Consumer Electronic Control) protocol is a key part of ARC, while eARC does not
depend on CEC — though some TV vendors still require CEC to be enabled on the amp for eARC to work.
eARC, being a newer standard, is only available on newer, higher-end TVs. This should change as eARC
becomes more common.

Most systems include a 4K UHD TV as well as one or more 4K sources. Most "smart" TVs have a 4K source
through built-in apps such as Netflix, which is the most common reason to use an ARC/eARC path to get
audio from the TV to the HTP-1. Some sources are also connected directly to the TV's HDMI input,
which is another reason to route audio back from the TV over ARC/eARC.

CEC and ARC implementations vary by TV model — some work better than others. It's common to try a few
things before settling on a CEC/ARC configuration you're happy with. The HTP-1 gives you a number of
options for this.

When CEC is turned on, "TV" becomes one of the available input sources.

### Connecting the HTP-1 to the TV for ARC/eARC

!!! warning
    Your TV likely has only one input that supports ARC/eARC. Be sure to connect the output of the
    HTP-1 marked **ARC/eARC** to that ARC- or ARC/eARC-capable input. Failure to use this connection
    is the most common problem with ARC/eARC setup.

### CEC Settings

Turn CEC on or off, and set the CEC options, on the [Inputs](inputs.md#hdmi-cec) page. By default CEC
is off. When you turn it on, all five CEC command switches should start out enabled — leave them that
way unless a specific device on your CEC network needs one of them disabled. For example, you might
disable **Allow automatic input switching** if a source doesn't handle it well.

Next, make sure CEC and ARC/eARC are enabled on your TV. On many TVs, CEC is marketed under a vendor-specific name rather than "CEC". Common examples include **Anynet+** (Samsung), **Simplink** (LG), **BRAVIA Sync** (Sony), **VIERA Link** (Panasonic), **EasyLink** (Philips), **Aquos Link** (Sharp), and **T-Link** (TCL). Other manufacturers simply call it **HDMI Control** or **HDMI-CEC**.

Then, in the TV’s **Speaker** or **Audio Output** settings, select the option that sends audio to the HTP-1 instead of using the TV speakers. Depending on the TV, this option may be called **Receiver**, **Audio System**, **HDMI ARC**, or **eARC**.

### Alternate TV Input

If ARC/eARC is unavailable, you can send the TV’s audio to another HTP-1 input instead. Connect the TV’s audio output to an HTP-1 input, then select that input as **Alternate TV Input** in the CEC Options table on the Inputs page. When the TV requests audio playback over CEC, the HTP-1 will use this input.

### TV Audio Priority

The HTP-1 has three ways to pick up audio from the TV: eARC, ARC, or the alternate, user-defined
input. It tries them in that order — eARC, then ARC, then Alternate. When TV is the current input,
which of the three is actually in use is shown as **TV Sound Source** on the
[System Status](system-status.md) page.

### System Audio Control

CEC includes a feature called **System Audio Control**. Within this feature, **System Audio Mode** determines whether audio is played by the TV or by an external audio device such as the HTP-1. When System Audio Mode is enabled, the HTP-1 is the active audio device. When it is disabled, the TV uses its own speakers instead.

When the HTP-1 powers on with CEC enabled, it requests that System Audio Mode be enabled and automatically selects the appropriate audio source. If no active source is found, it remains on the last input used.

Most TVs provide an audio output setting with choices such as **TV Speakers**, **Audio System**, or **Receiver**. In this setting, **Audio System** refers to the external audio device, not to the CEC feature itself. Selecting **TV Speakers** disables System Audio Mode, causing the TV to play audio through its own speakers. Selecting **Audio System** or **Receiver** enables System Audio Mode again and returns audio playback to the HTP-1.

You can also re-enable System Audio Mode by selecting an audio-only source on the HTP-1, such as **Coax**, **Optical**, or **USB**.
