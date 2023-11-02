---
layout: portfolio
title: Oscilloscope
subtitle: music video using a live code framework
topics: exhibition
date: May 2023
cover: /assets/imgs/portfolio/oscilloscope.gif
---

I created a music video using a system in my live coding framework which is entirely built around oscillations. The 3-minute video shows code being modified which then overlays translucent shapes positioned according to bouncing helixes set to a short song I created.

<img class="fullwidth" src="/assets/imgs/20230504_livecode_harvestworks/cover.png">



As a quick tangent, the system "[Oscilloscope](/systems/oscilloscope)" was one of my early systems. I originally had the idea when I wanted to create the below image. It is created using many translucent dots spaced randomly along a line wrapped in a double helix. I wanted to show how overlaying translucent pixels just right could build up volume, and then how modulating the oscillations could give it an attitude.

<img class="fullwidth-no-border" src="/assets/imgs/oscilloscope/img2.png">



After creating a system that could create the above image, I continued to explore what the system was capable of when tied to the live code framework (described [here](/portfolio/2--livecode-framework)).


For this piece, I primarily used time-based controls to oscillate the parameters. Since the sound was precisely created too (I created a short piece using Tidal Cycles), I only needed to use the time-based beat functionality. For the visuals, I used simpler helixes and rotated them through space, allowing them to build up visually by overlaying.

As a fun technical challenge, my computer at the time wasn't powerful enough to render a non-choppy video while screen recording, so I had to devise a method to record the video. This functioned by recording each configuration changes with a timestamp. After I was done recording, I could play the configuration back and render the frames.

This was displayed in the video room at Regen Circuit, a month-long residency of [livecode.nyc](https://livecode.nyc) at [Harvestworks](https://www.harvestworks.org/may-5-audiovisual-performances-by-katarina-hoeger-thisxorthat-and-mylar-caitlin-cawley-and-melody-loveless/) on Governors Island.

The full video is available below:

<iframe width="100%" height="315" src="https://www.youtube.com/embed/2Mjp14VCK2o?si=k0kcLRwxAH-fxUj4?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>