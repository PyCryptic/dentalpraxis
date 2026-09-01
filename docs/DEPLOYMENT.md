# Website veröffentlichen

Diese Anleitung beschreibt die grundlegenden Schritte zur Veröffentlichung der Website.

## Vor dem Upload

Vor einer Veröffentlichung sollte die Website vollständig getestet werden.

Prüfen:

* Navigation
* Mobile Navigation
* Links
* Telefonnummern
* E-Mail-Adressen
* Bilder
* Stellenangebote
* Impressum
* Datenschutz
* Darstellung auf Smartphone und Desktop

## Stellenangebote prüfen

Vor dem Upload kontrollieren:

`assets/data/jobs.json`

Nur Stellen mit:

```json
"active": true
```

werden auf der Website angezeigt.

Nicht mehr aktuelle Stellen sollten auf:

```json
"active": false
```

gesetzt werden.

## Dateien hochladen

Beim Upload muss die Ordnerstruktur erhalten bleiben.

Beispiel:

```text
assets/
├── css/
├── data/
├── images/
└── js/
```

Die Dateien dürfen nicht ohne Anpassung der Pfade in andere Ordner verschoben werden.

## JSON beachten

Die Datei:

`assets/data/jobs.json`

muss ebenfalls auf den Webserver hochgeladen werden.

Ansonsten kann die Karriereseite keine Stellenangebote laden.

## Nach dem Upload testen

Nach jeder Veröffentlichung sollte die Live-Website noch einmal kontrolliert werden.

Besonders prüfen:

1. Startseite öffnen.
2. Navigation testen.
3. Mobile Navigation testen.
4. Karriereseite öffnen.
5. Prüfen, ob Stellenangebote geladen werden.
6. E-Mail-Button testen.
7. Telefon-Link testen.
8. Impressum und Datenschutz öffnen.

## Cache

Wenn nach einem Upload noch eine alte Version angezeigt wird, kann der Browser-Cache die Ursache sein.

In diesem Fall die Seite vollständig neu laden.

## Backup

Vor größeren Änderungen sollte eine Sicherung der aktuellen funktionierenden Website erstellt werden.

Eine ältere funktionierende Version sollte nicht sofort überschrieben oder gelöscht werden.
