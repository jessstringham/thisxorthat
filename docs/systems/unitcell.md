---
layout: page
tags: Rust, algorithms
date: August 2023
title: unitcells
subtitle: dynamic instances
cover: /assets/imgs/unitcell/cover.png
---

**unitcell** is the way I configure instances of objects to create patterns.
I'm borrowing the term unitcell from crystallography, where a crystal consists of repeating unitcells in a lattice.

<img src="/assets/imgs/unitcell/img3.gif">

The way I have it set up breaks down repeating patterns into two parts: the *sequencer* and the *unitcells*.

The *sequencer* configures how many unitcells will be drawn, along with how they are scaled and positioned: for example a 3d lattice, a grid, a hexagonal grid, or a spiral are all things I've used.

The *unitcell* is responsible for what is drawn, and only needs to worry about its own contents. It has access to its indices in the *sequencer* or introduce randomness when drawing the cell.

Here are a few things I've made with unitcells.

<img class="fullwidth" src="/assets/imgs/unitcell/cover.png">

This one is similar to the animation above, but is cut out of paper using a vinyl cutter.


<img class="fullwidth" src="/assets/imgs/unitcell/img2.png">

I created this pen plot with an early prototype of unitcell and a previous project [substations](/systems/substations). I used a function of grid position and randomness to determine whether to show the cell.

