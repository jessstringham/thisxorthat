---
layout: page
tags: Rust, algorithms
date: October 2022
title: substations
subtitle: funny physics and recursive grids
cover: /assets/imgs/substations/banner.png
---

**substations** started as wanting to replicate one of my doodle patterns.

<div class="img_series">
<img class="fullwidth" src="/assets/imgs/substations/banner2.png">
</div>

The system starts with a grid and then uses random noise to nudge the intersections. I use physics based on force-directed graphs to keep the quadrilaterals from becoming too narrow or collapsing.

<div class="img_series">
<img class="fullwidth" src="/assets/imgs/substations/banner.png">
</div>

Meanwhile, it recursively splits the quadrilaterals according to a probability distribution. Different distributions create different patterns.

<div class="img_series">
<a href="/assets/imgs/substations/world1.png"><img class="img_series_img" src="/assets/imgs/substations/tiny_world1.png"></a>
<a href="/assets/imgs/substations/world2.png"><img class="img_series_img" src="/assets/imgs/substations/tiny_world2.png"></a>
<a href="/assets/imgs/substations/world3.png"><img class="img_series_img" src="/assets/imgs/substations/tiny_world3.png"></a>
</div>

The system can also be used to paint:

<div class="img_series">
<img class="fullwidth" src="/assets/imgs/substations/painting.png">
</div>


