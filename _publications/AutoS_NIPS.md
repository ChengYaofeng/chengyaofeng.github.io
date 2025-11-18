---
title: "Learning effective pruning at initialization from iterative pruning"
collection: publications
category: manuscripts
permalink: /publication/AutoS_NIPS
excerpt: 'model pruning at initialization'
date: 2024.8.27
venue: ''
paperurl: 'https://arxiv.org/abs/2408.14757'
citation: ''
---
Pruning at initialization (PaI) reduces training costs by removing weights beforetraining, which becomes increasingly crucial with the growing network size. How-ever, current PaI methods still have a large accuracy gap with iterative pruning,especially at high sparsity levels. This raises an intriguing question: can we getinspiration from iterative pruning to improve the PaI performance? In thelotteryticket hypothesis, the iterative rewind pruning (IRP) finds subnetworks retroactivelyby rewinding the parameter to the original initialization in every pruning iteration,which means all the subnetworks are based on the initial state. Here, we hypothe-sise the surviving subnetworks are more important and bridge the initial featureand their surviving score as the PaI criterion.  We employ an end-to-end neuralnetwork (AutoSparse) to learn this correlation, input the model’s initial features,output their score and then prune the lowest score parameters before training. Tovalidate the accuracy and generalization of our method, we performed PaI acrossvarious models. Results show that our approach outperforms existing methods inhigh-sparsity settings. Notably, as the underlying logic of model pruning is con-sistent in different models, only one-time IRP on one model is needed (e.g., onceIRP on ResNet-18/CIFAR-10, AutoS can be generalized to VGG-16/CIFAR-10,ResNet-18/TinyImageNet, et al.). As the first neural network-based PaI method,we conduct extensive experiments to validate the factors influencing this approach.These results reveal the learning tendencies of neural networks and provide new in-sights into our understanding and research of PaI from a practical perspective. Ourcode is available at:https://github.com/ChengYaofeng/AutoSparse.git.
