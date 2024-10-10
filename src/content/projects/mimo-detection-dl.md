---
title: MIMO Detection with Deep Learning
author: "Óscar González Fresno"
date: "07 Oct 2024"
description: This project applies Deep Learning to improve detection in MIMO communication systems, focusing on beating traditional detection methods.
image: {
 src: "/portfolio/images/portada_tfg.jpg",
 alt: "tfg photo"
}
draft: false
featured: true
---

## Summary

This project investigates the use of Deep Learning techniques for detection in Multiple-Input Multiple-Output (MIMO) communication systems. It is part of the Final Degree Project in Telecommunications Engineering, ***MIMO Detection with Deep Learning***, conducted by Óscar González Fresno, under the supervision of Juan José Murillo Fuentes, Professor at the University of Seville.

The main objective is to **improve the efficiency of the Maximum Likelihood (ML) detection method, which, although optimal, presents a high computational burden**, especially as the number of antennas and constellation points increases.

The project is divided into three parts:

1. Simulation of the MIMO System in Python
2. Simulation of the MIMO System in PyTorch
3. Design and simulation of MIMO detection based on deep learning

## Key Features

* **MIMO communication system simulation:** A MIMO system is implemented in Python using the NumPy library, including signal generation, AWGN noise addition, and detection.
* **Comparison of detection methods:** Three detection methods are evaluated: Zero Forcing (ZF), Linear Minimum Mean Squared Error (LMMSE), and Maximum Likelihood (ML).
* **Implementation with PyTorch:** The MIMO system is migrated to PyTorch to leverage GPU processing power and tensor operations.
* **Design of a neural network for ML detection:** A neural network is designed and implemented using PyTorch to replicate the behavior of the ML detector, aiming to reduce computational complexity.

## Results

* **The traditional ML method shows better performance in terms of Bit Error Rate (BER) compared to ZF and LMMSE, especially in channels with poorly conditioned matrices.**
* **The PyTorch implementation significantly accelerates the detection process for ZF and LMMSE but does not show significant improvements for ML.**
* **The trained neural network achieves a BER similar to traditional ML for low SNR values. However, its performance deteriorates as SNR increases.**

## Future Research Directions

* **Optimization of the traditional ML detection algorithm to reduce its computational burden.**
* **Investigation into the performance difference of the ML algorithm between NumPy and PyTorch.**
* **Design of more complex neural networks to handle MIMO systems with a larger number of antennas and modulation points.**


## Acknowledgements

Thanks to the project supervisor, Juan José Murillo Fuentes, for his invaluable guidance and support. 

Recognition to the Department of Signal Theory and Communications of the University of Seville for providing the foundational material for this project.

## Links
- [Project Repository](https://github.com/oscgf/mimo-detection-dl)
- [Download Report](https://biblus.us.es/bibing/proyectos/abreproy/93911/descargar_fichero/TFG-3911+GONZ%C3%81LEZ+FRESNO%2C+%C3%93SCAR.pdf)