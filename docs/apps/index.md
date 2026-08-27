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

A native remote for the HTP-1, available for iOS and Android. It provides volume, input and upmixer
selection, Dirac Live, and Bass EQ controls without loading the full web interface in a browser.
Both apps are built from the same repository.

On firmware 2.1.2 or later the app finds your HTP-1 on the network by itself. On older firmware,
connect by IP address instead, using the address shown on the front panel **Help** screen (tap the
**?** icon in the top right).

<div class="store-badges" markdown>
[![Download on the App Store](../assets/download-on-the-app-store.svg)](https://apps.apple.com/app/htp-1-remote/id6797359816)
[![Get it on Google Play](../assets/get-it-on-google-play.png)](https://play.google.com/store/apps/details?id=app.htp1.controller)
</div>

[:material-github: Source on GitHub](https://github.com/htp1-app/htp1-native-controller){ .md-button }
[:material-bug: Report an issue](https://github.com/htp1-app/htp1-native-controller/issues){ .md-button }

## Home Automation

### Monoprice HTP-1 for Home Assistant

*Home Assistant custom component · open source (MIT) · by [TimoJJ](https://github.com/TimoJJ)*

Brings the HTP-1 into [Home Assistant](https://www.home-assistant.io/) as a device, so its state is
available to dashboards, automations, and anything else you drive from HA. It is set up through Home
Assistant's own integrations UI once installed, and only needs the unit's IP address.

It can be installed through HACS as a custom repository or installed manually. The repository has
the current steps for both methods.

[:material-book-open-variant: Setup instructions](https://github.com/TimoJJ/ha-monolith-htp1#readme){ .md-button }
[:material-github: Source on GitHub](https://github.com/TimoJJ/ha-monolith-htp1){ .md-button }
[:material-bug: Report an issue](https://github.com/TimoJJ/ha-monolith-htp1/issues){ .md-button }

### Monoprice HTP-1 for Unfolded Circle

*Unfolded Circle Remote 2/3 integration · open source (MPL-2.0) · by
[Meir Miyara](https://github.com/mase1981)*

Adds the HTP-1 to an [Unfolded Circle](https://www.unfoldedcircle.com/) Remote 2 or Remote 3, so the
processor can be controlled from the remote and included in its activities. The exposed entities
cover power, volume and mute, input selection, upmixer and listening modes, Dirac Live calibration
slot selection, Seat Shaker trim and presets, and browsing or loading BEQ filters.

It can run on the remote itself or as a Docker container elsewhere on your network. Both methods
require the HTP-1's IP address; the repository has the current setup instructions.

[:material-book-open-variant: Setup instructions](https://github.com/mase1981/uc-intg-monoprice-htp1#readme){ .md-button }
[:material-github: Source on GitHub](https://github.com/mase1981/uc-intg-monoprice-htp1){ .md-button }
[:material-bug: Report an issue](https://github.com/mase1981/uc-intg-monoprice-htp1/issues){ .md-button }

## Tools and Utilities

Nothing listed yet. If you have built something, such as a configuration editor, a measurement
helper, or a client library, it belongs here.

## Adding your project

Built something for the HTP-1? Open an issue on the
[documentation repository](https://github.com/htp1-app/htp1-docs/issues) with a link to the project
and a short description, and it can be listed here.
