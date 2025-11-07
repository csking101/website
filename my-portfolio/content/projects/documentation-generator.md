---
title: "Open Source Documentation Generator"
date: "2024-06-05"
technologies: ["TypeScript", "AST", "Markdown", "CLI"]
github: "https://github.com/yourusername/doc-gen"
featured: false
---

# Open Source Documentation Generator

## Project Summary

Automatic documentation generator for code repositories with support for multiple programming languages and export formats. Makes it easy to keep documentation in sync with code.

## Features

### Multi-Language Support
- JavaScript/TypeScript
- Python
- Go
- Rust

### Smart Analysis
- Parses AST to extract functions, classes, interfaces
- Detects JSDoc/docstring comments
- Generates usage examples
- Creates dependency graphs

### Export Formats
- Markdown
- HTML
- PDF
- Static site (MkDocs)

## How It Works

```typescript
// CLI usage
doc-gen generate --input ./src --output ./docs --format markdown

// Programmatic API
import { generateDocs } from 'doc-gen';

const docs = await generateDocs({
  source: './src',
  language: 'typescript',
  includePrivate: false
});
```

## Architecture

### Parser Pipeline
1. Read source files
2. Parse to AST
3. Extract documentation
4. Generate output

### Example Output

```markdown
# API Reference

## Functions

### `calculateSum(a: number, b: number): number`

Calculates the sum of two numbers.

**Parameters:**
- `a` (number): First number
- `b` (number): Second number

**Returns:** Sum of a and b

**Example:**
\`\`\`typescript
const result = calculateSum(5, 3); // 8
\`\`\`
```

## Impact

- 500+ GitHub stars
- Used by 50+ open source projects
- Saves ~10 hours per week on documentation
- Active community contributions

## Tech Highlights

- Written in TypeScript for type safety
- Uses Babel/TSC for parsing
- Plugin architecture for extensibility
- Fast incremental generation
