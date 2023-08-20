import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from "unocss";

export default defineConfig({
  rules: [
    [/^text-(\d+)$/, ([, d]) => ({ "font-size": `${d}px` })],
    // [/^p-(\d+)$/, ([, d]) => ({ padding: `${d / 4}rem` })],
  ],
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
