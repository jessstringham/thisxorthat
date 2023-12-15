---
layout: home
title: this.xor.that
events:
 - 20231208_electric_abyss.md
 - 20231201_alpaca.md
 - 20231022_noisy_pixels_zine.md
 - 20230902_livecode_dslgjksdlg.md
 - 20230705_dailys_7weeks.md
 - 20230627_livecode_itpcampshowcase.md
 - 20230617_livecode_queercoded.md
 - 20230504_livecode_harvestworks.md
 - 20230331_livecode_itpandfriends.md
 - 20230101_dailys_genuary.md
 - 20220705_dailys_7weeks.md
systems:
#  - ceramic.md
 - unitcell.md
 - livecode.md
 - kernels.md
 - ash.md
 - dither.md
 - cream-cheese.md
 - oscilloscope.md
 - riso.md
 - substations.md
 - leave.md
 - flow.md
cover: /assets/imgs/cream_cheese/img1-cover.png
---

# this.xor.that

I'm **this.xor.that** and I'm a creative coder based in Brooklyn. This site shares the art I've created using code.

<small>I'm also Jessica Stringham and a machine learning engineer, but that's mostly over <a href="https://jessicastringham.net">here</a></small>.

I'm interested in using live elements and odd interfaces (midi controllers, livecoding, heart rate monitors), harvesting programming bugs to inspire other art, and using human-sized data with machine learning techniques.

My current projects are created using software I write in Rust using [nannou](https://nannou.cc) and [wgpu](https://wgpu.rs).


## things

events and projects

<div id="events">
{% for event in page.events %}
  {% for page in site.pages %}
    {% if page.name == event %}
<div class="event">
<div class="event-title">
<a href="{{ page.url }}">
<img src="{{ page.cover }}">
<div class="title">{{ page.title }}
<span class="subtitle">{{ page.date }}{%- if page.location != "" %} – {{ page.location }}{%- endif -%}</span>
</div>
</a>
</div>
</div>
    {% endif %}
  {% endfor %}
{% endfor %}
</div>

## systems

This section roughly organizes some work by the systems used to create them.

The systems are always evolving, splitting, and blending into one another. 
But I wanted to start collecting information about some of the ones I keep coming back to!

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

