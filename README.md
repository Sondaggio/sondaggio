# Sondaggio studenti

Sondaggio degli studenti del Dipartimento di Ingegneria dell'Innovazione (Università del Salento) sui corsi e sui docenti, a cura di Udu Lecce Ingegneria.

- **Area studenti** (`/`): scelta del corso, delle materie e compilazione anonima.
- **Pannello admin** (`/admin`): dati accademici, domande, edizioni, statistiche, importazioni, impostazioni e utenti.

Stack: React, TypeScript, Vite, Tailwind e Supabase (database, accessi e regole di sicurezza).

## Avviare in locale

1. Copia `.env.example` in `.env.local` e inserisci l'indirizzo del progetto Supabase e la chiave **publishable** (Project Settings → API). Non usare mai la chiave secret.
2. Installa e avvia:

```bash
npm install
npm run dev
```

Il sito è su <http://localhost:5173>.

## Pubblicare su GitHub Pages

Il file `.github/workflows/pubblica.yml` costruisce e pubblica il sito a ogni caricamento sul ramo `main`.

1. Su GitHub, in *Settings → Secrets and variables → Actions → Variables*, crea `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY` con gli stessi valori di `.env.local`.
2. In *Settings → Pages* scegli come sorgente **GitHub Actions**.
3. Su Supabase, in *Authentication → URL Configuration*, aggiungi l'indirizzo del sito come Site URL e tra i Redirect URLs.
4. Con un dominio proprio, o un repository chiamato `nomeutente.github.io`, crea anche la variabile `DOMINIO_PROPRIO` (qualsiasi valore) per pubblicare alla radice.

Prima di aprire un'edizione agli studenti va scelto e realizzato il metodo di verifica: oggi il database non impedisce compilazioni ripetute.
