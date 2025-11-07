---
title: "Privacy-Preserving Techniques in Federated Learning"
date: "2024-09-22"
tags: ["Federated Learning", "Privacy", "Machine Learning"]
---

# Privacy-Preserving Techniques in Federated Learning

## Introduction

Federated Learning (FL) enables training machine learning models on distributed data without centralizing it. While this provides inherent privacy benefits, additional techniques are needed to prevent information leakage through model updates.

## Federated Learning Overview

### Traditional ML vs. Federated ML

**Traditional:**
```
Data → Central Server → Train Model → Deploy
```

**Federated:**
```
Central Model → Clients
Clients → Local Training → Updates
Aggregate Updates → Improved Model
```

### Key Challenges

1. **Statistical heterogeneity:** Non-IID data across clients
2. **Communication efficiency:** Limited bandwidth
3. **Privacy leakage:** Model updates can reveal training data
4. **Byzantine failures:** Malicious or faulty clients

## Privacy Threats

### 1. Membership Inference
Attacker determines if specific data point was in training set.

**Risk:** Violates individual privacy

### 2. Model Inversion
Reconstruct training samples from model parameters.

**Example:** Recovering faces from face recognition models

### 3. Gradient Leakage
Recent work shows gradients can leak significant information about training batches.

### 4. Poisoning Attacks
Malicious clients inject backdoors or corrupt model.

## Privacy-Preserving Techniques

### Differential Privacy (DP)

**Definition:** 
```
Pr[M(D) ∈ S] ≤ e^ε · Pr[M(D') ∈ S]
```
Where D and D' differ by one record.

**Implementation in FL:**
1. Add calibrated noise to gradients
2. Clip gradient norms
3. Aggregate noisy updates

**Parameters:**
- ε (epsilon): Privacy budget (smaller = more private)
- δ (delta): Failure probability

**Trade-off:** Privacy vs. Model Accuracy

```python
def add_dp_noise(gradients, sensitivity, epsilon):
    noise_scale = sensitivity / epsilon
    noise = np.random.laplace(0, noise_scale, gradients.shape)
    return gradients + noise
```

### Secure Aggregation

**Goal:** Server learns only aggregate, not individual updates

**Approach:** Homomorphic encryption or secret sharing

**Protocol:**
1. Clients mask their updates
2. Server aggregates masked updates
3. Masks cancel out in aggregate

**Benefit:** Server never sees individual gradients

**Cost:** 2-3x communication overhead

### Homomorphic Encryption

**Property:** Compute on encrypted data
```
Enc(a) + Enc(b) = Enc(a + b)
```

**Application in FL:**
- Clients encrypt updates
- Server aggregates encrypted updates
- Result decrypted collectively

**Challenges:**
- Computational overhead (10-100x slower)
- Limited operations
- Key management complexity

### Local Differential Privacy (LDP)

**Stronger than central DP:** Noise added before sharing

**Mechanism:**
1. Client adds noise locally
2. Sends noisy update to server
3. Server cannot see true value

**Trade-off:** More noise needed for same privacy guarantee

## Advanced Techniques

### Split Learning

**Approach:** Split model between client and server
- Client: First k layers
- Server: Remaining layers

**Privacy:** Raw data never leaves device

**Limitation:** Multiple communication rounds per batch

### Federated Transfer Learning

**Idea:** Pre-train on public data, fine-tune privately

**Benefit:** Less private data needed for good performance

### Personalization

**Challenge:** Global model may not fit all clients

**Solutions:**
- Per-client fine-tuning
- Meta-learning (MAML)
- Multi-task learning

## Evaluation Metrics

### Privacy Metrics
- **ε-differential privacy bound**
- **Attack success rate** (membership inference)
- **Reconstruction error** (model inversion)

### Utility Metrics
- **Model accuracy**
- **Convergence rounds**
- **Communication cost**

### Privacy-Utility Trade-off Curve
```
Accuracy
  ^
  |     ___________
  |    /
  |   /
  |  /
  | /
  |/_________________> Privacy (ε)
```

## Practical Considerations

### When to Use FL?

**Good fit:**
- Medical data (HIPAA compliance)
- Financial records
- User behavior (keyboards, recommendations)
- Cross-organizational collaboration

**Poor fit:**
- Small datasets (centralize instead)
- Homogeneous data distribution
- High communication costs prohibitive

### Implementation Frameworks

**TensorFlow Federated:**
```python
@tff.federated_computation
def aggregate_updates(server_weights, client_updates):
    return tff.federated_mean(client_updates)
```

**PySyft:** Privacy-focused deep learning

**FATE:** Industrial federated learning platform

## Open Research Directions

1. **Verifiable FL:** Prove clients used correct data
2. **Byzantine-robust aggregation:** Handle malicious clients
3. **Communication efficiency:** Gradient compression, quantization
4. **Fairness:** Ensure model works well for all clients
5. **Unlearning:** Remove specific data's influence

## Case Studies

### Google Gboard
- Predicts next word on Android keyboards
- Millions of devices
- Updates aggregated on-device

### Healthcare Consortiums
- Multiple hospitals train shared model
- Patient data never leaves hospital
- Improved diagnosis accuracy

## Conclusion

Federated Learning with privacy-preserving techniques enables collaborative ML while respecting data sovereignty. The field is maturing rapidly, with production deployments showing promise. Key challenges remain in balancing privacy, utility, and efficiency.

## Key Takeaways

- FL provides baseline privacy but needs additional protections
- Differential privacy is gold standard but has accuracy cost
- Secure aggregation prevents server from seeing individual updates
- Multiple techniques can be combined for stronger guarantees
- Real-world deployments are increasing

## References

1. McMahan et al., "Communication-Efficient Learning of Deep Networks from Decentralized Data" (2017)
2. Bonawitz et al., "Practical Secure Aggregation for Privacy-Preserving Machine Learning" (2017)
3. Kairouz et al., "Advances and Open Problems in Federated Learning" (2021)
4. Wei et al., "Federated Learning with Differential Privacy" (2020)
