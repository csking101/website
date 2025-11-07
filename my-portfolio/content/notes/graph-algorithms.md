---
title: "Graph Algorithms Cheat Sheet"
date: "2024-09-08"
tags: ["Algorithms", "Data Structures", "Computer Science"]
---

# Graph Algorithms Cheat Sheet

## Graph Representations

### Adjacency Matrix
- Space: O(V²)
- Edge lookup: O(1)
- Good for dense graphs

### Adjacency List
- Space: O(V + E)
- Edge lookup: O(degree)
- Good for sparse graphs

## Traversal Algorithms

### Breadth-First Search (BFS)
**Use cases:**
- Shortest path (unweighted)
- Level-order traversal
- Connected components

**Time:** O(V + E)
**Space:** O(V)

```python
def bfs(graph, start):
    visited = set()
    queue = [start]
    
    while queue:
        node = queue.pop(0)
        if node not in visited:
            visited.add(node)
            queue.extend(graph[node])
```

### Depth-First Search (DFS)
**Use cases:**
- Topological sort
- Cycle detection
- Path finding

**Time:** O(V + E)
**Space:** O(V)

```python
def dfs(graph, node, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(node)
    for neighbor in graph[node]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
```

## Shortest Path Algorithms

### Dijkstra's Algorithm
- **Use:** Single-source shortest path
- **Constraint:** Non-negative weights
- **Time:** O((V + E) log V) with min-heap

### Bellman-Ford Algorithm
- **Use:** Single-source with negative weights
- **Detects:** Negative cycles
- **Time:** O(VE)

### Floyd-Warshall Algorithm
- **Use:** All-pairs shortest paths
- **Time:** O(V³)
- **Space:** O(V²)

## Minimum Spanning Tree

### Kruskal's Algorithm
1. Sort edges by weight
2. Use Union-Find
3. Add edges that don't create cycle

**Time:** O(E log E)

### Prim's Algorithm
1. Start from any vertex
2. Grow MST by adding minimum edge
3. Use priority queue

**Time:** O((V + E) log V)

## Topological Sort
**Requirements:**
- Directed Acyclic Graph (DAG)

**Algorithm:**
1. Find vertex with no incoming edges
2. Remove vertex and its edges
3. Repeat

**Applications:**
- Task scheduling
- Course prerequisites
- Build systems

## Key Patterns

**Graph coloring:** Greedy + backtracking
**Bipartite check:** BFS with 2 colors
**Strongly connected components:** Kosaraju's or Tarjan's
**Cycle detection:** DFS with recursion stack

## Common Problems

- **Islands in a grid:** BFS/DFS
- **Network delay time:** Dijkstra
- **Course schedule:** Topological sort
- **Number of provinces:** Union-Find
