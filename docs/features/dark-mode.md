---
sidebar_position: 2
---

# Dark Mode

Nowadays, It is common for a website to have a dark version of the website to go along with the default design. Thus, we have added the dark mode feature to the website template.

## Toggling dark mode manually

By default, the website allows users to toggle the dark mode manually. In addition, the website will show the dark version as default. If you prefer the light version, you can modify the configuration at `src/feature/config/index.ts`.

```ts
export const themeConfig: ThemeConfigType = {
  // Other configurations

  defaultTheme: "dark", // "light" | "dark"
};
```

## Using system preference

If you prefer to let the website use a light or dark version based on the operating system preference, you can modify the configuration at `src/feature/config/index.ts`

```ts
export const themeConfig: ThemeConfigType = {
  // Other configurations

  darkMode: "system", // "manual" | "system" | "off"
};
```

The dark mode toggle button will be hidden when you use the operating system preference.

## Disabling dark mode

If you do not need the dark mode feature on the website, you can also turn it off in the configuration at `src/feature/config/index.ts`.

```ts
export const themeConfig: ThemeConfigType = {
  // Other configurations

  darkMode: "off", // "manual" | "system" | "off"
};
```

In this case, The dark mode toggle button will be hidden as well.

## Reference

### Theme configuration

| name         | description                                                                                                                                                                                                                      | values              |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| darkMode     | Method to toggle dark mode<br/>- If set to 'manual', the user can toggle dark mode by clicking the button<br/>- If set to 'system', the user's system preference will be used<br />- If set to 'off', dark mode will be disabled | manual, system, off |
| defaultTheme | Default theme<br />- If set to 'light', the light theme will be used by default<br />- If set to 'dark', the dark theme will be used by default                                                                                  | dark, light         |
