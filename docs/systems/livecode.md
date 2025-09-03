---
layout: page
tags: Rust
date: September 2023
title: livecode performances
subtitle: performing visuals live
cover: /assets/imgs/livecode/cover.jpg

events:
 - 20240217_livecode_toplap.md
 - 20231208_electric_abyss.md
 - 20230902_livecode_dslgjksdlg.md
 - 20230627_livecode_itpcampshowcase.md
 - 20230617_livecode_queercoded.md
 - 20230504_livecode_harvestworks.md
 - 20230331_livecode_itpandfriends.md
---

I use the same custom-built software in Rust for live performances that I use for my generative art. The software allows me to configure the parameters of a system based on timing, audio, midi input, hardcoded values, or a combination using mathematical expressions. During performances, I use this interface to improvise with the audio. When making generative art, I use the same interface to explore the parameter space.

Here's me using it on stage at a [livecode.nyc show](/events/20230902_livecode_dslgjksdlg/).

<img class="fullwidth" src="/assets/imgs/livecode/img1.png">

The yaml configuration I'm using is on the left of the screen, which I use to help control the colorful image on the right of the projection. The configuration also sets up what the midi input should control, and I'm using the midi controller to further adjust the parameters.

Here's a music video using time-based variables that I made for a [video room](/events/20230504_livecode_harvestworks/).

<iframe width="100%" height="315" src="https://www.youtube.com/embed/2Mjp14VCK2o?si=k0kcLRwxAH-fxUj4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

I combine this code with the other things I've built on top of nannou and wgpu, like [planar l-systems](../ash/) or [unitcells](../unitcell/), to make very configurable generative art or livecode project.


## Some Livecode Performances

<div id="events">
{% for event in page.events %}
  {% for page in site.pages %}
    {% if page.name == event %}
<div class="event">
<div class="event-title">
<a href="{{ page.url }}">
<div class="title">{{ page.title }}
<span class="subtitle">{{ page.date }}{%- if page.location != "" %} – {{ page.location }}{%- endif -%}</span>
</div>
<img src="{{ page.cover }}">
</a>
</div>
</div>
    {% endif %}
  {% endfor %}
{% endfor %}
</div>