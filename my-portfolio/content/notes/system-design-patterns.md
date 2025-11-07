---
title: "System Design Patterns"
date: "2024-08-15"
tags: ["System Design", "Architecture", "Scalability"]
---

# System Design Patterns

## Scalability Patterns

### Load Balancing
**Types:**
- Round Robin
- Least Connections
- IP Hash
- Weighted Round Robin

**Benefits:**
- Distributes traffic evenly
- Increases availability
- Enables horizontal scaling

### Caching
**Strategies:**
- **Cache-aside:** App manages cache
- **Write-through:** Write to cache + DB
- **Write-back:** Write to cache, async to DB

**Cache Invalidation:**
- TTL (Time To Live)
- LRU (Least Recently Used)
- Event-driven

### Sharding
**Methods:**
- Horizontal sharding (by rows)
- Vertical sharding (by columns)
- Hash-based
- Range-based

**Considerations:**
- Rebalancing complexity
- Cross-shard queries
- Hot spots

## Communication Patterns

### Synchronous
- **HTTP/REST:** Simple, widely supported
- **gRPC:** Fast, binary protocol
- **GraphQL:** Flexible querying

### Asynchronous
- **Message Queues:** RabbitMQ, SQS
- **Event Streaming:** Kafka, Kinesis
- **Pub/Sub:** Redis, Google Pub/Sub

## Database Patterns

### Replication
**Master-Slave:**
- Writes to master
- Reads from replicas
- Lag concerns

**Multi-Master:**
- All nodes accept writes
- Conflict resolution needed

### CAP Theorem
Pick 2 of 3:
- **C**onsistency
- **A**vailability
- **P**artition tolerance

**Reality:** Choose between CP or AP

### ACID vs BASE
**ACID (RDBMS):**
- Atomicity
- Consistency
- Isolation
- Durability

**BASE (NoSQL):**
- Basically Available
- Soft state
- Eventually consistent

## Architectural Patterns

### Microservices
**Pros:**
- Independent deployment
- Technology flexibility
- Better fault isolation

**Cons:**
- Network complexity
- Data consistency
- Debugging difficulty

### Event-Driven Architecture
**Components:**
- Event producers
- Event bus
- Event consumers

**Benefits:**
- Loose coupling
- Scalability
- Flexibility

### CQRS (Command Query Responsibility Segregation)
- Separate read/write models
- Optimize independently
- Complex but powerful

## Reliability Patterns

### Circuit Breaker
States: Closed → Open → Half-Open

Prevents cascade failures.

### Retry with Exponential Backoff
```
delay = base_delay * (2 ^ attempt) + jitter
```

### Rate Limiting
**Algorithms:**
- Token bucket
- Leaky bucket
- Fixed window
- Sliding window

## Key Metrics

**Latency:** Response time
**Throughput:** Requests/second
**Availability:** Uptime percentage
**Consistency:** Data accuracy

## Design Checklist

1. Understand requirements (functional + non-functional)
2. Estimate scale (users, data, traffic)
3. Design data model
4. Choose components
5. Address bottlenecks
6. Consider failure modes
