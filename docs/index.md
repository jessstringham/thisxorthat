---
layout: home
title: this.xor.that
systems:
 - cream-cheese.md
 - riso.md
 - substations.md
 - leave.md
 - flow.md
---

I'm **this.xor.that** and I'm a creative coder based in Brooklyn.

I'm interested in using live elements and odd interfaces (midi controllers, livecoding, heart rate monitors), harvesting programming bugs to create new projects, and using human-sized machine learning.

My current projects are created using software I write in Rust using [nannou](https://nannou.cc) and [wgpu](https://wgpu.rs).

## Systems

This section roughly organizes some work by the systems used to create them.

The systems are always evolving, splitting, and blending into one another. 
But I wanted to start collecting information about some of the ones I keep coming back to!

{% for system in page.systems %}
  {% for page in site.pages %}
    {% if page.name == system %}
<div class="cover-title">
<a href="{{ page.url }}">
<img class="fullwidth" src="{{ page.cover }}">
<p>{{ page.title }}
<span class="subtitle">{{ page.subtitle }}</span>
</p>
</a>
</div>
    {% endif %}
  {% endfor %}
{% endfor %}

