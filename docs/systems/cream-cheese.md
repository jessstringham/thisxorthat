---
layout: page
tags: Rust, small-data ML
date: December 2022
title: cream cheese
subtitle: using statistical learning to generate textures
cover: /assets/imgs/cream_cheese/img1-cover.png
---

**cream cheese** explores the effects of applying machine learning and other statistical learning techniques to extremely small amounts of data. The system learns patterns from one image and then tries to recreate a second image while restricted to using the patterns it learned from the first image.

<img class="fullwidth" src="/assets/imgs/cream_cheese/img1.png">
 
I can use midi controllers to adjust parameters, which causes some of the pixels to cascade and shift. I can use color to capture these changes.

<div class="img_series">
<a href="/assets/imgs/cream_cheese/img2.png"><img class="img_series_img" src="/assets/imgs/cream_cheese/tiny_img2.png"></a>
<a href="/assets/imgs/cream_cheese/img3.png"><img class="img_series_img" src="/assets/imgs/cream_cheese/tiny_img3.png"></a>
<a href="/assets/imgs/cream_cheese/img4.png"><img class="img_series_img" src="/assets/imgs/cream_cheese/tiny_img4.png"></a>
</div>

The original texture was from a picture of the eponymous cream cheese, though I usually create custom training images.

<img class="fullwidth" src="/assets/imgs/cream_cheese/img5.png">


## More technical details

I use numpy to extract the probabilities. I get to reuse a trick I learned implementing [convolutional neural networks](https://jessicastringham.net/2017/12/31/stride-tricks/).

The system takes inspiration from <a href="https://en.wikipedia.org/wiki/Elementary_cellular_automaton">cellular automata</a>, but I do use randomness (while cellular automata can create seemingly organic random patterns using strict rules) and for me it starts to feel closer to a Markov model.
