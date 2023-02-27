---
sidebar_position: 3
---

# Localisation

The website template supports localisation. You can add your own localisation files to the `src/features/awesome-feature/locales/<ISO_639-1_CODE>` folder. The localisation files are in the [JSON](https://www.json.org/json-en.html) format.

Behind the scene of the localisation feature, we are using the [react-i18next](https://react.i18next.com/) library. You can refer to the [react-i18next documentation](https://formatjs.io/docs/react-intl/) for more information.

## Adding a new language

To add a new language, you can create a new folder in the `src/features/awesome-feature/locales` folder. The folder name should be the [ISO 639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) of the language. For example, if you want to add the French language, you can create a folder named `fr` in the `src/features/awesome-feature/locales` folder.

Then, you can add the localisation files to the folder. You can name anything for the localisation files. For example, if you want to add the French language for homepage, you can create a file named `homepage.json` in the `src/features/awesome-feature/locales/fr` folder.

Next, export the localisation files in the `src/features/awesome-feature/locales/index.ts` and `src/features/awesome-feature/index.ts` file. For example:

```ts
// src/features/awesome-feature/locales/index.ts
export * from "./fr";

// src/features/awesome-feature/index.ts
export * from "./locales";
```

Lastly, you can update the configuration in the `src/configs/locales.ts`. For example:

```ts
import { fr as homepage } from "features/awesome-feature";

export const localeConfig = {
  // Other configurations
  resources: {
    // Other languages
    fr: {
      ...homepage,
    },
  },
};

export const languages = {
  // Other languages
  fr: "Français", // The name of the language to be displayed in the language switcher
};
```

## Localisation file

The localisation files are in the [JSON](https://www.json.org/json-en.html) format. The structure of the localisation files is as follows:

```json
{
  "key": "value"
}
```

## Configuration

If you want to change the default configuration of the localisation feature, you can modify the configuration at `src/configs/locale.ts`.

You can refer to the [react-i18next documentation](https://formatjs.io/docs/react-intl/) for more information.
