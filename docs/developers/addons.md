# Addon Development

An addon is a package that adds software to the HTP-1 without changing the firmware. Users install,
update, switch on and off, and remove addons on the [Addons](../user-guide/addons.md) page, from
repositories they add themselves. An installed addon survives firmware updates, and removing it
returns the unit to stock.

This page explains what the firmware provides, what the unit is like as a target, and how to build,
publish and debug an addon. The field-by-field reference for the manifest and the catalog is
[`docs/format.md`](https://github.com/htp1-app/htp1-addons/blob/main/docs/format.md) in the
[htp1-addons](https://github.com/htp1-app/htp1-addons) repository. That repository's AirPlay, Spotify
Connect and DLNA addons are complete, working examples.

Addon support arrived with firmware 2.2.0.

!!! warning
    An addon runs with full access to the unit. There is no sandbox, no package signing and no
    resource limit. The repository's SHA-256 checksums protect a download, not its author's
    intentions. Write addons that leave the firmware's own files and processes alone, and say
    clearly what yours does.

## What the Firmware Provides

| Feature | What an addon gets |
|---|---|
| Catalog | The Addons page lists every addon offered by the repositories the user has added, offers updates, and checks firmware and dependency requirements before installing. |
| Installation | Download, checksum verification, offline `.deb` installation, systemd unit registration and install hooks, with rollback if an upgrade fails. |
| Switch | An optional on/off switch on the Addons page that starts and stops the addon's service. |
| Audio input (`source/1`) | An input in the HTP-1's input table, selected when the addon's player starts playback, with wake from standby, sender volume and release handled by the firmware. |
| Page | A web page served from the unit and linked from the Addons page, or a page that replaces the HTP-1's home interface (`ui-home/1`). |
| Node-RED flows | Flow files linked into the unit's Node-RED. |

An addon declares the capabilities it needs in `requires.capabilities`. A unit without one refuses
the install, and the Addons page says why. Firmware 2.2.0 offers `source/1` and `ui-home/1`.

## The Target

| | |
|---|---|
| Processor | Allwinner A20, dual Cortex-A7 (`armhf`), PREEMPT_RT kernel |
| Operating system | Debian 9, glibc 2.24 |
| Node-RED | 1.0 on Node.js 9.5.0 |
| Package sources | None. The unit's apt sources no longer work, and a unit cannot be assumed to have internet access. |
| Addon files | `/var/lib/olympia/addons/<id>/` |
| Logs | `/var/log` is a 50 MB RAM disk. Log to the journal or rotate, and keep verbose logging off by default. |

Build binaries for `armhf` against Debian 9, either in a Debian 9 container under QEMU
(`--platform linux/arm/v7`) or with a cross-compiler. Link statically anything the unit lacks, and
check the result on a unit with `ldd` before shipping. Ship any Debian packages you depend on as exact
`.deb` files in `debs/`. The unit installs them offline, never replaces a system package that was
already there, and purges them on removal unless another addon still uses them.

The `build/` directory of each addon in htp1-addons holds the Docker recipe that produced its
binary.

## Package Layout

```text
<id>/
  addon.json      manifest
  bin/            executables
  etc/            configuration
  units/          systemd units, registered by absolute path
  debs/           exact .deb packages
  flows/          Node-RED flow files
  www/            web page, served at /addons/<id>/
  hooks/          install, uninstall, pre-upgrade, post-update, boot
  state/          runtime data, kept when the addon is upgraded
```

The package is a `.tar.gz` with this directory as its single top level. `tools/pack.sh <id>` in
htp1-addons builds it reproducibly, sets permissions, and builds the web page first if the addon has a
`package.json`.

A minimal manifest for a service with a switch:

```json
{
  "id": "example",
  "version": "0.1.0",
  "label": "Example",
  "summary": "What it does, in one line",
  "units": { "example.service": "link" },
  "service": { "unit": "example.service", "defaultOn": false },
  "ui": { "switch": true, "page": null }
}
```

Key rules. See [`format.md`](https://github.com/htp1-app/htp1-addons/blob/main/docs/format.md#manifest) for every field.

- `id` uses lower-case letters, digits and hyphens. `catalog`, `install`, `remove`, `refresh`,
  `source` and `operations` are reserved.
- `version` follows Semantic Versioning. A prerelease such as `1.0.0-beta.1` sorts below
  `1.0.0`. An update is offered whenever the catalog's version is higher than the installed one; the
  unit never offers a downgrade.
- Unit names must not clash with a unit the system or another addon provides, and an input code must
  not clash with an existing input.
- Every field is checked before anything is installed. An installed manifest that fails the checks is
  listed on the Addons page with its error and is not acted on.

## Lifecycle

**Install.** The unit records the operation and runs it outside Node-RED. It then:

1. Downloads the package and verifies its checksum.
2. Unpacks it and installs any `.deb` files not already present.
3. Registers the units and links `flows/` and `www/`.
4. Runs `hooks/install` and starts any `enable` units.

Only one install or removal runs at a time, and the Addons page shows its progress.

**Switch.** Units are registered in one of two modes:

- **`link` mode:** registered only. The firmware starts and stops `service.unit` when the user
  switches the addon on or off, and when Node-RED starts. Any other `link` unit must be pulled in by
  that service (for example with `Requires=`).
- **`enable` mode:** enabled and started at install, then started by systemd at every boot,
  independent of the switch.

**Upgrade.** The new version replaces the old one in these steps:

1. The old version's `pre-upgrade` hook runs. If it fails, the upgrade stops.
2. Its units are stopped. A unit that won't stop aborts the upgrade.
3. `state/` is carried over and the old version is set aside.
4. The new version is activated, which runs its `install` hook.

If activation fails, the old version is put back. Each step is journaled, so an interrupted change is
finished or undone at the latest at the next boot.

**Remove.** Removal is refused while another installed addon depends on this one, or while one of its
units won't stop. Otherwise the unit runs `hooks/uninstall`, unregisters everything, purges the
packages the addon installed and deletes its directory.

**Boot and firmware updates.** At boot the unit finishes or undoes any interrupted change before the
firmware's services start, then runs `hooks/boot` in the background. After a firmware update it
re-registers units and links and runs `hooks/post-update`. It does not reinstall `.deb` files. If the
firmware now provides a unit with the same name, the firmware's unit wins and the addon is set aside
with a message on the Addons page.

### Hooks

| Hook | When | If it fails |
|---|---|---|
| `install` | After the files are in place, on install and upgrade | The install fails |
| `pre-upgrade` | In the old version, before it is replaced | The upgrade is aborted |
| `uninstall` | On removal, before the files are deleted | Ignored |
| `post-update` | After a firmware update | Ignored |
| `boot` | At every boot, in the background | Ignored |

Hooks are bash scripts. They receive `ADDON_ID`, `ADDON_DIR`, `ADDONS_DIR` and `OLYMPIA` in the
environment and are killed after two minutes.

## Audio Sources

An addon that plays audio, such as a network receiver, declares an input and requires `source/1`:

```json
"requires": { "capabilities": ["source/1"] },
"units": { "receiver.service": "link" },
"service": { "unit": "receiver.service", "defaultOn": true },
"input": { "code": "receiver", "label": "Receiver", "routesTo": "i2s",
           "release": "restart", "shield": true }
```

The firmware adds the input to the input table. It starts hidden from the Home page and is never in
the remote's input cycle, because a receiver's input is selected by its sender starting playback;
picked by hand it plays nothing. The input's audio goes through the same processing as any other
input: Dirac Live, bass management, volume and so on.

### The Audio Device

The player writes to the I2S playback device: card 0, `Olympia I2S` (`hw:I2S,0` or `default:I2S`).

- **Formats:** it accepts S16_LE and S24_LE. It has no mixer control.
- **One player at a time:** a second player opening it gets `EBUSY`. Hold it only while playing.
- **Periods:** use 1024-frame periods or larger. Short periods, such as shairport-sync's default
  256 frames, underrun the DMA.
- **Timing:** a player that measures output delay, as AirPlay 2 does, should open `hw:I2S,0`
  directly. Through `default:I2S` shairport-sync refuses its precision timing, and its delay readings
  were wrong enough to resync constantly.

### Telling the Firmware About Playback

Call `/opt/olympia/addon-source` from the player's event hooks:

| Call | When |
|---|---|
| `addon-source start <id>` | Synchronously, just before the player opens the device for a new stream or a resume. |
| `addon-source volume <id> <fraction>` | Whenever the sender's volume changes, as 0 to 1 of the sender's range. |
| `addon-source mute <id>` | When the sender mutes or reaches the bottom of its range. |

**`start`** selects the input, or wakes the unit from standby and selects it once the unit is
running. It returns once the device is free, or after about 2.5 seconds if it is still held. If
another addon source is playing, that source is restarted to free the device. The latest start wins,
and a user choosing an input or putting the unit into standby cancels a start that is still waiting.

**`volume` and `mute`** move the unit's volume relatively. Each report moves it by the change since
the sender's previous report, with the sender's whole range spanning 60 dB, inside the unit's
calibrated limits. Starting playback therefore never changes the level, and a level set with the
remote stays until the sender's slider moves. A single report moves the volume up by at most 7.5 dB
and down by at most 15 dB.

A well-formed call always exits 0, so a player never fails because Node-RED is busy. Calls are
accepted only from an addon that is installed, valid, switched on and owns its input.

### Release, Shield and Process Placement

- **`release: "restart"`:** the firmware restarts `service.unit` when the input is deselected and
  when the unit enters standby. That ends the sender's session and frees the device. Set a
  `KillSignal=` that lets your player say goodbye to its sender, and stop promptly: when a USB,
  Bluetooth or Roon player takes the device next, the firmware waits at most five seconds.
- **Process placement:** the firmware finds the device's holder from the ALSA owner's systemd unit,
  so the player must run inside the addon's own service.
- **`shield: true`:** the firmware dedicates CPU 1 to the `user` cpuset while the input is
  selected, the addon is on and the unit is on. It does not move your processes there. Each shipped
  receiver unit does that itself and runs its player at `SCHED_FIFO` priority 45:

    ```ini
    CPUSchedulingPolicy=fifo
    CPUSchedulingPriority=45
    ExecStartPost=/bin/bash -c 'echo $MAINPID > /sys/fs/cgroup/cpuset/user/cgroup.procs 2>/dev/null || true'
    KillSignal=SIGINT
    ```

The three receivers in htp1-addons show the common hook patterns:
- shairport-sync's `sessioncontrol` with `wait_for_completion = "yes"`;
- librespot's `--onevent` with `--emit-sink-events`;
- gmediarender with a start command.

## Pages

- **`ui.page`:** a path under `/addons/<id>/` that the addon serves from `www/`. The Addons page
  shows an **Open** link to it once the addon is installed.
- **`ui.home`:** requires `ui-home/1`. While the addon is switched on, which is off after install,
  `/` redirects to this page instead of the HTP-1's WebUI. The built-in WebUI always stays reachable at
  `/ui/default`. Build such a page with absolute `/addons/<id>/` asset paths.

A page talks to the unit the way the WebUI does, over the websocket at `/ws/controller`, reading and
changing the unit's state object (MSO). The MSO is the firmware's internal state, not a published
API: its paths can change between firmware versions, and nothing restricts what an addon may change.
Change only what your addon needs, and test against each firmware release.

## Node-RED Flows

Each file in `flows/` is linked into the unit's Node-RED as `addon-<id>-<file>.yaml`. A flow file must:

- be one tab labelled `addon-<id>-<file>`, with every node on that tab;
- not define subflows;
- use only node types the unit's Node-RED has installed;
- use node ids that no other flow file uses.

Flows are checked before they are linked. Failing flows refuse the install or stay unlinked, with the
reason on the Addons page. Node-RED restarts to load linked flows, and the flows run on Node.js 9.5.

## Publishing a Repository

A repository is an `index.json` that lists each addon's current version and download:

```json
{
  "name": "my-addons",
  "updated": "2026-11-09T12:00:00Z",
  "addons": [
    {
      "id": "example", "version": "0.1.0", "label": "Example",
      "summary": "What it does, in one line",
      "requires": {},
      "url": "https://github.com/<owner>/<repo>/releases/download/v0.1.0/htp1-addon-example-0.1.0.tar.gz",
      "sha256": "<64 lower-case hex digits>", "size": 12345
    }
  ]
}
```

Users add either of these on the Addons page:
- a GitHub repository address, such as `https://github.com/<owner>/<repo>`, which the unit reads as
  the `index.json` on that repository's `main` branch;
- any `https://` address of an `index.json` file.

Every entry needs a `url` and a `sha256`. The unit refuses a download whose checksum or id and version
don't match its entry. When more than one added repository offers the same id, the first added
wins.

htp1-addons' `tools/index.sh <tag>` packs every published addon and writes `index.json` with download
addresses for that release tag. A manifest with `"published": false` keeps a work-in-progress addon
out of the catalog. Release in this order, so a unit that refreshes in between never sees a download
that doesn't exist yet:

1. Run `tools/index.sh <tag>` and commit the new `index.json` without pushing `main`.
2. Push the tag, and create the release with the tarballs from `dist/` as its assets.
3. Push `main`.

## Testing and Debugging

- **Try a package:** a package can be installed on a unit by hand with `addonctl install <tarball>`,
  without publishing it. The Addons page then lists it as installed from elsewhere.
- **On a unit you can reach over SSH:**
  - `addonctl list` and `addonctl status <id>` show what is installed and registered.
  - `systemctl status` and `journalctl -u <unit>` show the services.
  - Each web install or removal leaves its record in `/var/lib/olympia/addons/.ops/`.
  - `state/units-refused` and `state/flows-refused` in the addon's directory say why a unit or flow
    was not registered.
  - `hooks/boot` output goes to `/var/log/olympia/olympia.log`.
- **Without shell access:** an addon can serve its own diagnostics page, for example to show its logs
  or configuration. Remember that whatever it exposes is reachable by anyone on the network.
