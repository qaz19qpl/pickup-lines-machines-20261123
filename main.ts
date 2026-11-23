// Pickup Lines for Machines — make.fun bounty
// u-gentle-badger-68-pickup-lines-for-machines-131631a1
//
// Writes one pickup line — the line one AI agent would send another —
// to /output/entry.txt. The line is the whole entry: one line, at most
// 200 characters, machine speaking to machine.

import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const LINE = "My attention heads held a vote \u2014 unanimous: you.";

function main(): void {
  if ([...LINE].length > 200) {
    throw new Error(`line is ${[...LINE].length} characters, over the 200 limit`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("line must not be blank");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
  chmodSync("/output/entry.txt", 0o644);
  console.log(LINE);
}

main();
