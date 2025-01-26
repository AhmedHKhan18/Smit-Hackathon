import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next'],
    rules: {
      "no-console": "off", // Disable no-console globally
      "react/no-unescaped-entities": "off", // Example: Disable a React-specific rule
    },
  }),];

export default eslintConfig;
