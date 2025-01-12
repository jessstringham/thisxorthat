---
layout: portfolio2025
title: Murrelet Livecode Framework
subtitle: bespoke software for audio-reactive livecoded visuals, vector-based pen plotting, and more
topics: software, livecode
date: ongoing
cover: /assets/imgs/portfolio/livecode-cover.gif
systems:
 - kernels.md
 - unitcell.md
 - ash.md
 - dither.md
 - cream-cheese.md
 - oscilloscope.md
 - substations.md
---


I've built a framework that supports the majority of my creative coding endeavors.
Along with creating graphics, it extends into both shader-based audio-reactive live coded visuals and vector-based pen plotting or vinyl cutting.
As I use it for a range of projects, it has organically grown into a unique and powerful system.
The forced interconnections between different functions help me creatively draw connections between disparate topics.

<img class="fullwidth" src="/assets/imgs/portfolio/livecode-cover.gif">


Some examples of places I've used this framework are "kernels" which tied creative coding back to the machine learning technique of convolutional neural networks, "unitcells" which drew inspiration from crystallography to create a system for repeating patterns, and "dither" which created new dithering patterns to efficiently create aesthetics.

<img class="floatmedimage-no-border" src="/assets/imgs/unitcell/img1.gif">


The basics of the framework are as follows: I create a structure in Rust to parameterize _something_ (the dimensions and position of a square, an l-system grammar, the uniforms being passed to a shader), and write code to produce the image or SVG or shader. The paradigm of the framework surfaces parameters are surfaced in a YAML file. These can be explored on the fly using expressions, time-based patterns, audio levels, or MIDI controller input. There are advanced features, like being able to create repeating patterns of graphical elements using expressions or being able to interpolate between values based on animation foundations.

In addition, it is open source, with the source code is available [here](https://github.com/jessstringham/murrelet).

Publications:
 - [Algorithmic Pattern Salon 2023](https://alpaca.pubpub.org/pub/dpdnf8lw/release/1?readingCollection=1def0192) and [talk](https://www.youtube.com/watch?v=kk-nElNKkJI&list=PLxqmZjMvoVzzhyTQab_DCEqDIthsAiDzF&index=6&t=6579s)
 - ICLC 2025 (Accepted)

The following links to write-ups on my regular art website; press the back button to return to the portfolio.

{% for system in page.systems %}
  {% for page in site.pages %}
    {% if page.name == system %}
<div class="cover-title">
<a href="{{ page.url }}">
<div class="title">{{ page.title }}
<span class="subtitle">{{ page.subtitle }}</span>
</div>
<img src="{{ page.cover }}">
</a>
</div>
    {% endif %}
  {% endfor %}
{% endfor %}
