---
layout: minimal
title: Jessica Stringham's portfolio 2023
permalink: /portfolio-2023/
entries:
  - zine-noisy-pixels.md
  - livecode-framework.md
  - tiny-language-models.md
  - harvestworks.md
  - chernoff.md
  - livecode-performances.md
  - anthology.md
  - ml-blog.md
---

<h1>Jessica Stringham's portfolio 2023</h1>

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
<small>I'm also on <a href="http://instagram.com/_thisxorthat">instagram</a> and <a href="https://tech.lgbt/@this_xor_that">mastodon</a>.</small>