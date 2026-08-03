# Apps & Integrations

Software built by the HTP-1 community — remotes, home-automation integrations, and tools. None of
these are Monoprice products. They exist because the HTP-1 exposes a documented control interface on
your local network.

!!! note
    Everything listed here is third-party software. It is not supplied or supported by Monoprice.
    Each entry links to its own source, so you can see what a project does before pointing it at your
    hardware, and each has its own place to report problems.

!!! tip
    Looking for what the HTP-1 provides *itself* — Roon Ready, the built-in mobile remote, or HTTP
    control for home automation? That's [Integrations and Control](../user-guide/integrations.md) in
    the user manual. This page covers what other people have built on top of those interfaces.

## Apps

### HTP-1 Native Controller

*iOS · open source*

A native iOS remote for the HTP-1. It gives you the everyday controls — volume, input selection,
upmixer, and modes — from an iPhone, without loading the full web interface in a browser.

**Requirements**

- An iPhone or iPad on the same network as your HTP-1
- The HTP-1's IP address, shown on the front panel **Help** screen (tap the **?** icon in the top
  right)

**Install**

<!-- APP STORE LINK PLACEHOLDER -->
<!-- When the app is approved, replace the href below with the real App Store product URL -->
<!-- (https://apps.apple.com/app/id<APP_ID>) and delete the "pending review" line beneath it. -->
[![Download on the App Store](../assets/download-on-the-app-store.svg){ width="160" }](https://apps.apple.com/)

*Pending App Store review — this badge will link to the listing once the app is approved.*

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

## Tools and Utilities

Nothing listed yet. If you have built something — a configuration editor, a measurement helper, a
client library — it belongs here.

## Adding your project

Built something for the HTP-1? Open an issue on the
[documentation repository](https://github.com/htp1-app/htp1-docs/issues) with a link to the project
and a short description, and it can be listed here.
