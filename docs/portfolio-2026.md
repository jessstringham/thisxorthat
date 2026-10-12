---
layout: minimal
title: Jessica Stringham's portfolio 2026
permalink: /portfolio-2026/
entries:
  - livecode-2026.md
  - calc.md
  - midi-crows.md
  - birdwatching.md
  - zine-noisy-pixels.md
---

<h1>Jessica Stringham's portfolio 2026</h1>

<div id="portfolio">
{% for entry in page.entries %}
  {% for page in site.pages %}
    {% if page.name == entry %}
<div class="cover-title portfolio">
<a href="{{ page.url }}">
<div class="portfolio-title">{{ page.title }}
<span class="portfolio-subtitle">{{ page.subtitle }}</span>
</div>
<img src="{{ page.cover }}">
</a>
</div>
    {% endif %}
  {% endfor %}
{% endfor %}
</div>

<br />

<small>This page is a somewhat more organized summary of my work. For a broader collection of documentation, see <a href="https://thisxorthat.art">my art website</a>.</small>
<small>I'm also on <a href="http://instagram.com/_thisxorthat">instagram</a>.