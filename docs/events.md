---
layout: page
title: events
permalink: /events/
events:
  - 20260125_livecode_shenzhen.md
  - 20251029_viscera4.md
  - 20250920_rhythms_and_renewal.md
  - 20250803_fels.md
  - 20250731_born_of_the_egg_album_art.md
  - 20250621_livecodenyc.md
  - 20250606_show_and_tell_berlin_meetup.md
  - 20250529_paper_live_coding_structured_data.md
  - 20250527_livecode_resonant_dialogues.md
  - 20250524_livecode_errorcamp.md
  - 20250521_open_projector_algorhythms_london.md
  - 20250510_porchfest_somerville.md
  - 20250506_mit_media_lab_research_talk.md
  - 20250427_mit_art_showcase.md
  - 20250418_livecode_mit_museum.md
  - 20250329_livecode_spring_resonances.md
  - 20250322_livecode_hudson_valley_books.md
  - 20250201_future_type.md
  - 20250131_fol_color_workshop.md
  - 20250101_dailys_genuary.md
  - 20241217_how_to_make_almost_anything_open_house.md
  - 20241210_hybrid_livecoding_interfaces.md
  - 20241101_livecode_boston_art_review_halloween.md
  - 20241017_invited_berklee_livecode.md
  - 20241003_dissolve_music_festival.md
  - 20240915_hackathon_boston_tech_poetics.md
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

<div id="little-events">
{% for event in page.events %}
  {% for page in site.pages %}
    {% if page.name == event %}
<div class="little-event">
<div class="little-event-title">
<a href="{{ page.url }}">
<div class="title">{{ page.date }} | {{ page.title }}
{% if page.kind %}
  <span class="little-event-kind">({{ page.kind }})</span>
{% endif %}
<span class="little-event-subtitle">{%- if page.location != "" %} – {{ page.location }}{%- endif -%}</span>
</div>
</a>
</div>
</div>
    {% endif %}
  {% endfor %}
{% endfor %}
</div>
