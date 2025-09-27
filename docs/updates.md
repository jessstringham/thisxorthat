---
layout: page
title: Updates
permalink: /updates/
events:
  - 20250921_blog.md
  - 20250914_blog.md
  - 20250907_blog.md
  - 20250831_blog.md
  - 20250824_blog.md
  - 20250817_blog.md
  - 20250810_blog.md
  - 20250803_blog.md
  - 20250727_blog.md
  - 20250720_blog.md
  - 20250713_blog.md
  - 20250706_blog.md
  - 20250629_blog.md
  - 20250622_blog.md
  - 20250615_blog.md
---

<div id="little-events">
{% for event in page.events %}
  {% for page in site.pages %}
    {% if page.name == event %}
<div class="little-event">
<div class="little-event-title">
<a href="{{ page.url }}">
<div class="title">{{ page.date }} | {{ page.title }}
</div>
</a>
</div>
</div>
    {% endif %}
  {% endfor %}
{% endfor %}
</div>
