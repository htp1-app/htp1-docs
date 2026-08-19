# Apps & Integrations

Software built by the HTP-1 community, including remotes, home-automation integrations, and more.

!!! tip
    Looking for what the HTP-1 provides *itself*, such as Roon Ready, the built-in mobile remote, or
    HTTP control for home automation? That's
    [Integrations and Control](../user-guide/integrations.md) in the user manual. This page covers
    what other people have built on top of those interfaces.

## Apps

### HTP-1 Remote

*iOS and Android · open source*

A native remote for the HTP-1, available for both iPhone and Android. It gives you the everyday
controls (volume, input selection, upmixer, and modes) without loading the full web interface in a
browser. Both apps are built from the same repository.

**Requirements**

- An iPhone, iPad, or Android device on the same network as your HTP-1
- Firmware 2.1.2 or later, so the app finds your HTP-1 on the network by itself. On older firmware,
  connect by IP address instead, using the address shown on the front panel **Help** screen (tap the
  **?** icon in the top right)

**Install**

<div class="store-badges" markdown>
[![Download on the App Store](../assets/download-on-the-app-store.svg)](https://apps.apple.com/app/htp-1-remote/id6797359816)
[![Get it on Google Play](../assets/get-it-on-google-play.png)](https://play.google.com/store/apps/details?id=app.htp1.controller)
</div>

**Source and issues**

[:material-github: Source on GitHub](https://github.com/htp1-app/htp1-native-controller){ .md-button }
[:material-bug: Report an issue](https://github.com/htp1-app/htp1-native-controller/issues){ .md-button }

## Home Automation

### Monoprice HTP-1 for Home Assistant

*Home Assistant custom component · open source (MIT) · by [TimoJJ](https://github.com/TimoJJ)*

Brings the HTP-1 into [Home Assistant](https://www.home-assistant.io/) as a device, so its state is
available to dashboards, automations, and anything else you drive from HA. It is set up through Home
Assistant's own integrations UI once installed, and only needs the unit's IP address.

**Requirements**

- A running Home Assistant instance that can reach the HTP-1 on your network
- The HTP-1's IP address, shown on the front panel **Help** screen (tap the **?** icon in the top
  right)

**Install**

This is a custom component and is not currently distributed through HACS, so installation is manual:

1. Download the latest release archive from the repository.
2. Copy the `monoprice_htp1` directory out of the archive into a `custom_components` directory under
   your Home Assistant configuration directory.
3. Restart Home Assistant.
4. Go to **Settings → Devices & Services → Add Integration** and search for **Monoprice**.
5. Enter your HTP-1's IP address. Entities appear and begin updating after roughly 10–15 seconds.

To update later, delete the old `monoprice_htp1` directory, copy in the new one, and restart Home
Assistant again.

**Source and issues**

[:material-github: Source on GitHub](https://github.com/TimoJJ/ha-monolith-htp1){ .md-button }
[:material-bug: Report an issue](https://github.com/TimoJJ/ha-monolith-htp1/issues){ .md-button }

### Monoprice HTP-1 for Unfolded Circle

*Unfolded Circle Remote 2/3 integration · open source (MPL-2.0) · by
[Meir Miyara](https://github.com/mase1981)*

Adds the HTP-1 to an [Unfolded Circle](https://www.unfoldedcircle.com/) Remote 2 or Remote 3, so the
processor can be driven from the remote itself and pulled into its activities. It connects over the
HTP-1's own WebSocket interface and exposes a media player entity for the everyday controls, a
remote entity for activity buttons, and sensors that report the unit's state.

Between them the entities cover power, volume and mute, input selection, upmixer and listening
modes, Dirac calibration slot selection, Seat Shaker trim and presets, and browsing or loading BEQ
filters.

**Requirements**

- An Unfolded Circle Remote 2 or Remote 3 on the same network as the HTP-1
- A wired connection for the HTP-1, with a static IP address or a DHCP reservation, is recommended
  so the integration keeps finding it
- The HTP-1's IP address, shown on the front panel **Help** screen (tap the **?** icon in the top
  right)

**Install**

The integration can run on the remote itself, or as a Docker container elsewhere on your network.
To install it on the remote:

1. Download the latest `uc-intg-monoprice-htp1-<version>-aarch64.tar.gz` from the repository's
   releases page.
2. Open your remote's web interface at `http://<remote-ip>`.
3. Go to **Settings → Integrations → Add Integration**.
4. Choose **Upload** and select the archive you downloaded.
5. Enter your HTP-1's IP address and a name for the device.

To run it in Docker instead, use the `ghcr.io/mase1981/uc-intg-monoprice-htp1:latest` image with the
Compose example in the repository, then add it to the remote as an external integration. The author
recommends this if you plan to use the BEQ filter browser, which is less reliable when the
integration runs on the remote's own hardware.

**Source and issues**

[:material-github: Source on GitHub](https://github.com/mase1981/uc-intg-monoprice-htp1){ .md-button }
[:material-bug: Report an issue](https://github.com/mase1981/uc-intg-monoprice-htp1/issues){ .md-button }

## Tools and Utilities

Nothing listed yet. If you have built something, such as a configuration editor, a measurement
helper, or a client library, it belongs here.

## Adding your project

Built something for the HTP-1? Open an issue on the
[documentation repository](https://github.com/htp1-app/htp1-docs/issues) with a link to the project
and a short description, and it can be listed here.
