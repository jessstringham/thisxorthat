---
layout: page
title: events
permalink: /events/
events:
 - 20240809_murrelet.md
 - 20240803_livecode_versus.md
 - 20240621_livecode_itpcampshow.md
 - 20240610_itp_color_workshop.md
 - 20240505_livecode_harvestworks.md
 - 20240504_color_workshop.md
 - 20240428_caffeine_underground.md
 - 20240403_long_distance.md
 - 20240217_livecode_toplap.md
 - 20240216_farrads_4_jupiter.md
 - 20240212_dailys_plotparty.md
 - 20240101_dailys_genuary.md
 - 20231218_ptpx_2023.md
 - 20231208_electric_abyss.md
 - 20231201_alpaca.md
 - 20231022_noisy_pixels_zine.md
 - 20230902_livecode_dslgjksdlg.md
 - 20230705_dailys_7weeks.md
 - 20230627_livecode_itpcampshowcase.md
 - 20230617_livecode_queercoded.md
 - 20230504_livecode_harvestworks.md
 - 20230331_livecode_itpandfriends.md
 - 20230101_dailys_genuary.md
 - 20220705_dailys_7weeks.md
---

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