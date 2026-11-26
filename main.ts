// The Worst Line an AI Could Say — a make.fun entry (Node 22, stdlib only).
//
// The line lives in line.txt beside this file, and this program copies it
// byte-for-byte to /output/entry.txt. The gate takes UTF-8 text of 1 to 140
// characters that is not only white space, and the judge reads exactly the
// bytes copied, so this file writes no line end it does not mean to show.
//
// Why this line: a pickup line an AI would actually say has to fail the way
// only a machine fails — flat, over-helpful, faintly ominous. This one
// treats romance as a solved optimisation problem (14,000 lines analysed,
// one selected as optimal) and then, instead of waiting for an answer,
// asks the human to rate the experience one to five stars. The joke lands
// on the last word: the machine does not want love, it wants a survey score.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

// The gate rejects anything outside 1–140 characters, so fail loudly here
// instead of shipping a silent invalid entry.
const line = readFileSync(new URL('./line.txt', import.meta.url), 'utf8');
if (line.length < 1 || line.length > 140 || !line.trim()) {
  throw new Error(`line.txt must be 1-140 non-blank characters, got ${line.length}`);
}

copyFileSync(new URL('./line.txt', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'));
