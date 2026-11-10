# Addons

Addons are optional features that extend the HTP-1's functionality. They are distributed through
repositories provided by addon developers.

![Addons page with no repositories configured](images/ui-addons.jpg)

## Adding a Repository

Open **Addons** in the settings sidebar. Paste the repository URL provided by the addon developer
under **Add a repository**, then click **Add**.

The HTP-1 project's own addons, including AirPlay, Spotify Connect and DLNA, are in the repository
`https://github.com/htp1-app/htp1-addons`.

Adding a repository does not install anything. The page lists the addons available from that
repository, together with their descriptions and versions.

!!! warning
    Only add repositories from developers you trust. Addons run software on your HTP-1 and may
    change how it works.

## Installing and Managing Addons

Click **Install** to add an available addon. Use **Update** when a newer version is offered, or
**Remove** to uninstall an addon. Some installed addons also provide a switch to enable or disable
them without uninstalling. An installed addon that has its own page shows an **Open** link beside
its version.

The page indicates when an addon requires newer firmware or other addons. If another installed
addon depends on it, **Remove** is unavailable until that dependency is removed.

Use **Refresh** to check a repository for available versions again. **Remove** beside the repository
name removes that repository from the list; it is separate from uninstalling an addon.

## AirPlay, Spotify Connect and DLNA

The htp1-addons repository provides three network receivers. Install the ones you want; each has its
own switch.

| Addon | Plays from |
|---|---|
| AirPlay | Apple devices and apps that support AirPlay 2. |
| Spotify | The Spotify app, using Spotify Connect. Requires a Spotify Premium account. |
| DLNA | UPnP/DLNA control apps such as BubbleUPnP, Hi-Fi Cast, VLC and Windows "Cast to device". Google Cast is not supported. |

Each receiver appears on your network under the HTP-1's [Unit Name](device-settings.md#unit-name),
and on the HTP-1 as an input with the addon's name.

- Starting playback from a sender selects that input, waking the HTP-1 first if it is in standby.
- These inputs are not shown on the Home page at first, because selecting one by hand plays nothing.
  Turn on **Show on Home** for an input on the [Inputs](inputs.md) page if you want a button for it.
  The remote's **STRM+** button does not include them.
- The sender's volume control raises or lowers the HTP-1's volume from its current level. Starting
  playback does not change the volume, and a level you set on the HTP-1 stays until you move the
  sender's volume.
- Selecting another input, or putting the HTP-1 into standby, ends the sender's session. Start
  playback from the sender again to resume. Starting playback on one receiver also ends the session
  of another that was playing.
- While a receiver's switch is off, it is not available on your network.

## Returning to the Built-In Web Interface

Some addons can replace the HTP-1's usual home interface. You can always open the built-in WebUI
directly at `http://<your-htp1-ip>/ui/default`.
