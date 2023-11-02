---
layout: portfolio
title: Autoencoder Chernoff faces
subtitle: a playful visualization for machine learning embeddings
topics: exhibition
date: Nov 2019
cover: /assets/imgs/portfolio/2020-01-06-facemap-zoom.jpg
---

A topic I find interesting in machine learning is "representations", or how the model learns to represent more abstract concepts.
For example, how does a language model trained on book topics group up those topics and how does that compare to how we've consciously classified topics?

<img class="fullwidth-no-border" src="/assets/imgs/portfolio/2019-11-06-vectors.png">

In the field, this is often achieved through "embeddings", which can be achieved by creating a bottleneck and forcing the model to crunch a lot of examples of the same thing down into a tiny amount of data, usually an array of real numbers.

You then have the problem of how to look at those embeddings.
One way to think of it is as a position in n-space, and things near to each other are probably similar. It's hard to consider more than 3 spatial dimensions, so a common technique is to squish the real numbers into a smaller number of dimensions: for example plotting out a 2D map can call upon a map or atlas.

However, that second squishing comes at a cost: you're removing some information that the model is using!

I wanted to explore a playful way to view n-dimensional data, Chernoff faces. The insight is that humans have a lot of experience looking at facial expressions, so if you connect different data to facial expressions, you can group and notice relations.

Below are some examples of the 2D map of topics (on the right) and the corresponding face on the left.

<img class="fullwidth-no-border" src="/assets/imgs/portfolio/2019-11-06-ex.png">


My idea was to connect Chernoff faces to the problem of viewing multi-dimensional vectors.
I used an open dataset that annotated facial expressions in photos of faces. I actually just used the annotations, because I wanted an abstract image. I used an autoencoder, which tasks the model to convert the face to a small embedding and back. I then took one part from this model and connected it to the embeddings learned about book topics from the Seattle Public Library.


I documented this on my blog [here](https://jessicastringham.net/2019/11/06/learning-chernoff-faces/) and [here](https://jessicastringham.net/2020/01/06/faces-in-a-crowd-visualization/), posted the full source code online [here](https://github.com/jessstringham/notebooks/tree/942af7a1b0200dd0d5de351ab3d6359c1edede94), and published a python package [here](https://pypi.org/project/vec2face/) that can be used to generate faces from different-sized vectors.

<img class="fullwidth-no-border" src="/assets/imgs/portfolio/2020-01-06-facemap-many.png">