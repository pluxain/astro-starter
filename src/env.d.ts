// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
  readonly LOG_LEVEL: "debug" | "error" | "fatal" | "info" | "trace" | "warn";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
