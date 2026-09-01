# Troubleshooting

## Safari Browser

Loading the Web GUI in Safari can fail. Workarounds:

- Turn off content blockers (Safari > Settings > Websites > Content Blockers > Off) and iCloud
  Private Relay (System Settings > iCloud > Private Relay > Off), then reload the Web GUI.
- On the [Device Settings](device-settings.md) page, set the **Unit Name** field to something like
  `htp-1`. This hostname may include only letters (a–z,
  case-insensitive), numbers (0–9), and hyphens (-). In the Safari address bar, append `.local`
  to the hostname you set (for example, `htp-1.local`) instead of using the numeric IP address.
