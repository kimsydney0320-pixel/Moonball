# Working notes — Moonball

Context that lives in conversations and gets lost with them. Keep it short; update it when a
decision is made or an open question is settled.

Last updated: 2026-11-20

## Where things stand

Live since Nov 18, 2026. Feature-complete for a daily game: seven prompts at 25 seconds, six
rarity tiers, leaderboard, locker room with 14 stadium cosmetics, shareable trading card,
challenge links, Deep Cut of the Day, per-rarity answer animations.

435 prompts, 9,645 answers. 434 are scheduled across 62 days; the last fresh day is **Jan 18, 2027**.
After that the rotation wraps to day one and replays the same sequence — nothing breaks, but
returning players start seeing repeats.

## Decisions worth remembering

- **Difficulty tuning (Nov 19).** Broad, deep prompts are the standard for every day. Niche
  list questions and single-draft-class questions were deliberately removed. From day 3 of the
  rotation onward each day warms up with easy prompts and saves the hard ones for the end.
- **The Hail Mary final play was added and then removed** on Nov 19. It is not coming back
  without a reason.
- **Answers are obfuscated, not secured.** `data.js` is XOR-encoded with a key derived from each
  prompt id, and the decoder ships in `index.html`. It stops casual answer-peeking in devtools;
  it is not meant to stop anyone determined.
- **Real names are never shown.** The leaderboard shows player-chosen nicknames from the `nicks`
  collection, validated for length and character set in `firestore.rules`.
- **Moonball and Deep Three are kept at feature parity**, and changes are usually applied to both
  in the same sitting with matching commit messages.

## Open questions

- What happens at the end of the rotation on Jan 18? Write more prompts, or let it repeat?
- Nothing drives players back daily except the streak. Is that enough?
- The support button and sponsor slot are built but hidden until configured.

## Watch out for

- `firestore.rules` covers **both** games. Deploying a copy that is missing the `d3_` half
  silently breaks Deep Three. The file is identical in both repos on purpose.
- Keep `PROMPT_ORDER` a multiple of 7. Anything past the last full day is never dealt —
  this had quietly stranded two prompts before Nov 20. `scramble.js` now warns about it.
- Never edit `data.js` by hand; edit `data.source.js` and run `node scramble.js`.
