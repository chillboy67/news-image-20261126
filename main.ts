// news-image-20261126 — entry program for make.fun.
// Copies the bundled newspaper front-page image to the output path.
// Node 22, standard library only, no network access.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

// The image is bundled in this repository, so both runs write
// byte-identical output with no network or randomness involved.
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
