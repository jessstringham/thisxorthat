---
layout: home
title: this.xor.that
systems:
 - cream-cheese.md
 - riso.md
 - substations.md
 - leave.md
 - flow.md
cover: /assets/imgs/cream_cheese/img1-cover.png
---
# this.xor.that

I'm **this.xor.that** and I'm a creative technologist based in Brooklyn. This shares art I've created by writing code.

I'm interested in using live elements and odd interfaces (midi controllers, livecoding, heart rate monitors), harvesting programming bugs to inspire other art, and using human-sized data with machine learning techniques.

My current projects are created using software I write in Rust using [nannou](https://nannou.cc) and [wgpu](https://wgpu.rs).

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

