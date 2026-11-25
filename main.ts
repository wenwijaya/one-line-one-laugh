// One Line, One Laugh — a single funny line, written to /output/entry.txt.
//
// The line must stand alone: no setup, no picture, punchline inside the line.
// Judge criteria: funny on its own, fast laugh, fresh angle, tight wording.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My smartwatch congratulated me for standing up today — the saddest applause I have ever received, and it came from my own wrist.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  try {
    mkdirSync(outDir, { recursive: true });
    const target = join(outDir, "entry.txt");
    writeFileSync(target, LINE + "\n", "utf8");
    try {
      chmodSync(target, 0o644);
    } catch {
      // Permissions are best-effort; the file is already written.
    }
  } catch (err) {
    // Last resort: try once more with a plain write so the gate still sees a line.
    try {
      mkdirSync(outDir, { recursive: true });
      const target = join(outDir, "entry.txt");
      writeFileSync(target, LINE + "\n", "utf8");
      try {
        chmodSync(target, 0o644);
      } catch {
        // Permissions are best-effort; the file is already written.
      }
    } catch {
      // Nothing left to try; still exit 0 per the sandbox contract.
    }
    void err;
  }
}

main();
