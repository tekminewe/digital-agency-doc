---
sidebar_position: 3
---

# Project Structure

The project is kept simple and consistent with the following structure.

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
  +-- locales           # Shared locales used across the entire application
  |
  +-- routes            # Routes configuration
```

Each feature is separated into different folders so we can locate and maintain them easily. The structure in the feature folder is very similar to the root level structure, but we separate them based on individual features.

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

Using this structure, we can always start from `src/routes/index.tsx` or any `routes/index.tsx` in the `feature` folder to understand the entry for each path. Thus, it is easier to look up the file we need to change.

In addition, by looking at the `index.ts` in each `feature` folder, we could also know the exported components or methods. This is useful when we want to reuse the components or methods in other features.
