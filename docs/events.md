---
layout: page
title: events
permalink: /events/
---

<div id="little-events">
{% assign events = site.pages
  | where_exp: "p", "p.path contains 'events/'"
  | where_exp: "p", "p.date"
  | sort: "path"
  | reverse
%}

{% for event in events %}
  <div class="little-event">
    <div class="little-event-title">
      <a href="{{ event.url }}">
        <div class="title">{{ event.date | date: "%Y-%m-%d" }} | {{ event.title }}
{% if event.kind %}
          <span class="little-event-kind">({{ event.kind }})</span>
{% endif %}
          <span class="little-event-subtitle">{%- if event.location != "" %} – {{ event.location }}{%- endif -%}</span>
        </div>
      </a>
    </div>
  </div>
{% endfor %}
</div>
