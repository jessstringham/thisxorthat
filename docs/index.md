---
layout: home
title: this.xor.that

videos:
  - kaleido.mp4
  - leaf.mp4
  - pattern.mp4
  - kaleido2.mp4

approaches:
 - framework-livecode.md
 - livecode.md
 - paperwork.md
# events:
#  - 20240809_murrelet.md
#  - 20240610_itp_color_workshop.md
#  - 20240505_livecode_harvestworks.md
#  - 20240403_long_distance.md
---


I'm **this.xor.that**, a computational artist and educator.

Most recently, I was a graduate researcher in the [Future Sketches](https://www.media.mit.edu/groups/future-sketches/overview/) group at the [MIT Media Lab](https://www.media.mit.edu/).

Much of the work here is created using a custom Rust package called [Murrelet](https://github.com/jessstringham/murrelet). You can also find me on [instagram](https://instagram.com/_thisxorthat) and [mastodon](https://social.toplap.org/@this_xor_that).


<small>I'm also Jessica Stringham and a machine learning engineer, but that's mostly over <a href="https://jessicastringham.net">here</a></small>.


## recent activity

{% assign events = site.pages
  | where_exp: "p", "p.path contains 'events/'"
  | where_exp: "p", "p.date"
  | sort: "path"
  | reverse
%}

{% for event in events limit: 6 %}
<div class="activity-title">
<a href="{{ event.url }}">
<div class="title">{{ event.title }}
<span class="subtitle">{{ event.date | date: "%Y-%m-%d" }}{% if event.kind != "" %} – {{ event.kind }}{% endif %}{% if event.location != "" %} – {{ event.location }}{% endif %}</span>
</div>
{% if event.cover != "" %}<img src="{{ event.cover }}">{% endif %}
</a>
</div>
{% endfor %}