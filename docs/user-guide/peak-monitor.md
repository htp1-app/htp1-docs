# Peak Monitor

Peak Monitor shows how close each channel is getting to clipping, so you can set headroom and
output levels by measurement instead of by ear.

![Peak Monitor page in Table view](images/ui-peak-monitor.png)

## Turning It On

Click **Peak Monitoring** to turn it on. The meters start updating live as audio plays. Click it
again to turn monitoring off.

**Clear Peaks** resets the peak-hold markers so you can start a fresh measurement — useful when you
want to check a specific scene or passage without earlier, louder peaks skewing the reading.

## Table and Bars Views

Switch between **Table** and **Bars** with the buttons above the meters.

Table view lists each active channel with its peak signal level in dBFS. A channel is shown in red
once it reaches clipping.

![Peak Monitor page in Bars view](images/ui-peak-monitor-bars.png)

Bars view shows the same channels as vertical meters, with a scale down the left side from +6 to
below −84 dBFS. Each bar has a peak-hold marker showing the highest level reached since you last
cleared peaks. The marker is green while there's headroom to spare, amber as the channel approaches
0 dBFS, and red at or above clipping.

If you have a seat shaker channel active, it appears alongside the speaker channels, set apart by a
divider and its own icon.

## If a Channel Clips

Clipping means the digital signal ran out of headroom and was cut off — you'll hear it as distortion
on loud passages. If Peak Monitor shows a channel clipping or consistently sitting in the amber zone:

- Lower **Max. Output Level**, or
- Raise **Max. Digital Headroom**

Both controls are on [Volume Setup](volume-setup.md). Play your loudest material while watching the
meters, and adjust until peaks land close to 0 dBFS without crossing it.
