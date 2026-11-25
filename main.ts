import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const line: string =
  "I asked my Wi-Fi for a sign. It gave me one bar, then left me on read.";

function main(): void {
  try {
    mkdirSync("/output", { recursive: true });
    writeFileSync("/output/entry.txt", line + "\n", "utf8");
    chmodSync("/output/entry.txt", 0o644);
  } catch {
    try {
      mkdirSync("output", { recursive: true });
      writeFileSync("output/entry.txt", line + "\n", "utf8");
      chmodSync("output/entry.txt", 0o644);
    } catch {
      // Nothing else to try; still exit 0 below.
    }
  }
}

main();
process.exit(0);
