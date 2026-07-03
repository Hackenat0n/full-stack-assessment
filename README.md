# Full Stack Assessment

Web app React + Vite per creare e gestire assessment formativi per studenti di una marketing academy.

## Avvio

1. Esegui npm install
2. Esegui npm run dev
3. Apri l'indirizzo mostrato dal terminale, di solito http://127.0.0.1:5173

## Struttura

- src/data/assessments.js: questionari in JSON, facili da modificare.
- src/lib/storage.js: lettura e scrittura dati in LocalStorage, sostituibile in futuro con API backend.
- src/lib/scoring.js: calcolo punteggi automatici.
- src/components: componenti riutilizzabili.
- src/App.jsx: orchestrazione viste studente e coach.

## Dati salvati

Risposte, stato, punteggio automatico, correzioni e feedback coach vengono salvati nel LocalStorage del browser.

## Pubblicazione online

Questa e una web app, non un programma da installare sul PC. Per avere un link pubblico puoi pubblicarla su Vercel o Netlify.

### Vercel

1. Carica questa cartella in un repository GitHub.
2. Entra su Vercel e scegli Add New Project.
3. Importa il repository.
4. Lascia questi valori:
   - Framework: Vite
   - Build command: npm run build
   - Output directory: dist
5. Clicca Deploy.

### Netlify

1. Carica questa cartella in un repository GitHub.
2. Entra su Netlify e scegli Add new site.
3. Importa il repository.
4. Lascia questi valori:
   - Build command: npm run build
   - Publish directory: dist
5. Clicca Deploy.
