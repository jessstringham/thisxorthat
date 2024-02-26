---
layout: page
title: systems
permalink: /systems/
systems:
 - ceramic.md
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
---

This pages roughly organizes some work by the systems used to create them.

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
