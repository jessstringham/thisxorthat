---
layout: page
title: this.xor.that
approaches:
 - framework-livecode.md
 - livecode.md
 - paperwork.md
events:
 - 20240809_murrelet.md
 - 20240803_livecode_versus.md
 - 20240621_livecode_itpcampshow.md
 - 20240610_itp_color_workshop.md
 - 20240505_livecode_harvestworks.md
 - 20240504_color_workshop.md
 - 20240428_caffeine_underground.md
 - 20240403_long_distance.md

cover: /assets/imgs/cream_cheese/img1-cover.png
---

# this.xor.that

I'm **this.xor.that** and I'm a creative coder based in Brooklyn who does a lot of live coding, pen plotting, and generative art. This site collects some documentation about art I've created using code.

I post pretty frequently on [instagram](https://instagram.com/_thisxorthat) and [mastodon](https://tech.lgbt/@this_xor_that).

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
