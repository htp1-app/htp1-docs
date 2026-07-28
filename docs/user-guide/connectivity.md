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
is off. When you turn it on, all five CEC options should start out enabled — leave them that way
unless a specific device on your CEC network needs one of them disabled. For example, you might
disable Allow Input changes if a source doesn't handle it well.

Next, make sure CEC and ARC are turned on for your TV, if they aren't already. These settings may go
by other names on your TV, such as "HDMI control" — there are too many variants to list them all. The
ARC on/off setting is often found under the TV's Speaker or Audio settings; many TVs let you choose
between TV Speakers and ARC/HDMI.

### Alternate TV Input

If your TV does not support ARC/eARC, or you need to connect an HTP-1 HDMI output to a TV input that
doesn't support ARC/eARC, use **Alternate TV Input** (in the CEC Options table on the Inputs page) to
tell the HTP-1 which of its own inputs carries TV audio instead. Associating one of these inputs with
the TV lets the HTP-1 know where to pick up audio when it's told, over CEC, to do so. If you use an
alternate TV input, be sure to run a cable from the TV's audio output to whichever HTP-1 input you
select here.

### TV Audio Priority

The HTP-1 has three ways to pick up audio from the TV: eARC, ARC, or the alternate, user-defined
input. It tries them in that order — eARC, then ARC, then Alternate. When TV is the current input,
which of the three is actually in use is shown as **TV Sound Source** on the
[System Status](system-status.md) page.

### System Audio

CEC has a feature called System Audio. When System Audio is on, the amplifier (the HTP-1) is asked to
render audio for the system. When off, the TV is asked to render it instead. The HTP-1 always turns
System Audio on when it first powers on, and tries to work out where it should pick up audio from: if
there is an active source elsewhere in the system, it configures itself to pick up audio from that
device; if it can't find one, it stays on the last input used.

Most TVs let you choose which device renders audio (such as TV Speakers or Amp/Receiver). When you
deselect the HTP-1 as the audio renderer, the TV sends a command that turns System Audio off. The
HTP-1 then stops rendering audio and configures the HDMI board to pass audio straight through from
its inputs to its outputs, while the EDIDs it presents are updated with the TV's own audio
capabilities so your sources hand it audio it can play.

To get the HTP-1 rendering audio again, you have two options:

- Use the TV's speaker settings to select the amplifier again. The TV then sends a command turning
  System Audio back on and tells the HTP-1 where to pick up audio from.
- Select an audio-only source on the HTP-1, such as Coax, Optical, or USB. This also turns System
  Audio back on.

<!-- verify: whether the front panel or web UI shows any "TV Audio" indicator while System Audio is off -->

## Troubleshooting Connections

### Safari Browser

Loading the Web GUI in Safari can fail. Workarounds:

- Turn off content blockers (Safari > Settings > Websites > Content Blockers > Off) and iCloud
  Private Relay (System Settings > iCloud > Private Relay > Off), then reload the Web GUI.
- On the [Device Settings](device-settings.md) page, set the **Web UI IP address** field to a hostname (e.g.
  `htp-1`) instead of an IP address, and save. The hostname may include only letters (a–z,
  case-insensitive), numbers (0–9), and hyphens (-). Use this hostname in the address bar instead of
  the numeric IP address.
