---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
description: "Yaofeng Cheng's education, research appointments, research interests and selected publications in robotic perception and manipulation."
author_profile: true
redirect_from:
  - /resume
---
<div class="cv-intro">
  <p>Yaofeng Cheng / 程耀锋<br><a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></p>
  <button class="print-cv" type="button" onclick="window.print()">Print / Save as PDF</button>
</div>

## Work & research appointments

- **Engineer**, Zhejiang Humanoid Robot Innovation Center, China · Current
- **Postdoctoral Researcher**, Zhejiang University, China · 2026–Present<br>Supervisor: Yue Wang

## Education & visiting research

- **Ph.D. in Mechatronics Engineering**, Harbin Institute of Technology, China · 2020–2026<br>Supervisor: Fusheng Zha; State Key Laboratory of Robotics and System
- **Joint Ph.D. Training Program**, University of Liverpool, United Kingdom · 2024–2025<br>Supervisor: Chenguang Yang; supported by the China Scholarship Council (CSC)
- **B.Eng. in Mechatronics Engineering**, Wuhan University of Technology, China · 2016–2020

## Research interests

Transparent object perception and depth completion; point-cloud-based 3D shape estimation; geometry-aware 6-DoF grasping; task-oriented robotic manipulation; neural network pruning.

## Selected publications

{% assign selected_papers = site.publications | where: 'selected', true | sort: 'date' | reverse %}
{% for paper in selected_papers %}
<div class="cv-publication">
  <h3><a href="{{ paper.url | relative_url }}">{{ paper.title }}</a></h3>
  <p>{{ paper.authors | markdownify | remove: '<p>' | remove: '</p>' }}<br><em>{{ paper.venue }}</em>, {{ paper.date | date: '%Y' }}.</p>
</div>
{% endfor %}

[Full publication list →]({{ '/publications/' | relative_url }}) · [Google Scholar]({{ site.author.googlescholar }}) · [GitHub](https://github.com/{{ site.author.github }})
