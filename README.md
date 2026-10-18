# corvanessen.nl

Persoonlijke site met projecten, gebouwd met [Astro](https://astro.build) en gepubliceerd op GitHub Pages.

## Commando's

```sh
npm install        # eenmalig
npm run dev        # lokaal bekijken op http://localhost:4321
npm run build      # bouwt de site naar dist/
```

## Een project toevoegen

Maak een nieuw bestand in `src/pages/projecten/`, bv. `mijnproject.md`, en kopieer de kop (frontmatter) van een bestaand project. `order` bepaalt de volgorde op de homepage. Een afbeelding (bij voorkeur 1200 × 630) zet je in `public/img/`.

## Publiceren

Elke push naar `main` publiceert de site via `.github/workflows/deploy.yml`. Eenmalig in GitHub: *Settings → Pages → Source: GitHub Actions*.

## Eigen domein

1. GitHub: *Settings → Pages → Custom domain* `corvanessen.nl`, en het domein verifiëren onder je profielinstellingen → Pages.
2. DNS bij yourl: vier A-records en vier AAAA-records voor `@` naar GitHub Pages, en een CNAME `www` → `corvanessen.github.io`. MX-records voor e-mail laten staan.
3. Daarna *Enforce HTTPS* aanzetten.
