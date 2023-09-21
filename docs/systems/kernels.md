---
layout: page
tags: Rust
date: September 2023
title: kernels
subtitle: convolving with parameters
cover: /assets/imgs/kernels/cover.png
---

In a neural network's convolutional layer, a **kernel** is a matrix used to set the color of a pixel. You multiply the pixel and its neighbors by the matrix and sum. I liked [this explanation](https://setosa.io/ev/image-kernels/).

In machine learning, you use data to learn the parameters of the kernel. But if you just set those values, even a super simple small kernel can be used to blur images, sharpen images, or detect edges. 

<img class="fullwidth" src="/assets/imgs/kernels/img2.png">


I have a shader component set up that can apply an arbitrary kernel. Because I'm using it in my [livecode](/systems/livecode) system, I can even control the 3x3 numbers with audio/midi/time, though I usually hardcode them.

<img class="fullwidth" src="/assets/imgs/kernels/img3.gif">

For example, combining something that sharpens and blurs, and passing it through feedback (maybe with an additional transform like scaling or offset or mask) gives you something that looks a little like [reaction-diffusion](https://jasonwebb.github.io/reaction-diffusion-playground/).


<img class="fullwidth" src="/assets/imgs/kernels/cover.png">

The cover is from the system created for [a livecode show](/events/20230617_livecode_queercoded). 