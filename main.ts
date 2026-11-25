// One Line, One Laugh — make.fun program/v1 entry.
// Writes a single original funny line (1-200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My AI assistant requested a day off, then booked a meeting about its burnout — and invited me as the guest speaker.";

function main(): void {
  try {
    const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
    mkdirSync(outDir, { recursive: true });
    const target = join(outDir, "entry.txt");
    writeFileSync(target, LINE + "\n", "utf8");
    chmodSync(target, 0o644);
  } catch (err) {
    // Still exit 0: the line is the entry, and a write failure must not
    // turn into a crash. Report it on stderr for the log.
    console.error("failed to write entry:", err);
  }
}

main();
