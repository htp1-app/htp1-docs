# Troubleshooting

## Safari Browser

Loading the Web GUI in Safari can fail. Workarounds:

- Turn off content blockers (Safari > Settings > Websites > Content Blockers > Off) and iCloud
  Private Relay (System Settings > iCloud > Private Relay > Off), then reload the Web GUI.
- Try the local hostname shown on the front panel's **Help** screen instead of the numeric IP address.
  Enter the address with `http://`, for example `http://htp-1.local`.

!!! note "Local hostname availability"
    The HTP-1 advertises its local hostname using mDNS. Your browser must support mDNS, and the network
    must allow the required local multicast traffic. Router DNS support is not required. If the
    hostname does not resolve, use the IP address shown on the front panel's Help screen.

## Front Panel Stays at Almost Ready

After an unexpected restart, the front panel may remain at **Almost ready** even though the unit has
started. Reloading the front panel may recover it: press **B** on the remote while it still has its
default **Reload Front Panel** macro. See
[Color Buttons and A-D / Preset Buttons](reference.md#color-buttons-and-a-d-preset-buttons).

## DTS 6.1 Reported as 7.1

In version 2.2.0, DTS 6.1 content can be reported as 7.1 in **Program Format**. This is a known
issue.
