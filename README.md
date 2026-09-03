# VéloDom — Réparation vélo à domicile à Chambéry

Landing page de test de marché pour un service d'entretien et de réparation
de vélos à domicile/bureau, sur abonnement, à Chambéry et dans le Grand
Chambéry.

## Pourquoi ce créneau

- Grand Chambéry investit ~3M€/an sur 10 ans dans son réseau cyclable
  (110+ km d'aménagements existants), ce qui pousse l'usage quotidien du vélo.
- Le service capte cette hausse d'usage avec une offre de proximité :
  pas d'atelier à trouver, pas de file d'attente.
- Modèle par abonnement (3 formules, 9,90€ à 24,90€/mois) : ticket d'entrée
  faible, revenu récurrent, bon fit pour du SEO local et du Google Ads
  ("réparation vélo à domicile Chambéry", "entretien vélo abonnement").

## Structure du projet

```
index.html                          Page principale (hero, formules, zone, FAQ, formulaire de devis)
mentions-legales.html                Mentions légales (LCEN)
politique-de-confidentialite.html    Politique de confidentialité (RGPD)
politique-de-cookies.html            Politique de cookies
cgv.html                              Conditions générales de vente
css/style.css                        Styles (thème clair/sombre automatique, responsive)
js/main.js                           Menu mobile, gestion du formulaire de devis
js/cookie-consent.js                 Bandeau de consentement cookies
assets/                               Logo, icône de marque, favicons générés
vercel.json                          En-têtes de sécurité (CSP, HSTS, etc.)
LICENSE                              Tous droits réservés (projet commercial privé)
```

Site 100% statique, sans dépendance ni build — déployable tel quel sur
GitHub Pages, Vercel, Netlify, etc.

## Déploiement

Déployé en continu sur Vercel (projet `velodom-chambery-prod`), relié à ce
dépôt : chaque push sur `main` déclenche automatiquement un nouveau build
et un nouveau déploiement de production.

⚠️ Les pages légales utilisent l'identité de l'auto-entreprise existante de
l'éditeur (Johan Simonneau, SIRET 879 545 564 00020) — à faire relire par un
professionnel du droit avant toute mise en ligne commerciale ou campagne
publicitaire. Il manque encore un numéro de téléphone de contact public.

## Voir le site en local

```
python3 -m http.server 8080
```

puis ouvrir http://localhost:8080

## Prochaines étapes (validation de la demande)

1. Brancher le formulaire de devis à un vrai destinataire (Formspree,
   Netlify Forms, ou une adresse email) — actuellement il affiche juste
   un message de confirmation côté client.
2. Déployer la page (Vercel/Netlify/GitHub Pages) et pointer un nom de
   domaine simple (ex. `velodom-chambery.fr`).
3. Lancer une petite campagne Google Ads locale (rayon Chambéry + communes
   limitrophes) sur des mots-clés à forte intention pour mesurer le coût
   par lead avant d'investir dans un atelier mobile et du stock.
4. Ajuster les formules et les prix en fonction des retours des premiers
   leads/appels.
