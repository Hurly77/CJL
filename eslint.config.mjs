import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compact = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compact.extends("next", "plugin:@typescript-eslint/recommended", "prettier"),
  ...compact.plugins("@typescript-eslint", "simple-import-sort"),

  {
    ignores: ["icons.js", "/node_modules/**", "/deprecated-pages", "/docs"],
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "no-console": 1,
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
    settings: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // Node.js builtins
            [
              "^(assert|buffer|child_process|cluster|console|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",
            ],
            // Packages. `react` related packages come first.
            ["^react", "^@?\\w"],
            // Internal packages.
            [
              "^(@|@company|@ui|@src|components|utils|config|vendored-lib|src|actions|services|helpers|hooks|constants|data|store|contexts|actions|reducers|features|lib|pages)(/.*|$)",
            ],
            // Side effect imports.
            ["^\\u0000"],
            // Parent imports. Put `..` last.
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            // Other relative imports.
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            ["^(styles)(/.*|$)"],
            // Global style imports.
            ["^.+\\.s?css$"],
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
