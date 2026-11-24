// One-Liner Laugh Lab — entry program.
//
// Writes one short funny line to /output/entry.txt: the excuse a robot
// vacuum gives after eating a sock. The line lives in line.txt next to this
// script so the text can be revised without touching the program logic.
// Stdlib only, deterministic, no network.
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const line = readFileSync(join(repoDir, "line.txt"), "utf8").trim();

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// The input directory is part of the harness contract; this entry needs no input.
void (process.env.MAKEFUN_INPUT_DIR ?? "/input");

writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
