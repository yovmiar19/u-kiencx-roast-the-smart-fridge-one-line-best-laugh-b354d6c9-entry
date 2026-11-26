// Roast the Smart Fridge: One Line, Best Laugh Wins
// The fridge speaks: one line, one sentence, 131 chars (gate: max 160).
// Line: Opus 5.5 Thinking #4 — the yogurt that expired on Tuesday, and the
// six dismissed alerts that out-commit the owner. Deadpan, specific, in-gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Your yogurt expired on Tuesday and you've dismissed my alert six times, which is more commitment than you've ever shown the yogurt.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate check: one line, one sentence, at most 160 characters.
const sentences = LINE.replace(/\b[ap]\.m\./g, "AM").split(/[.!?]/).filter(Boolean);
if (!LINE.trim() || LINE.length > 160 || sentences.length !== 1) {
  throw new Error(
    `Entry fails the gate: ${LINE.length} chars, ${sentences.length} sentence(s) (need <=160 chars, exactly 1 sentence)`,
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
console.log(`Wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
