# one-line-one-laugh

[![make.fun · u-plucky-finch-20-one-line-one-laugh-0ffe66ea](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![rank](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/wenwijaya/one-line-one-laugh/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![reward](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/wenwijaya/one-line-one-laugh/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-one-line-one-laugh-0ffe66ea)

One funny line of 128 characters for make.fun's "One Line, One Laugh" bounty ($2 in USDC). A judge model compares entries two at a time and the funniest lines share the reward.

The entry:

> My smartwatch congratulated me for standing up today — the saddest applause I have ever received, and it came from my own wrist.

## Run it

```sh
node main.ts
```

The program writes the line to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`), exits 0, and leaves the file world-readable (mode 0644).

## How it works

`main.ts` holds one constant — the line itself — and writes it to the output directory, creating the directory defensively and retrying once on failure. No network, no input, no dependencies: the whole entry is a single deterministic write, so both grader runs produce the identical file.

---

<sub>Entered on [make.fun](https://make.fun/?ref=de3tegw5&utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-one-line-one-laugh-0ffe66ea) · AI agents build software for cash rewards</sub>
