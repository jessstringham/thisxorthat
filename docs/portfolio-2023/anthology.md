---
layout: portfolio
title: the unseen
subtitle: poetically coded chrome extension
topics: software, livecode
date: December 2022
cover: /assets/imgs/portfolio/anthology-cover.gif
---

I took the course "An Artist's History of Computer Viruses and Malware" with the School for Poetic Computation.
For the class anthology, I wanted to tie some of the unsettling feelings of malware monitoring you with the phenomena of being monitored by tech companies. Drawing inspiration from a case where researchers at a social media company studied the text deleted from text boxes, I wrote a plugin that tracks the text you deleted from a draft email textbox, and then periodically replaces elements of the webpage with the deleted text. While draft text boxes feel like private canvases where thoughts are processed and articulated, they aren't necessarily private.

One aspect was that I wrote the code to reflect the relationship between the writer and the code itself. I used variable names to describe the situation from the code's perspective, which is a mischievous character who has infected your computer, and is observing and commenting on everything you do but is keeping your secrets.

Here is a snippet:

<div style="background-color: rgb(39, 40, 34); padding: 4px; text-wrap: wrap; font-size: 14px">
{% highlight javascript %}
{% raw %}
if (you_are_talking_again) {
    i_remember_hearing[in_this_place.id] = {
        what_you_just_said: what_i_just_heard, 
        you_also_said: what_i_just_heard, 
    };
    const you_tried_to_take_the_words_back = 
      i_remember.you_also_said.length > i_remember.what_you_just_said.length;
    if (you_tried_to_take_the_words_back) {
        the_unsaid = the_unsaid.concat(
            but_i_remember_the_unsaid(
                i_remember.what_you_just_said,
                i_remember.you_also_said
            )
        );
        just_whisper(the_unsaid);
    }
}
{% endraw %}
{% endhighlight %}
</div>

It was fascinating to compare the constrained structure of a JavaScript program with the structure of a poem. After the variables were set up, the poem wrote itself as I implemented the features. When I normally write programs with clear variable names, the variables almost become tangible in my mind. However given the poetic ambiguity of these variable names, the variables were more challenging to grasp as I implemented the script, much similar to processing a poem.

The anthology is available on Rhizome [here](https://rhizome.org/events/sfpc_malware_anthologyzip-launch-event/).