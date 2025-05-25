---
layout: page
title: this.xor.that
approaches:
 - framework-livecode.md
 - livecode.md
 - paperwork.md
events:
 - 20240809_murrelet.md
 - 20240610_itp_color_workshop.md
 - 20240505_livecode_harvestworks.md
 - 20240403_long_distance.md

cover: /assets/imgs/cream_cheese/img1-cover.png
---


I'm **this.xor.that**, a creative coder who does a lot of live coding, pen plotting, and generative art.  This site collects some documentation about things I've created using code.

I post pretty frequently on [instagram](https://instagram.com/_thisxorthat) and [mastodon](https://social.toplap.org/@this_xor_that).

I'm currently a graduate researcher in the [Future Sketches](https://www.media.mit.edu/groups/future-sketches/overview/) group at the [MIT Media Lab](https://www.media.mit.edu/). Much of the stuff here was created using a custom Rust package called [Murrelet](https://github.com/jessstringham/murrelet).


<small>I'm also Jessica Stringham and a machine learning engineer, but that's mostly over <a href="https://jessicastringham.net">here</a></small>.


## selected updates

<div id="events">
{% for event in page.events %}
  {% for page in site.pages %}
    {% if page.name == event %}
<div class="event">
<div class="event-title">
<a href="{{ page.url }}">
<div class="title">{{ page.title }}
<span class="subtitle">{{ page.date }}{%- if page.location != "" %} – {{ page.location }}{%- endif -%}</span>
</div>
<img src="{{ page.cover }}">
</a>
</div>
</div>
    {% endif %}
  {% endfor %}
{% endfor %}
</div>

[See all events](/events/)


## approaches

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


You can also find some notes about the systems I use to create work under [systems](/systems/).
