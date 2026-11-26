import { mkdirSync, writeFileSync } from "node:fs";

const OOO_OPEN = "Out of office until Monday: ";
const OOO_MIDDLE = "I will return to 3,214 unread emails, and ";
const OOO_CLOSE = "I have already forgiven myself for the ones I will never open.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = OUTPUT_DIR + "/" + OUTPUT_FILE;

const entry = OOO_OPEN + OOO_MIDDLE + OOO_CLOSE;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, entry, "utf8");
