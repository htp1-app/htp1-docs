# User Manual screenshot status

The approved default-state 1200 px captures have been adopted. They use the unmodified shipped WebUI
(0b726dc, assembled build 3f128c9b) with isolated settings seeded from the firmware's
empty-state initialization. They are not captures of a physically factory-reset unit.
The capture viewport was 1200 × 900 CSS pixels; full-page images can be taller.
No physical-unit configuration was changed. Physical factory-default confirmation is deferred until final v2.2 preparation.

## Adopted

- [x] `ui-home.jpg`
- [x] `ui-calibration.jpg`
- [x] `ui-calibration-advanced.jpg`
- [x] `ui-balance.jpg`
- [x] `ui-device-settings.jpg`
- [x] `ui-inputs.jpg`
- [x] `ui-inputs-advanced-crop.png` — approved PCM Detect Sensitivity detail crop.
- [x] `ui-macros.jpg`
- [x] `ui-loudness.jpg`
- [x] `ui-upmix.jpg`
- [x] `ui-signal-generator.jpg`
- [x] `ui-volume-setup.jpg`
- [x] `ui-volume-advanced.jpg`
- [x] `ui-speakers.jpg`
- [x] `ui-peq.jpg`
- [x] `ui-seat-shaker.jpg`
- [x] `ui-tone-control.jpg`
- [x] `ui-personalize.jpg`
- [x] `ui-help.jpg`
- [x] `ui-export-preview-crop.png` replaces the obsolete embedded configuration pane.
- [x] `ui-addons.jpg` added to the Addons chapter.

- [x] `ui-inputs-cec-crop.png`
- [x] `ui-loudness-vintage-custom-crop.png`
- [x] `ui-peq-editor-crop.png`
- [x] `ui-peq-options-dialog-crop.png`
- [x] `ui-speakers-layout-dialog-crop.png`
- [x] `ui-sinewave-crop.png`
- [x] `ui-import-default-match-crop.png`

- [x] `ui-network.jpg` (DHCP overview with illustrative connection data).
- [x] `ui-network-static-crop.png` (static fields revealed with default blank addresses and mask).
- [x] `ui-bass-eq-author.jpg` (live catalogue, Author filter).
- [x] `ui-bass-eq-applied-browsed.jpg` (applied entry distinct from browsed entry).

Network addresses and MAC addresses in this batch are illustrative runtime data.
No network configuration was applied. BEQ application was confined to the isolated preview.
The BEQ captures were subsequently replaced with artwork-loaded mobe1969 catalogue entries.
Both replacement captures retain the 1200 px viewport; BEQ application stayed in the isolated preview.

## Adopted active meter captures

- [x] `ui-peak-monitor.jpg` (Table, 1200 px wide).
- [x] `ui-peak-monitor-bars.jpg` (Bars with Peak hold, 1200 px wide).
- [x] `fp-level-meter.png` (native front-panel capture, 800 × 480).
- [x] `fp-peak-monitor.png` (native Peak Monitor footer, 800 × 480, real signal data).

These captures use real signal data and the physical unit's current speaker configuration,
including Seat Shaker. They are not default-state examples. The user started playback
and opened the Level Meter; no playback or speaker settings were changed by the capture work.

## Adopted Help and Remote captures

- [x] `fp-help.png` (physical front-panel Help/hostname, native 800 × 480).
- [x] `remote.jpg` (Mobile Remote with default controls, 414 × 896 portrait viewport).

Help shows the unit's actual hostname, QR code and Wi-Fi connection; no network settings
were changed. Remote uses production controls and styling with source-initialized defaults
and cleared browser preferences; only its connection transport was redirected to the isolated
preview. The smaller portrait viewport reflects the Remote page's phone-oriented layout.

## Adopted calibrated-state captures

- [x] `ui-dirac-active-calibrated.jpg`: active ART and measured delay/trim table; Stereo and Movie Night slot labels. Replaces the legacy `p55-1.jpg` and `art-p14-1.png` illustrations.
- [x] `ui-calibration-slot-rename-crop.png`: Movie Night custom label and original Dirac filter name.

Captured at 1200 px from an isolated copy of the physical unit calibration state.
Only display labels were changed; the physical unit was unchanged.

## Adopted main-panel and PEQ button captures

- [x] `fp-main.png`: native 800 × 480 Default-theme panel, actual playback state; replaces `fp-p01-1.png`.
- [x] `ui-peq-options-button.jpg`: Change PEQ Configuration button detail from a 1200 px default-state preview; replaces `art-p09-1.png`.

Alternative-panel theme, mini-labels and text-color controls remain text-only by request.
No screenshots are required for those features.

## Adopted import differences capture

- [x] `ui-import-differences-detail.png`: relevant Import section cropped from the 1200 px preview, with context above and below. The example changes unit name to Living Room and lip-sync to 20 ms. No import was performed.

## Adopted legacy upgrade capture

- [x] `legacy-1-13-3-art-upgrade-preparation-detail.jpg`: original 1.13.3 preparation page rendered locally at a 1200 px viewport; labelled for the 1.x upgrade procedure. No upgrade action was performed.

## Adopted bass-management and Speaker Map follow-up

- [x] `ui-speakers-21.png`: isolated 1200 px example with Left/Right Small, the source-default 80 Hz crossover, and one subwoofer enabled. LPF for LFE remains 120 Hz and Reinforce Bass remains off. Used in Bass Management; this is an illustrative 2.1 configuration, not the default speaker layout.
- [x] `ui-speaker-map-detail.png`: dedicated crop showing the Speaker Map heading, warning, legend, and complete rear panel for the default 2.0 layout, with Left and Right highlighted green. Replaces the repeated overview image in Speaker Setup.

Both captures use the shipped WebUI in the isolated preview. The preview supplies the
firmware-derived output mapping needed to render the map; no physical-unit settings
were changed. Physical factory-default confirmation is deferred until final v2.2 preparation. Release captures
and safe recovery captures were completed in the later rc1 batches below. Third-party Dirac app replacements were completed in the Bass Management batch below.

## Available detail captures

These approved images are retained for later placement; they do not replace the
pending active-state illustrations.

- `ui-macros-expanded.jpg`
- `ui-context-help.jpg`
- `ui-peak-monitor-off.jpg`

## Adopted rc1 release captures

- [x] System Status: `ui-system-status.png`.
- [x] Version history: `ui-version-history.png`.

Approved 1200 px captures use the exact public V2.2.0 Release Candidate 1 WebUI
(9055a744, public release 1cc90056) in an isolated default-setting preview. Release
and hardware metadata were read from the physical unit. The preview represents a
customer unit without a development remote; no physical settings were changed.

## Remaining screenshot work

- [x] Dirac recovery details: Filter Missing, Load now, and Service Down. Approved crops use
  exact shipped rc1 assets and isolated status fixtures at a 1200 px viewport. No physical
  fault was induced and no recovery action was executed.
- [x] Current third-party Dirac Live app workflow images — approved Bass Management walkthrough adopted; see capture notes below.
- [x] Signal-flow diagrams reviewed for Pre/Post PEQ placement; current figure clarified and historical figure warning strengthened.
- [x] Remaining hardware and measurement figures reviewed; retained without replacement.
- [ ] Physical factory-default confirmation — deferred until final v2.2 preparation. Source-derived effective-default verification is complete; no reset has been performed.
- [x] Rendered-page and image-readability review completed at 1200 px; four approved caption/context corrections applied.

The Home status cards are blank because the isolated default preview has no audio stream.
The default Calibration image has empty slots; it does not demonstrate active filtering.

## Approved detail crops

Ten detail illustrations now use the reviewed crops. Source captures were made at
1200 px viewport width; crops preserve their original pixels without rescaling.
Page overviews and native front-panel captures are unchanged.

- [x] `ui-calibration-slot-rename-crop.png`
- [x] `ui-inputs-cec-crop.png`
- [x] `ui-import-default-match-crop.png`
- [x] `ui-loudness-vintage-custom-crop.png`
- [x] `ui-peq-editor-crop.png`
- [x] `ui-sinewave-crop.png`
- [x] `ui-speakers-layout-dialog-crop.png`
- [x] `ui-peq-options-dialog-crop.png`
- [x] `ui-network-static-crop.png`
- [x] `ui-export-preview-crop.png`

All unfinished screenshot items listed above remain pending.

## Adopted effective-defaults correction

- [x] `ui-device-settings.jpg`: approved 1200 px isolated rc1 capture now shows all four trigger outputs On, representing settled power-on with the default Auto-on settings and 0/1/2/3-second delays. Fast Start remains On and Video Passthrough remains Off.
- [x] Device Settings → Power now identifies Fast Start On as the software default, consistent with rc1 initialization and the screenshot.

No physical-unit settings were changed. Physical factory-default confirmation is deferred until final v2.2 preparation. Third-party Dirac app replacements were completed in the Bass Management batch below; no other outstanding item is closed by this update.


## Adopted Dirac Live Bass Management walkthrough

- [x] Device discovery, Measurement Levels, one completed measurement position, Bass Management Filter Design, and export-form details from Dirac Live 3.15.1.
- [x] Current WebUI read-only calibration banner from a 1200 px isolated preview.
- [x] Removed the obsolete Spread explanation and figure from the walkthrough.

The walkthrough uses one HTP-1 subwoofer output and explains external splitting for
multiple physical subwoofers with regular Room Correction / Bass Management.
Account email, installed filters 2–6 and the mouse cursor are excluded. The approved
Measurement Levels illustration uses an illustrative subwoofer reading and microphone
noise-floor reading; it does not document a measured subwoofer level. The irrelevant
ART recommendation was removed from the measurement image.

One measurement position was captured with the user's approval. No filter was exported.
The temporary one-subwoofer layout was restored to the original 5.2.0 layout; the
original settings and filter metadata were verified, apart from regenerated internal
filter IDs for slots 3–6. The project was saved separately.

Physical factory-default confirmation remains deferred until final v2.2
preparation. Aaron's disabled volume-calibration wizard remains outside the manual and
untouched; it requires further work before inclusion.


## Adopted speaker-setup examples

- [x] `ui-example-7-1-4h.jpg`: seven ear-level speakers, one subwoofer and four wall-mounted height speakers.
- [x] `ui-example-7-2-6.jpg`: seven ear-level speakers, two subwoofers and six ceiling speakers.
- [x] `ui-example-9-3-4.jpg`: nine ear-level speakers, three subwoofers and four upper speakers; retains Large front L/R and Dolby Atmos Enabled rear uppers.
- [x] `ui-example-9-1-6.jpg`: nine ear-level speakers, one subwoofer and six ceiling speakers.
- [x] `diagram-example-9-3-4-corrected.png`: approved edit of the original connector drawing, with Subwoofers 2/3 on outputs 11/12 and Wides on outputs 15/16. Printed connector labels are retained.

The four unmodified current-interface captures use isolated example settings and a
1200 × 900 viewport. Detail crops are 934 × 755 pixels; crossover fields show
80 Hz. These are example configurations, not factory-default layouts. No physical
unit settings were changed. Output assignments were compared with executable
controller-source mapping; no new physical-output test was performed. The other
three connector drawings remain unchanged.

The earlier-interface caveat is removed. The 9.3.4 description identifies its mixed
ceiling/upward-firing arrangement, and the 9.1.6 description now matches its six
ceiling speakers. The existing 9.3.4 section anchor is preserved.

Physical factory-default confirmation remains deferred until final v2.2 preparation.
Aaron's disabled volume-calibration wizard and its documentation remain deferred
until the feature is ready for inclusion.
