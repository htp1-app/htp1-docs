# Troubleshooting

## Safari Browser

Loading the Web GUI in Safari can fail. Workarounds:

- Turn off content blockers (Safari > Settings > Websites > Content Blockers > Off) and iCloud
  Private Relay (System Settings > iCloud > Private Relay > Off), then reload the Web GUI.
- On the [Device Settings](device-settings.md) page, set the **Unit Name** field to something like
  `htp-1`. For the best hostname compatibility, use only letters (a–z, case-insensitive), numbers
  (0–9), and hyphens (-), with a letter or number at the beginning and end. If your router supports
  local hostname resolution, try `htp-1.local` in Safari instead of the numeric IP address.

!!! note "Local hostname availability"
    The `htp-1.local` address relies on a router feature, not the HTP-1, and may not work with every
    router. Look for **Local Hostname Resolution** or **Local DNS** in your router's settings.
