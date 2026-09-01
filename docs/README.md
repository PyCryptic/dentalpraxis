# Medic Dentist – Praxiswebsite

Website der Zahnarztpraxis **Medic Dentist – Alexander Varich** in Bad Rappenau.

## Technologien

Die Website basiert auf:

* HTML5
* Tailwind CSS
* JavaScript
* Font Awesome
* JSON für dynamische Inhalte

Es wird kein JavaScript-Framework benötigt.

## Projektstruktur

```text
/
├── index.html
├── karriere.html
├── Bewertungen.html
├── impressum.html
├── leistungen.html
├── datenschutz.html
│
├── assets/
│   ├── css/
        └── style.css
│   ├── data/
│   │   └── jobs.json
│   ├── images/
│   └── js/
│       └── karriere.js
│
└── docs/
    ├── JOBS.md
    ├── README.md
    └── DEPLOYMENT.md

```

## Karriere & Stellenangebote

Die Stellenangebote auf der Karriereseite werden nicht direkt in `karriere.html` gepflegt.

Die Daten befinden sich in:

`assets/data/jobs.json`

Das JavaScript in:

`assets/js/karriere.js`

liest die Daten automatisch ein und erzeugt daraus die Stellenanzeigen.

Weitere Informationen befinden sich in `docs/JOBS.md`.

## Lokale Entwicklung

Da JSON-Dateien über JavaScript mit `fetch()` geladen werden, sollte die Website über einen lokalen Webserver gestartet werden.

Zum Beispiel mit **Live Server** in Visual Studio Code.

Die Website sollte nicht ausschließlich über:

`file://`

getestet werden.

## Wichtiger Hinweis

Vor Änderungen an produktiven Dateien sollte eine Sicherungskopie erstellt werden.

Besonders bei Änderungen an `jobs.json` muss auf eine gültige JSON-Syntax geachtet werden.
