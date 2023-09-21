---
layout: page
title: systems
permalink: /systems/
systems:
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
