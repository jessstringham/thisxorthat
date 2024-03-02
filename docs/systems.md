---
layout: page
title: systems and approaches
permalink: /systems/

approaches:
 - framework-livecode.md
 - livecode.md
 - paperwork.md
systems:
 - ceramic.md
 - unitcell.md
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


## approaches

I find myself coming back to these approaches.

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
