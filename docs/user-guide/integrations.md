# Integrations and Control

## Using Roon

The HTP-1 is a Roon Ready device — Roon can send audio to it directly, with no separate app or
streamer needed. Roon is a music service you subscribe to, built around a locally stored or
network-attached music archive that can include high-quality formats like 96 kHz/24-bit and
192 kHz.

A Roon system needs a Roon Server, which knows where your music is (this can run on a PC or a
NAS), and a controller to browse your library and press play — the Roon app on a phone or PC. The
HTP-1 does not perform either of these roles; it is only the output device.

Select the **Roon** input on the HTP-1, then pick the HTP-1 as the output zone in Roon. It appears
in Roon's device list under whatever you've set as your **Unit Name** on the Device Settings page.

The Roon input works like any other input on the HTP-1: you can apply any of the upmixers to
expand a stereo Roon stream across your speaker layout, or leave it at **Direct** to pass the
source sample rate through unchanged. Every other upmixer resamples to 48 kHz (or 44.1 kHz), and
any loaded Dirac Live filter also caps output at 48 kHz — so a stream above that rate only stays
at its original rate with Direct selected and Dirac Live off.

!!! note
    Streaming at 44.1 kHz can be less stable through the Dirac Live path than 48 kHz. If you see
    issues, set Roon to resample to 48 kHz for this zone.

See [System Status](system-status.md) for the current release notes, which cover the latest Roon
behavior and any open issues.

## AirPlay, Spotify Connect, and DLNA

The HTP-1 can also receive audio directly from a phone, tablet, or computer, without Roon and
without any extra hardware. Three ways of sending are supported, and each one has its own input:
**AirPlay**, **Spotify**, and **DLNA**.

All three appear on your network under the unit's name, which you set as **Unit Name** on the
[Device Settings](device-settings.md) page.

You do not normally select these inputs by hand. Starting playback on the sending device selects
the matching input for you, and wakes the HTP-1 if it is asleep. For that reason they are hidden on
the Home page to begin with. If you would like buttons for them, turn on **Visible on Homepage**
for them on the [Inputs](inputs.md) page.

The volume control on the sending device adjusts the HTP-1's own volume, so what you hear matches
what the front panel and the web UI show. The front panel displays the input's name while it plays.

### AirPlay

From an iPhone, iPad, or Mac, open the AirPlay menu and pick the HTP-1.

### Spotify Connect

In the Spotify app, open the device list and pick the HTP-1. Playback moves to the HTP-1 and the app
becomes the remote control.

### DLNA

For Android phones and other devices, the HTP-1 appears as a playback device, sometimes called a
renderer or a "play to" target. Apps that support DLNA can send audio to it. VLC and BubbleUPnP are
two common examples.

!!! note
    Apps that send with Google Cast, such as YouTube, will not see the HTP-1. Google Cast is a
    licensed system and only devices certified by Google can receive it. DLNA is the open
    alternative, so an app has to offer DLNA for this to work.

## Mobile Remote

The HTP-1 serves a simple remote control page for phones and tablets at
`http://<your-htp1-ip>/remote/`. It gives you a lightweight way to control volume, bass, upmixer, center/surrounds/heights level, and
power without loading the full web UI.

![Mobile Remote page showing playback and volume controls](images/remote.png){ width="50%" style="display: block; margin: 0 auto;" }

## HTTP Control

The HTP-1 accepts IR commands over plain HTTP, which makes it straightforward to drive from home
automation systems such as Control4, Home Assistant, or Crestron, or from your own scripts. Send a
request to:

```
http://<your-htp1-ip>/ircmd?code=XXXX
```

where `XXXX` is one of the codes from the IR code tables in [Reference](reference.md#ir-code-tables).
More than one code can be sent at once, separated by commas.

- Turn on Dirac Live filter slot 1 and unmute:

    ```
    curl "http://<your-htp1-ip>/ircmd?code=7887,4cb3"
    ```

- Select HDMI 1 and set the upmixer to Native:

    ```
    curl "http://<your-htp1-ip>/ircmd?code=0ff0,1ee1"
    ```

Every request returns the full system status as JSON, so a script can also use `/ircmd` to read
current state after making a change.

## Third-Party Applications

A number of third parties have built their own tools around the HTP-1, which are listed in the separate [Apps & Integrations](https://docs.htp1.app/apps/) section.  
They are discussed in the [Official Monoprice Monolith HTP-1 Owners Thread](https://www.avsforum.com/threads/the-official-monoprice-monolith-htp-1-owners-thread.3112176/) on the AVS Forum.

If you're building your own integration, see the Developers section of this site for the underlying control protocol.

