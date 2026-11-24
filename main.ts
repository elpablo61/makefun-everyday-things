import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "In Ibu Sari's kitchen at seven, a toaster is a tiny elevator that carries one slice of bread down into a hot room and pops it back up brown and smelling of toast.\n" +
  "It maps the ride down, the heat, and the pop back up, but leaves out that the bread never presses a button and the little room has no windows.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate requires 1 to 400 characters; refuse to write an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 400) {
  throw new Error(`entry must be 1-400 characters, got ${ENTRY.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
