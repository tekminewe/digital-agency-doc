---
sidebar_position: 1
---

# Theme

Every business or individual website will have its unique identity and style. Thus, **Maxime** comes with a simple yet powerful design system for maintaining a consistent tone on the website. It allows you to customise all design aspects of your project to meet the specific needs of your business or brand.

**Maxime** uses [Tailwind CSS](https://tailwindcss.com/) as the core design system. It provides a wide range of utility classes that can be used to customise the design of the website. In addition, **Maxime** also provides a set of pre-defined classes that can be used to quickly customise the design of the website.

## Customising the design

You can find all the [customisable theme colours](#theme-configuration) in `tailwind.config.cjs`. Some colours come with the suffix "**Invert**", which is used for [dark mode](/docs/features/dark-mode). For example,

```json
{
  "text": "#262626", // Text colour in light version
  "textInvert": "#e5e5e5" // Text colour in dark version
}
```

## Reference

### Theme configuration

```json
{
  /**
   * Brand colours
   */
  "primary": "#2563eb",

  /**
   * Accent colours
   * Used for buttons, link, highlight etc.
   */
  "accent": "#eab308",

  /**
   * Semantic colours
   */
  "success": "#4caf50",
  "info": "#2196f3",
  "warning": "#ff9800",
  "error": "#f44336",

  /**
   * Font colours
   */
  "text": "#262626",
  "textLight": "#525252",
  "textLighter": "#a3a3a3",

  /**
   * Font colours (dark mode)
   */
  "textInvert": "#e5e5e5",
  "textLightInvert": "##a3a3a3",
  "textLighterInvert": "#525252",

  /**
   * Background colours
   */
  "background": "#fafafa",
  "backgroundDark": "#f5f5f5",
  "backgroundDarker": "#e5e5e5",

  /**
   * Background colours (dark mode)
   */
  "backgroundInvert": "#171717",
  "backgroundDarkInvert": "#262626",
  "backgroundDarkerInvert": "#404040"
}
```
