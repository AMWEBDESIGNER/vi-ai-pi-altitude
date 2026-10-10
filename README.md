# Le Vi Aï Pi Altitude — site vitrine complet

Site vitrine multipage pour **Le Vi Aï Pi Altitude**, restaurant et bar musical d’altitude situé au départ du télésiège de la Festoure à Superdévoluy.

- **Catégorie :** restaurant, brasserie et music bar d’altitude
- **Commune :** Le Dévoluy — station de Superdévoluy
- **État d’activité :** actif et ouvert en saison ; vérification croisée le 10 octobre 2026 sur deux portails touristiques institutionnels, avec périodes annoncées jusqu’au 11 avril 2027

## Architecture

- Accueil éditorial et immersif.
- Pages dédiées au lieu, au restaurant, aux soirées/groupes et aux informations pratiques.
- Contact téléphonique permanent et itinéraire fonctionnel.
- FAQ, page 404, sitemap, robots, mentions légales et confidentialité.
- Contenus actualisés avec la fiche Office de tourisme mise à jour le 24 août 2026.

## Liens

- Site Cloudflare Pages : [vi-ai-pi-altitude.pages.dev](https://vi-ai-pi-altitude.pages.dev)
- Dépôt GitHub : [AMWEBDESIGNER/vi-ai-pi-altitude](https://github.com/AMWEBDESIGNER/vi-ai-pi-altitude)
- Téléphone public : 07 88 03 69 55

## Sources publiques

- [Fiche officielle de l’Office de tourisme du Dévoluy](https://www.ledevoluy.com/hiver/offres/le-vi-ai-pi-altitude-superdevoluy-fr-hiver-3736052/)
- [Fiche Provence-Alpes-Côte d’Azur Tourisme, mise à jour le 24 août 2026](https://provence-alpes-cotedazur.com/sejourner/restaurants/tous-les-restaurants/le-vi-ai-pi-altitude-superdevoluy-devoluy-fr-2930246/)
- [Fiche Hautes-Alpes, consultée en octobre 2026](https://www.hautes-alpes.net/fiche/le-vi-ai-pi-altitude/)

Le logo et les photographies utilisés proviennent de la fiche touristique officielle du Dévoluy, qui les crédite au Vi Aï Pi. Ils restent la propriété de leurs auteurs ou ayants droit. Cette réalisation est une proposition indépendante et n’est pas le site officiel de l’établissement. Une autorisation écrite et la validation du contenu sont nécessaires avant toute exploitation commerciale.

## Personnalisation

- `index.html` et les pages thématiques : textes, horaires, téléphone et liens.
- `styles.css` et `pages.css` : identité, mise en page et responsive.
- `app.js` et `pages.js` : transitions, mouvement de l’emblème, neige, parallaxe et interactions.
- `assets/` : logo, photographies documentées et polices locales.

## Éléments à confirmer par l’établissement

- coordonnées juridiques et adresse électronique pour les mentions légales ;
- carte, allergènes, tarifs et moyens de paiement réellement acceptés ;
- calendrier exact des soirées, capacité et modalités de la chenillette ;
- droits de publication définitifs du logo et des photographies ;
- horaires le jour de la venue, dépendants de la météo et des remontées.

Le site est statique et se déploie directement à la racine, sans commande de compilation.

## Motion design et provenance du code

Animations réalisées en CSS vanilla, avec respect de `prefers-reduced-motion`, et une révélation progressive inspirée du pattern public [Scroll animation: IntersectionObserver and CSS](https://codepen.io/oscar-jite/pen/qBzwOVq). La logique reste locale, légère et adaptée à l’identité de chaque établissement ; aucune dépendance payante ni contenu généré n’est requis.
