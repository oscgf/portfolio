---
title: Integrated Sensing and Communication System
author: "Óscar González Fresno"
date: "September 2025"
summary: MATLAB-based study of MIMO-OFDM configurations for Integrated Sensing and Communication (ISAC) in 6G networks.
description: This Master’s Thesis explores Multiple-Input Multiple-Output Orthogonal Frequency Division Multiplexing (MIMO-OFDM) as a framework for Integrated Sensing and Communication (ISAC) in future Sixth-Generation (6G) wireless systems through MATLAB simulations, analyzing BER, range, and Doppler resolution under multiple configurations.
image:
  src: "/portfolio/images/isac.jpg"
  alt: "MIMO-OFDM ISAC simulation"
github: "https://github.com/oscgf/mimo-ofdm-isac"
report: "/portfolio/pdf/isac_mimo_ofdm.pdf"
draft: false
featured: true
tags:
  - MATLAB
  - 6G
  - MIMO
  - OFDM
  - ISAC
---

## Summary

This thesis investigates **MIMO-OFDM as a baseline for Integrated Sensing and Communication (ISAC)** in 6G networks. The work explores trade-offs between communication reliability and sensing accuracy through detailed MATLAB simulations. The simulations evaluate **Bit Error Rate (BER)** and **range-Doppler response** under varying antenna arrays, subcarrier counts and more configurations.

## Key Features

* **MATLAB-based ISAC framework:** Modular simulation code structured into configurable functions for flexible experimentation.  
* **Dual communication–sensing capability:** MIMO-OFDM system designed to transmit data while simultaneously estimating range and velocity of moving targets.  
* **Baseline configuration:** 8×8 MIMO array, 6 GHz carrier frequency, 100 Mhz bandwidth and 2048 subcarriers.  
* **Performance evaluation:** Analyses of BER, range–Doppler maps, and parameter sensitivity (antennas, subcarriers, pilot allocation, modulation order).  
* **Refactored and documented code:** Enhanced readability and maintainability through function modularization and CSV-driven configuration.  

## Results

* **Communication:**  
  - Baseline 64-QAM BER ≈ 9.96 × 10⁻³.  
  - Reducing modulation to 4-QAM improves BER to 8.76 × 10⁻⁴.  

* **Sensing:**  
  - Accurate detection of moving targets through range–Doppler analysis.  
  - System detects Doppler shifts corresponding to target motion directions and velocities.  

* **Parameter variations:**  
  - *Antennas:* Increasing the number of antennas is positive por range-Doppler resolution but results in worse BER.
  - *Subcarriers:* More subcarriers increased sensing resolution but degraded BER.  
  - *Data streams:* Increasing parallel streams degrades communication reliability but minimally affects sensing.  
  - *Carrier frequency and bandwidth:* Higher carrier frequency and bandwidth improve resolution but increase complexity and loss.  
  - *Pilot design:* Hexagonal/rectangular pilot grids were tested but limited by MATLAB modulator constraints.  

## Conclusions

The study concludes that **MIMO-OFDM remains a strong candidate waveform for ISAC** due to its flexibility and compatibility with current wireless standards.  
However, balancing sensing and communication functions requires **joint optimization of pilot structure, antenna configuration, and waveform parameters**.  
Future work includes extending the framework to **THz-band** scenarios and investigating **machine learning–based channel estimation** to enhance performance in complex environments.

## Acknowledgements

Grateful acknowledgment to **María Julia Fernández-Getino García** for her supervision and guidance, and to the **Master’s Degree in Advanced Communication Technologies** at **Universidad Carlos III de Madrid** for academic support.