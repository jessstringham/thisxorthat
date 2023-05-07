---
layout: page
tags: Rust
date: March 2023
title: dither
subtitle: exploration in dithering
cover: /assets/imgs/dither/img2-cover.png
---

**dither** explores funny textures for ordered dithering.

<img class="fullwidth" src="/assets/imgs/dither/img1.png">

I wanted to make [riso](riso.md)'s noise more satisfying,
and so instead of using noise, I started poking at [ordered dithering](https://en.wikipedia.org/wiki/Ordered_dithering), which is a way to display a grayscale image using only black and white. One approach is to create a little repeating grayscale tile that says at what level to turn that pixel on.

A common ordered dithering approach creates little cross-hatch patterns, but you can also use custom filters to create things like a halftone pattern or blue noise. I created a few patterns using numpy, stacked them into one image, and then spent far too long trying to write a shader to crop and repeat the pattern without seams.

Now I can apply it on top of drawings or [sdfs](https://iquilezles.org/articles/distfunctions/). Here's a still from a recent set that uses
dithering along with sdfs and a cell division algorithm.

<img class="fullwidth" src="/assets/imgs/dither/img5.png">

I also like how complicated it looks when animated with smooth gradients. Here's radial noise going through ordered dithering using a pattern of blue noise and a herringbone pattern from my shower.

<img class="fullwidth" src="/assets/imgs/dither/img4.gif">

You can use more than two colors if you adjust the thresholds for each color. Here's a close-up of a halftone pattern made with Gaussians using 3 levels.

<img class="fullwidth" src="/assets/imgs/dither/img3.png">

Some additional links I found useful:

* This [video](https://www.youtube.com/watch?v=IviNO7iICTM) explains ordered dithering.
* This post helped me create a [blue noise filter](https://www.wedesoft.de/software/2022/09/21/blue-noise-dithering/).
* This [forum post](https://forums.tigsource.com/index.php?topic=40832.msg1363742#msg1363742) by Lucas Pope shares the challenge of applying dithering to a 3D game. Thankfully I'm in the 2D world so didn't need to worry about this.