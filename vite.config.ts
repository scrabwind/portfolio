import { defineConfig } from "vite-plus";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {},
  test: {
    include: ["src/**/*.test.ts"],
  },
  lint: {
    jsPlugins: [
      { name: "vite-plus", specifier: "vite-plus/oxlint-plugin" },
      { name: "tailwindcss", specifier: "eslint-plugin-tailwindcss" },
    ],
    rules: {
      "vite-plus/prefer-vite-plus-imports": "error",
      "tailwindcss/no-unnecessary-arbitrary-value": "error",
    },
    options: { typeAware: true, typeCheck: true },
    ignorePatterns: ["dist/**"],
  },
});
