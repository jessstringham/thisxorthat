---
layout: page
title: Updates
permalink: /updates/
events:
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