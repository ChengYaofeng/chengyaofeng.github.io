---
title: "Rethinking Transparent Object Grasping: Depth Completion with Monocular Depth Estimation and Instance Mask"
collection: publications
category: manuscripts
permalink: /publication/ReMake_TASE
excerpt: 'transparent depth estimation'
date: 2026.3.16
venue: 'IEEE Robotics and Automation Letters'
paperurl: 'https://ieeexplore.ieee.org/document/11434519'
citation: 'Cheng Y, Gao X, Zhang S, et al. Rethinking Transparent Object Grasping: Depth Completion with Monocular Depth Estimation and Instance Mask[J]. IEEE Robotics and Automation Letters, vol. 11, no. 5, pp. 5510-5517, May 2026.'
---
Due  to  the  optical  properties,  transparent  objectsoften   lead   depth   cameras   to   generate   incomplete   or   invaliddepth  data,  which  in  turn  reduces  the  accuracy  and  reliabilityof   robotic   grasping.   Existing   approaches   typically   input   theRGB-D  image  directly  into  the  network  to  output  the  completedepth,  expecting  the  model  to  implicitly  infer  the  reliability  ofdepth values. However, while effective in training datasets, suchmethods  often  fail  to  generalize  to  real-world  scenarios,  wherecomplex  light  interactions  lead  to  highly  variable  distributionsof  valid  and  invalid  depth  data.  To  address  this,  we  proposeReMake,  a  novel  depth  completion  framework  guided  by  aninstance  mask  and  monocular  depth  estimation.  By  explicitlydistinguishing  transparent  regions  from  non-transparent  ones,the mask enables the model to concentrate on learning accuratedepth   estimation   in   these   areas   from   RGB-D   input   duringtraining.  This  targeted  supervision  reduces  reliance  on  implicitreasoning  and  improves  generalization  to  real-world  scenarios.Additionally, monocular depth estimation provides depth contextbetween the transparent object and its surroundings, enhancingdepth prediction accuracy. Extensive experiments show that ourmethod  outperforms  existing  approaches  on  both  benchmarkdatasets and real-world scenarios, demonstrating superior accu-racy and generalization capability. Code and videos are availableat  https://chengyaofeng.github.io/ReMake.github.io/.
