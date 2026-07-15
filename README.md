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

## Part 2 — Rendering a collection, forms, fetching/altering data, styles

Three Vite + React apps. To run any of them:

```bash
cd part2/<app>
npm install
npm run dev
```

| App | Exercises | Description |
| --- | --- | --- |
| [courseinfo](part2/courseinfo) | 2.1–2.5 | `Course` as a separate module, rendering parts with `map`, total with `reduce`, supports multiple courses |
| [phonebook](part2/phonebook) | 2.6–2.17 | Phonebook backed by `json-server` (port 3001) + axios; `Filter`/`PersonForm`/`Persons`/`Notification` components, services module, add/update/delete, success & error notifications |
| [countries](part2/countries) | 2.18–2.20 | Country search against the Helsinki RESTCountries API; list with "show" buttons, single-country detail, capital weather via OpenWeatherMap |

### Phonebook backend

The phonebook uses `json-server`. Start it in a separate terminal:

```bash
cd part2/phonebook
npm run server   # serves db.json on http://localhost:3001
```

### Countries weather (2.20)

The weather report needs a free [OpenWeatherMap](https://openweathermap.org) API key. Copy the example
env file and add your key, then restart the dev server:

```bash
cd part2/countries
cp .env.example .env   # then set VITE_OPENWEATHER_API_KEY=<your key>
npm run dev
```
