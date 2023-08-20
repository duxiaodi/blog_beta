import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from "unocss";

export default defineConfig({
  // rules: [
  //   [/^m-(\d+)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
  //   [/^p-(\d+)$/, ([, d]) => ({ padding: `${d / 4}rem` })],
  // ],
  presets: [
    presetUno({
      dark: "media",
    }),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
  ],
});
