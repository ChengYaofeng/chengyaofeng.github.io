---
title: "PCF-Grasp: Converting Point Completion to Geometry Feature to Enhance 6-DoF Grasp"
collection: publications
category: manuscripts
permalink: /publication/pcfgrasp
excerpt: '6-DoF Grasping'
date: 2025.11.12
venue: 'IEEE Transactions on Systems, Man, and Cybernetics: Systems'
paperurl: 'https://ieeexplore.ieee.org/document/11242157'
citation: ''
---
The 6-degree-of-freedom (DoF) grasp method based on point clouds has shown significant potential in enabling robots to grasp target objects. However, most existing methods are based on the point clouds (2.5-D points) generated from single-view depth images. These point clouds only have one surface side of the object, providing incomplete geometry information, which misleads the grasping algorithm to judge the shape of the target object, resulting in low grasping accuracy. Humans can accurately grasp objects from a single view by leveraging their geometry experience to estimate object shapes. Inspired by humans, we propose a novel 6-DoF grasping framework that converts the point completion results as object shape features to train the 6-DoF grasp network. Here, point completion can generate approximately complete points from the 2.5-D points similar to the human geometry experience, and converting them into shape features is the way to utilize it to improve grasp efficiency. Furthermore, due to the gap between the network generation and actual execution, we integrate a score filter into our framework to select more executable grasp proposals for the real robot. This enables our method to maintain a high grasp quality in any camera viewpoint. Extensive experiments demonstrate that utilizing complete point features enables the generation of significantly more accurate grasp proposals, and the inclusion of a score filter greatly enhances the credibility of real-world robot grasping. Our method achieves a 17.8% success rate, higher than the state-of-the-art method in real-world experiments. Code and videos are available at https://github.com/ChengYaofeng/PCF-Grasp.
