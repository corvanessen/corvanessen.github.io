---
layout: ../../layouts/Project.astro
order: 2
title: Koeltekaart
summary: Vind koele plekken in de Leidse regio bij hitte, van drinkwaterpunten tot schaduwrijke parken en zwemwater.
image: /img/koeltekaart.png
live: https://corvanessen.github.io/Koeltekaart/
code: https://github.com/corvanessen/Koeltekaart
tech: [TypeScript, Vite, Cloudflare Workers, OpenStreetMap, GitHub]
---

Een interactieve kaart met drinkwaterpunten, schaduwrijke parken, gratis zwemwater, zwembaden en koele binnenlocaties in de Leidse regio, te sorteren op plaats en gemeente.

## Iedereen kan meehelpen

Bezoekers kunnen op de kaart een locatie toevoegen of een wijziging voorstellen. Elke inzending wordt een pull request in een aparte datarepository ([KoelteKaartData](https://github.com/corvanessen/KoelteKaartData)). Goedkeuren is die pull request mergen; de kaart haalt de data direct op, dus een wijziging is meteen zichtbaar.

## Temperatuur

Een kleine Cloudflare Worker haalt elke 15 minuten de temperaturen van RIVM Samen Meten op voor de kaart.

[PLACEHOLDER: eventueel een persoonlijke noot.]
