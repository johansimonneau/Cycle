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
index.html      Page principale (hero, formules, zone, FAQ, formulaire de devis)
css/style.css   Styles (thème clair/sombre automatique, responsive)
js/main.js      Menu mobile, gestion du formulaire de devis
```

Site 100% statique, sans dépendance ni build — déployable tel quel sur
GitHub Pages, Vercel, Netlify, etc.

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
