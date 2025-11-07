---
title: "Learning Rust: A Month of Memory Safety"
date: "2024-09-15"
tags: ["Rust", "Programming", "Systems"]
---

# Learning Rust: A Month of Memory Safety

## Why Rust?

After years of JavaScript and Python, I decided to dive into systems programming. Rust's promise of memory safety without garbage collection intrigued me.

## The Learning Curve

### Week 1: Fighting the Borrow Checker
The borrow checker was frustrating at first. Every other line wouldn't compile!

```rust
let mut s = String::from("hello");
let r1 = &s;
let r2 = &mut s; // ERROR!
```

### Week 2: Understanding Ownership
Then it clicked. Ownership isn't just a compiler feature—it's a way of thinking about program design.

### Week 3: Pattern Matching Joy
Pattern matching in Rust is beautiful:

```rust
match result {
    Ok(value) => println!("Success: {}", value),
    Err(e) => eprintln!("Error: {}", e),
}
```

### Week 4: Building Something Real
Finally built a CLI tool. The type system caught so many bugs before runtime!

## Key Takeaways

- The borrow checker is your friend
- Zero-cost abstractions are real
- The community is incredibly helpful
- Documentation is top-tier

## Would I Recommend It?

Absolutely! Rust changes how you think about programming, even when using other languages.
