---
layout: ../../layouts/Project.astro
order: 1
title: OV-afstand
summary: Kies een vertrekpunt en zie hoe lang je met trein, bus en fiets onderweg bent naar elke plek in Nederland.
image: /img/ovafstand.png
live: https://corvanessen.github.io/OVafstand/
code: https://github.com/corvanessen/OVafstand
tech: [TypeScript, MapLibre, Web Worker, Python, GTFS, OSRM]
---

Een kaart van Nederland als heatmap: hoe lang ben je met OV plus fiets onderweg naar elke plek? Je kunt twee vertrekpunten vergelijken, een tijdstip of dag kiezen en de hele dag afspelen.

## Hoe het werkt

- **Dienstregeling:** de complete Nederlandse dienstregeling (GTFS) wordt offline omgezet naar een compacte graaf van haltes en lijnen.
- **Fietsen:** een eigen fietsraster op basis van OpenStreetMap, berekend met een eigen OSRM-server. Ook ponten doen mee.
- **In de browser:** al het rekenwerk gebeurt in een Web Worker bij jou op het toestel. Een kaart voor heel Nederland kost ongeveer een halve seconde.
- **Echte vertrektijden:** naast een gemiddelde wachttijd kan de kaart ook met de echte dienstregeling rekenen.

[PLACEHOLDER: eventueel een persoonlijke noot: waarom je dit bouwde, of wat je ervan leerde.]
