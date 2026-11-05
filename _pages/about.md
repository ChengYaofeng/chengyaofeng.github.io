---
permalink: /
title: "Yaofeng Cheng"
description: "Yaofeng Cheng (程耀锋) studies transparent object perception, 3D vision and robotic manipulation. Engineer at Zhejiang Humanoid Robot Innovation Center and postdoctoral researcher at Zhejiang University."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---
<div class="intro">
  <p class="intro__eyebrow">Robotics · 3D Vision · Machine Learning</p>
  <p class="intro__lead">I work on helping robots perceive and manipulate the physical world, with a focus on transparent objects and geometry-aware grasping.</p>
  <p>I am an engineer at the <strong>Zhejiang Humanoid Robot Innovation Center</strong> and a postdoctoral researcher at <strong>Zhejiang University</strong>. My research connects transparent object perception, 3D shape estimation and task-oriented robotic manipulation.</p>
  <div class="profile-actions">
    <a class="profile-actions__primary" href="mailto:{{ site.author.email }}">Get in touch <span aria-hidden="true">↗</span></a>
    <a href="{{ '/publications/' | relative_url }}">Publications</a>
    <a href="{{ '/cv/' | relative_url }}">View CV</a>
  </div>
</div>

## Research interests

<div class="research-grid">
  <div class="research-area">
    <h3>Transparent perception</h3>
    <p>Recovering reliable depth and geometry for objects that challenge conventional RGB-D sensing.</p>
  </div>
  <div class="research-area">
    <h3>Geometry-aware grasping</h3>
    <p>Using point-cloud completion and 3D shape features to generate executable 6-DoF grasps.</p>
  </div>
  <div class="research-area">
    <h3>Task-oriented manipulation</h3>
    <p>Combining intuitive physics and learned models to choose grasps suited to the task.</p>
  </div>
</div>

## Selected publications

{% assign selected_papers = site.publications | where: 'selected', true | sort: 'date' | reverse %}
{% for paper in selected_papers %}
  {% include publication-card.html paper=paper %}
{% endfor %}

[View all publications →]({{ '/publications/' | relative_url }})

## Background

I received my Ph.D. in Mechatronics Engineering from **Harbin Institute of Technology**, conducting research at the State Key Laboratory of Robotics and System under the supervision of Fusheng Zha. During my Ph.D., I undertook a CSC-supported research exchange at the **University of Liverpool** with Chenguang Yang. I received my B.Eng. from **Wuhan University of Technology**.

[Education and research experience →]({{ '/cv/' | relative_url }})
