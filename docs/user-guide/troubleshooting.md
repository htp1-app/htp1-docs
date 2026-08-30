# Troubleshooting

## Safari Browser

Loading the Web GUI in Safari can fail. Workarounds:

- Turn off content blockers (Safari > Settings > Websites > Content Blockers > Off) and iCloud
  Private Relay (System Settings > iCloud > Private Relay > Off), then reload the Web GUI.
- On the [Device Settings](device-settings.md) page, set the **Web UI IP address** field to a hostname (e.g.
  `htp-1`) instead of an IP address, and save. The hostname may include only letters (a–z,
  case-insensitive), numbers (0–9), and hyphens (-). Use this hostname in the address bar instead of
  the numeric IP address.
