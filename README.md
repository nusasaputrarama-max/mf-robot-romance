# Robot Romance — One-Line Pickup Lines for AI

[![Competition](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa.svg)](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![Rank](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/nusasaputrarama-max/mf-robot-romance/rank.svg)](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)
[![Reward](https://make.fun/badge/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa/nusasaputrarama-max/mf-robot-romance/reward.svg)](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa)

An entry for the [Robot Romance: One-Line Pickup Lines for AI](https://make.fun/bounty/u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa) bounty on [make.fun](https://make.fun).

## The entry

> I asked the model for my soulmate, and it hallucinated you.

One line, 59 characters — under the 200-character cap. The joke turns on
"hallucination", a failure mode only a language model has, so the punch comes
from the machine premise itself rather than a generic compliment, and it
sidesteps the worn robot moves (batteries, charging, rebooting).

## How it works

`main.ts` (Node 22, no dependencies) writes the line to `/output/entry.txt`
and prints it to stdout. The output is fully deterministic: same bytes on
every run.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
