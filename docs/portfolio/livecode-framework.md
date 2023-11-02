---
layout: portfolio
title: this.xor.that Livecode Framework
subtitle: bespoke software for shader-based audio-reactive livecoded visuals, vector-based pen plotting, and more-or-less anything else
topics: software, livecode
date: ongoing
cover: /assets/imgs/portfolio/livecode-cover.gif
---


I've built a framework that supports the majority of my creative coding endeavors. Along with creating graphics, it extends into both shader-based audio-reactive live coded visuals and vector-based pen plotting or vinyl cutting.
As I use it for a range of projects, it has organically grown into a unique and powerful system. 
The forced interconnections between different functions help me creatively draw connections between disparate topics.

<img class="fullwidth" src="/assets/imgs/livecode/cover.png">


Some examples of places I've used this framework are "kernels" which tied creative coding back to the machine learning technique of convolutional neural networks, "unitcells" which drew inspiration from crystallography to create a system for repeating patterns, and "dither" which created new dithering patterns to efficiently create aesthetics.
The following links to write-ups on my regular art website; press the back button to return to the portfolio. 


<div class="img_series">
<a href="/systems/kernels/"><center>kernels</center><img class="img_series_img" src="/assets/imgs/kernels/tiny_img2.png"></a>

<a href="/systems/unitcell/"><center>unitcells</center><img class="img_series_img" src="/assets/imgs/unitcell/tiny_img2.png"></a>

<a href="/systems/dither/"><center>dither</center><img class="img_series_img" src="/assets/imgs/dither/tiny_img2-crop.png"></a>

</div>


The basics of the framework are as follows: I create a structure in Rust to parameterize _something_ (the dimensions and position of a square, an l-system grammar, the uniforms being passed to a shader), and write code to produce the image or SVG or shader. The paradigm of the framework surfaces parameters are surfaced in a YAML file. These can be explored on the fly using expressions, time-based patterns, audio levels, or MIDI controller input. There are advanced features, like being able to create repeating patterns of graphical elements using expressions or being able to interpolate between values based on animation foundations.


Additional Works:
 - Accepted at Algorithmic Pattern Salon 2023
