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


## Approved final-v2.2 screenshot review — first batch

- [x] Desktop Dirac Live requirement and download links updated in Welcome and the
  Dirac Live walkthrough. The microphone recommendation link now points to Dirac's
  microphone guidance.
- [x] PEQ placement labels updated to **Pre (default)** and **Post (advanced)**;
  the existing placement explanations are preserved.
- [x] The 17 reviewed WebUI screenshots below replaced, with Help showing every
  section collapsed as approved.

- [x] `ui-speakers-21.png`
- [x] `ui-calibration.jpg`
- [x] `ui-calibration-slot-rename-crop.png`
- [x] `ui-calibration-advanced.jpg`
- [x] `ui-balance.jpg`
- [x] `ui-dirac-active-calibrated.jpg`
- [x] `ui-loudness.jpg`
- [x] `ui-loudness-vintage-custom-crop.png`
- [x] `ui-peq.jpg`
- [x] `ui-peq-editor-crop.png`
- [x] `ui-peq-options-dialog-crop.png`
- [x] `ui-help.jpg`
- [x] `ui-speakers.jpg`
- [x] `ui-speakers-layout-dialog-crop.png`
- [x] `ui-speaker-map-detail.png`
- [x] `ui-volume-setup.jpg`
- [x] `ui-volume-advanced.jpg`

Captures use a 1200 × 900 CSS-pixel viewport and the unmodified assembled candidate
`a1f6a051bed64edcb6c57c471819c99b7d27d725` (WebUI
`b6d90a141637cd301bcc17e0b4137330b95fd5e1`). Full-page images can be taller; detail
crops preserve their original pixels. Defaults and the previously approved PEQ,
2.1 and calibrated-state examples are supplied by the isolated preview. No
physical-unit settings were changed. These captures do not establish physical
factory defaults or a final public release.

The refreshed Loudness images report a valid 48 kHz output sample rate. The older
images displayed the chart's fallback message because no supported output sample
rate was supplied. The fallback message remains in the WebUI; no UI behavior was
changed by this documentation update.

### Remaining final-candidate screenshot checks

Earlier rc1 approvals above remain the capture history. The following checks are
updated by the consolidated review below. Only the final public release captures
remain pending.

- [ ] Final public System Status and Version history captures:
  `ui-version-history.png`, `ui-system-status.png`.
- [x] Dirac Live desktop-app privacy and full-resolution readability recheck:
  `p50-1.jpg`, `p51-2.jpg`, `p52-1.jpg`, `p53-1.jpg`, `p54-1.jpg`.
- [x] Remaining matching-state detail, example, Home, Personalize, Remote and native front-panel comparisons:
  `fp-help.png`, `ui-home.jpg`, `ui-export-preview-crop.png`, `ui-import-differences-detail.png`, `ui-import-default-match-crop.png`, `p51-1.jpg`, `ui-inputs-cec-crop.png`, `remote.jpg`, `ui-network-static-crop.png`, `fp-peak-monitor.png`, `fp-level-meter.png`, `ui-peq-options-button.jpg`, `ui-personalize.jpg`, `fp-main.png`, `ui-sinewave-crop.png`, `ui-example-7-1-4h.jpg`, `ui-example-7-2-6.jpg`, `ui-example-9-3-4.jpg`, `ui-example-9-1-6.jpg`, `ui-hdmi-status.png`.

### Approved final-v2.2 screenshot review — second batch

- [x] Peak Monitor Table and Bars views refreshed with real playback data.
- [x] Dirac Live Filter Missing, Load now and Service Down detail crops refreshed.
- [x] BEQ Author-filter and applied-versus-browsed views refreshed with artwork loaded.
- [x] Loudness references now use the button label **Reset Vintage Custom**.
- [x] Dirac Live step 12 points to the available Calibration slots without claiming
  that their count appears in the page heading. The rest of the step is preserved.

- [x] `ui-peak-monitor.jpg`
- [x] `ui-peak-monitor-bars.jpg`
- [x] `ui-dirac-filter-missing-crop.png`
- [x] `ui-dirac-load-now-crop.png`
- [x] `ui-dirac-service-down-crop.png`
- [x] `ui-bass-eq-author.jpg`
- [x] `ui-bass-eq-applied-browsed.jpg`

The same assembled candidate and 1200 × 900 viewport as the first batch were
used. Full-page images can be taller; recovery detail crops preserve their
original pixels. Peak Monitor used the physical unit's 5.2.0 layout with Seat
Shaker and real signal data. Bars view was restored, Peak hold was retained,
and Clear Peaks was not pressed. The before/after comparison found no change
to the checked unit settings or calibration slots.

Recovery states were supplied by the isolated preview; no physical fault was
induced and no recovery action was executed. BEQ used the live catalogue with
loaded artwork, and application was confined to the isolated preview.

This second batch closed seven checks. The remaining 27 image checks were carried
forward to the consolidated review below. Both agreed deferrals remain unchanged.

### Approved final-v2.2 screenshot review — consolidated

All 27 remaining images have been reviewed together: 22 are retained, the three
approved replacements below are adopted, and the two final public release
captures remain pending.

- [x] The five Dirac Live desktop-app images were inspected at full resolution:
  account email, filters 2–6 and the mouse pointer are absent; the relevant
  labels, readings and crops remain clear. The approved illustrative level
  readings are retained.
- [x] The other 17 matching-state images are retained, including the four
  speaker examples and their matching diagrams. Current WebUI comparisons used
  the same example states; minor spacing differences do not require replacements.
  The native front-panel images were inspected and compared with the current
  rendering code, rather than retaken on the physical unit.
- [x] `ui-personalize.jpg`: current full-page overview includes the explanation
  that hidden tips are saved on the HTP-1 and shared by all browsers.
- [x] `p51-1.jpg`: calibration-connected banner and status cards now show
  **No Upmix** instead of the older **Direct** label; retains the 1200 × 330 crop.
- [x] `ui-hdmi-status.png`: current HDMI Status dialog, cropped to 800 × 844
  from a 1200 px desktop viewport. The obsolete page behind the dialog is excluded.

The replacement captures use the unmodified assembled candidate
`a1f6a051bed64edcb6c57c471819c99b7d27d725` (WebUI
`b6d90a141637cd301bcc17e0b4137330b95fd5e1`) at a 1200 × 900 viewport.
Personalize uses the isolated default-state preview; the banner illustrates a
calibration-connected state. HDMI Status uses read-only diagnostic text from the
physical unit, displayed in the isolated current dialog. No unit settings or
playback were changed, and no import or calibration was performed.

This review does not establish physical factory defaults. System Status and
Version history still show rc1 and await the final public release captures;
both agreed deferrals below remain unchanged.

### Agreed deferred items

- [ ] Physical factory-default confirmation — deferred until final v2.2
  preparation; no reset or physical settings change is authorized by this batch.
- [ ] Aaron's disabled volume-calibration wizard and its documentation — deferred
  until the feature is ready for inclusion. The wizard remains untouched.
