# Contributing

This is the ColorStack SDSU website. `main` deploys to Netlify on every push, so everything lands through a pull request.

## Workflow

1. Pull the latest `main`.
2. Create a branch. Name it after the change: `feat/events-page`, `fix/nav-overlap`, `docs/readme`.
3. Make your change. Run `npm run build` and `npm run lint` before you push.
4. Push and open a pull request against `main`.
5. Squash-merge once checks pass and any review comments are resolved.

Direct pushes to `main` are blocked, including for admins. Force pushes and branch deletion are blocked too.

## Pull requests

- Keep each PR to one change. If you touched something unrelated, split it out.
- Write a title that says what changed, not what you did: "Add events page", not "Working on events".
- In the description, say what the change does and how you tested it. Add a screenshot for anything visual.
- Resolve every review comment before merging, even if the answer is "won't change, here's why".

## Commits

- Present tense, short first line, no trailing period: `Add footer links`.
- No `Co-Authored-By` or tool signature trailers.
- Don't commit `node_modules`, `dist`, `.env`, or editor settings. `.gitignore` covers these, so check `git status` if something looks off.

## Code

- Components live in `src/components/`, page-level views in `src/pages/`.
- One component per file, named the same as the file.
- Prefer plain CSS or CSS modules. Don't add a styling library without discussing it first.
- Don't add dependencies for things a few lines of code can do.

## Using AI tools

AI assistants (Claude, Copilot, ChatGPT, Cursor, and the like) are fine to use. These rules apply when you do.

- **You own what you submit.** Read every line before you commit it. If you can't explain a change in review, don't ship it.
- **Say so in the PR.** A line like "Drafted with Claude, reviewed and tested by me" is enough. This isn't a penalty, it just helps reviewers know where to look harder.
- **Verify before you trust.** AI tools invent package names, API signatures, and CSS properties. Check that dependencies exist and that the code actually runs.
- **Keep the change scoped.** AI tools like to reformat, rename, and "improve" files you didn't ask about. Revert anything outside the change you meant to make.
- **Never paste secrets.** No API keys, tokens, `.env` contents, or member data into any AI tool. Same rule as pasting them anywhere else public.
- **Test it yourself.** Run the dev server and click through the change. "The AI said it works" isn't testing.
- **No auto-generated PRs without a human.** Bots and agents can open PRs, but a person must review, test, and take responsibility before merging.

## Getting help

Open an issue or ask in the ColorStack SDSU Discord. Small questions are welcome.
