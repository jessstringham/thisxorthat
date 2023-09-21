---
layout: page
tags: Rust
date: May 2023
title: ash
subtitle: plant cells
cover: /assets/imgs/ash/cover.png
---

<img class="fullwidth" src="/assets/imgs/ash/img3.png">


[The Algorithmic Beauty of Plants](http://algorithmicbotany.org/papers/#abop) has a chapter on modeling cellular layers. I roughly follow the grammar in [the chapter](http://algorithmicbotany.org/papers/abop/abop-ch7.pdf). For example, the code below assigns each edge of a heptagon initial rule. An `A` edge produces `+A`'s, which can join with other (non-collinear) `+A`'s to split a cell.

```yaml
lsystem: 
  start: [A, B, A, B, A, B, B]
  max_depth: 12
  rules:
    - name: A
      rules: [B, +A, +A, x, B]
    - name: B
      rules: [A]
```

I especially like it for vectorized things, like pen plotting or paper cutouts.

<img class="fullwidth" src="/assets/imgs/ash/img2.png">


I have a few quirks to work out. But in the meantime it creates some interesting asymmetries.

<img class="fullwidth" src="/assets/imgs/ash/img1.jpg">


As for the name **ash**, I was trying to recreate a painting I liked of ash trees, but I headed in a different direction instead but the name stuck.
