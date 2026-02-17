---
layout: page
title: Updates
permalink: /updates/
---
<div id="little-events">
  {% assign posts = site.pages
    | where_exp: "p", "p.path contains 'blog/'"
    | where_exp: "p", "p.layout == 'blog'"
    | sort: "path"
    | reverse
  %}

  {% for p in posts %}
    {% if p.date %}
      <div class="little-event">
        <div class="little-event-title">
          <a href="{{ p.url }}">
            <div class="title">
              {{ p.date | date: "%Y-%m-%d" }} | {{ p.title }}
            </div>
          </a>
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div>
