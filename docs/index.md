---
layout: page
title: this.xor.that
approaches:
 - framework-livecode.md
 - livecode.md
 - paperwork.md
events:
 - 20240217_livecode_toplap.md
 - 20240215_farrads_4_jupiter.md
 - 20240212_dailys_plotparty.md
 - 20240101_dailys_genuary.md
 - 20231218_ptpx_2023.md
 - 20231208_electric_abyss.md

cover: /assets/imgs/cream_cheese/img1-cover.png
---

# this.xor.that

I'm **this.xor.that** and I'm a creative coder based in Brooklyn who does a lot of live coding, pen plotting, and generative art. This site collects some documentation about art I've created using code.

<small>I'm also Jessica Stringham and a machine learning engineer, but that's mostly over <a href="https://jessicastringham.net">here</a></small>.

I'm interested in using live elements and interfaces beyond keyboards and screens (midi controllers, pen plotters), harvesting programming bugs to inspire other art, and using human-sized data with machine learning techniques.

My current projects are created using software I write in Rust using [nannou](https://nannou.cc) and [wgpu](https://wgpu.rs).

## recent updates

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

[See all events](/events/)


## approaches

{% for system in page.approaches %}
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


You can also find some notes about the systems I use to create work under [systems](/systems/).
