---
layout: portfolio2026
title: LLM-Powered Pocket Calculator
subtitle: an over-engineered, tokenmaxxing reverse-engineered pocket calculator
topics: making
date: June 2026
cover: /assets/imgs/portfolio-2026/calc-hero.jpeg
---

<img class="floatmedimage" src="/assets/imgs/portfolio-2026/calc-hero.jpeg" alt="LLM-powered calculator.">

As commentary on what LLM agents were doing to the software engineering industry, I reverse-engineered a pocket calculator's interface to make a real, working LLM-powered pocket calculator.

The [video I posted](https://www.instagram.com/reel/DaEHj93Nyqe/) went viral and has over 1.4M views so far.


I tracked down which buttons corresponded to which wires, scraped leads and soldered new wires to the device, and then wired it to a Pi Pico microcontroller. The solar panel slot, once used to power the entire calculator, is now an OLED display showing how many tokens you burned. The calculations, previously handled in a small piece of silicone, are now being sent to a data center somewhere to be processed via many more arithmetic computations than the original request.

A second version moved even more logic to the agent's context: rather than requesting "2 + 2 =", it sent the individual button presses: "2", "+", "2", "=". To reduce the chance of hallucinating an answer, the agent is instructed to come up with multiple approaches to carry out the arithmetic and cross-check its answer. This approach used more than a hundred thousand tokens and cost 15 cents.