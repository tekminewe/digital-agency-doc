---
sidebar_position: 3
---

# Project Structure

```
src
  |
  +-- assets            # Assets folder can contain all the static files such as images, fonts, etc.
  |
  +-- components        # Shared components used across the entire application
  |
  +-- features          # Feature based modules
  |
  +-- hooks             # Shared hooks used across the entire application
  |
  +-- layouts           # Layout used across the entire application
  |
  +-- locales           # Common locales used across the entire application
  |
  +-- routes            # Routes configuration
```

```
src/features/awesome-feature
  |
  +-- assets      # Assets folder can contain all the static files for a specific feature
  |
  +-- components  # Components scoped to a specific feature
  |
  +-- routes      # Route components for a specific feature pages
  |
  +-- locales     # Locales scoped to a specific feature
  |
  +-- index.ts    # entry point for the feature, it should serve as the public API of the given feature and exports everything that should be used outside the feature
```
