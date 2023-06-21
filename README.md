# Programmierrätsel: JavaScript
Diese Rätsel-Sammlung bringt ein wenig Spaß in den Programmierer-Alltag: Thomas Rose hat sich kleine pfiffige Fragen und Herausforderungen ausgedacht, die sich meist mit ein paar Zeilen JavaScript-Code umsetzen lassen … aber auf dem Weg dahin muss natürlich erst ein wenig geknobelt werden! Eine fertige Lösung gibt der Autor selbst am Ende eines jeden Films preis. Ihren eigenen Code können Sie mit dem Testframework Mocha selbst überprüfen, Informationen zur Installation und Bedienung erhalten Sie zu Beginn der Rätselreihe.

## Nutzung mit GitHub Codespace
Wenn Sie in diesem Repository ein GitHub Codespace erzeugen, können Sie sofort mit dem Miträtseln beginnen. Klicken Sie dazu einfach auf

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/codeispoetry/programmierraetsel)

Die Testumgebung ist schon vorab installiert und Sie können sofort mit dem Programmieren beginnen.

Um Ihren Code zu testen, tippen Sie z.B. im Terminal ein
```bash
mocha aufgaben/00_test.js
```
oder 
```bash
mocha loesungen/
```

## Lokale Nutzung ohne Codespace
### Voraussetzungen
- Texteditor oder Entwicklungsumgebung, z.B. VS Code
- Node und npm installiert
- Die Übungsdateien aus diesem Repository

### Installation
- $ npm install --global mocha

### Nutzung
- $ mocha 
- $ mocha loesungen/01_kreditkartennummern.js
- $ mocha loesungen