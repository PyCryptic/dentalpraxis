# Stellenangebote – Anleitung

Die Stellenangebote der Karriereseite werden über die Datei:

`jobs.json`

verwaltet.

## Neue Stelle hinzufügen

Eine neue Stelle wird als neues Objekt in `jobs.json` eingetragen.

Wichtige Felder:

* `title` – Name der Stelle
* `start` – Beginn
* `location` – Arbeitsort
* `type` – z. B. Ausbildung
* `employment` – z. B. Vollzeit
* `schoolDegree` – benötigter Schulabschluss
* `requirements` – Anforderungen
* `benefits` – Vorteile
* `application` – Bewerbungsdaten

## Stelle anzeigen

```json
"active": true
```

Die Stelle wird auf der Karriereseite angezeigt.

## Stelle deaktivieren

```json
"active": false
```

Die Stelle bleibt in der JSON-Datei gespeichert, wird aber nicht mehr auf der Webseite angezeigt.

## Bewerbung

Die Bewerbungsdaten werden unter `application` gepflegt:

```json
"application": {
    "email": "varich@gmx.de",
    "company": "Praxis Alexander Varich",
    "street": "Am Schafgarten 1",
    "postalCode": "74906",
    "city": "Bad Rappenau"
}
```

## Dateien

```text
assets/
├── data/
│   ├── jobs.json
│   └── README.md
│
└── js/
    └── karriere.js
```

Die Datei `karriere.js` lädt die Stellen automatisch aus `jobs.json`.

**Wichtig:** Beim Bearbeiten der JSON-Datei auf Kommas, Anführungszeichen und Klammern achten. Ein Syntaxfehler kann verhindern, dass die Stellen geladen werden.
