---
title: "Neural Networks: The Basics"
date: "2024-10-20"
tags: ["Machine Learning", "Neural Networks", "AI"]
---

# Neural Networks: The Basics

## Introduction

Neural networks are computational models inspired by biological neurons. They form the foundation of modern deep learning.

## Core Concepts

### The Perceptron
The simplest unit:
- Takes weighted inputs
- Applies activation function
- Produces output

**Mathematical representation:**
```
y = f(w₁x₁ + w₂x₂ + ... + wₙxₙ + b)
```

### Activation Functions

**Sigmoid:** σ(x) = 1/(1 + e⁻ˣ)
- Output: [0, 1]
- Use: Binary classification

**ReLU:** f(x) = max(0, x)
- Most popular for hidden layers
- Solves vanishing gradient

**Tanh:** tanh(x) = (eˣ - e⁻ˣ)/(eˣ + e⁻ˣ)
- Output: [-1, 1]
- Zero-centered

## Forward Propagation

1. Input layer receives data
2. Hidden layers process information
3. Output layer produces prediction

## Backpropagation

The algorithm that makes learning possible:
1. Calculate loss
2. Compute gradients
3. Update weights
4. Repeat

**Chain rule is key:**
```
∂L/∂w = ∂L/∂y × ∂y/∂z × ∂z/∂w
```

## Loss Functions

**Mean Squared Error (Regression):**
```
MSE = (1/n)Σ(yᵢ - ŷᵢ)²
```

**Cross-Entropy (Classification):**
```
H(p,q) = -Σ p(x)log(q(x))
```

## Optimization

### Gradient Descent
```
w = w - α∇L(w)
```

### Adam Optimizer
Combines momentum and adaptive learning rates.

## Key Takeaways

- Neural networks learn by adjusting weights
- Activation functions introduce non-linearity
- Backpropagation enables gradient-based learning
- Choice of architecture depends on the task
