// Robot Romance: One-Line Pickup Lines for AI
// Writes a single original pickup line, aimed at an AI, to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace, one line.
//
// Why this line: the joke turns on "hallucination", a failure mode only a
// language model has, so the punch comes from the machine premise itself
// rather than a generic compliment. It dodges the worn robot moves the
// judge penalises (batteries, charging, rebooting) and it reads like
// something a person would actually say to a chatbot in one breath:
// a wish, then the twist that the wish itself misfired.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I asked the model for my soulmate, and it hallucinated you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
