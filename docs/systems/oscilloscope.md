---
layout: page
tags: Rust, algorithms
date: October 2022
title: oscilloscope
subtitle: livecoding sine waves
cover: /assets/imgs/oscilloscope/img6-cover.png
---

**oscilloscope** is a program that is sines nearly all the way down.

<img class="fullwidth-no-border" src="/assets/imgs/oscilloscope/img6-cover.png">


It started with wanting to draw a jaunty helix.

<img class="fullwidth-no-border" src="/assets/imgs/oscilloscope/img2.png">


It is explorable with livecoding and midi and params can be configured to follow a beat.

<img class="img_series_img" src="/assets/imgs/oscilloscope/img7.png">

And while on the topic of sines, inspired by <a href="https://www.youtube.com/watch?v=r6sGWTCMz2k">this video</a> and oscilloscope art, it can also draw images with the help of Fourier transforms. 

<img class="fullwidth-no-border" src="/assets/imgs/oscilloscope/img1.png">

I traced the seagull and ran a Rust program to take evenly spaced points along the SVG curves. I wrote `numpy` code to learn the coefficients of the real-valued version of [Fourier](https://lpsa.swarthmore.edu/Fourier/Series/DerFS.html). Then I loaded the coefficients back into the oscilloscope system.