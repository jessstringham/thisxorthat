---
layout: minimal
title: Jessica Stringham's portfolio 202
permalink: /portfolio-2025/
entries:
  - bat.md
  - bookshelf.md
  - livecode-framework-2025.md
  - zine-noisy-pixels.md
  - tiny-language-models-2025.md
  - livecode-performances-2025.md
---

<h1>Jessica Stringham's portfolio 2025</h1>

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