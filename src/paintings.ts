import fs from 'node:fs';

// Elk schilderij is een bestand in public/img/schilderijen/ (groot) met een
// kleinere versie in klein/. Nieuwste eerst, op bestandsnaam (datum van de foto).
export function getPaintings() {
  return fs
    .readdirSync('public/img/schilderijen')
    .filter((f) => f.endsWith('.jpg'))
    .sort()
    .reverse()
    .map((f) => ({
      src: `/img/schilderijen/${f}`,
      thumb: `/img/schilderijen/klein/${f}`,
    }));
}
