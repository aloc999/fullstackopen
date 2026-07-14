# Full Stack Open

Solutions for the [University of Helsinki Full Stack Open](https://fullstackopen.com/) course.

## Part 0 — Fundamentals of Web apps

The exercises 0.1–0.3 are reading tutorials (HTML, CSS, HTML forms) and are not submitted to GitHub.

The diagrams for exercises 0.4–0.6 are written using [Mermaid](https://github.com/mermaid-js/mermaid) sequence-diagram syntax, which GitHub renders natively in Markdown.

| Exercise | File | Description |
| --- | --- | --- |
| 0.4 | [part0/0.4-new-note.md](part0/0.4-new-note.md) | New note (traditional form / HTTP POST) |
| 0.5 | [part0/0.5-single-page-app.md](part0/0.5-single-page-app.md) | Opening the single page app |
| 0.6 | [part0/0.6-new-note-spa.md](part0/0.6-new-note-spa.md) | New note in the single page app |

## Part 1 — Introduction to React

Three Vite + React apps. To run any of them:

```bash
cd part1/<app>
npm install
npm run dev
```

| App | Exercises | Description |
| --- | --- | --- |
| [courseinfo](part1/courseinfo) | 1.1–1.5 | Course info rendered with `Header`, `Content`/`Part`, `Total` components using props |
| [unicafe](part1/unicafe) | 1.6–1.11 | Feedback app with `good`/`neutral`/`bad` buttons, `Statistics`/`StatisticLine` in an HTML table |
| [anecdotes](part1/anecdotes) | 1.12–1.14 | Random software-engineering anecdotes with voting and "most votes" display |
