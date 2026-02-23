# TimeTravel Agency — Web Application Interactive

## Présentation

TimeTravel Agency est une application web développée dans un cadre académique, visant à concevoir une plateforme immersive intégrant une interaction intelligente.

L’application simule une agence de voyage temporel premium permettant aux utilisateurs de :

- Explorer des destinations historiques via une interface immersive
- Interagir avec un agent conversationnel basé sur l’IA générative
- Obtenir des recommandations personnalisées
- Simuler une planification de voyage

Destinations proposées :

- Paris 1889 — Belle Époque
- Crétacé (-65M) — Monde préhistorique
- Florence 1504 — Renaissance italienne

---

## Architecture & Stack Technique

### Frontend
- **Next.js (React)**
- **Tailwind CSS**

Next.js a été choisi pour sa structure modulaire, son routing intégré et sa facilité de déploiement. Tailwind CSS permet un prototypage rapide et un responsive design maîtrisé.

### IA & Interaction
- Agent conversationnel basé sur un modèle d’IA générative
- Logique de recommandation côté client

### Déploiement
- Vercel ou VPS
- Configuration DNS avec nom de domaine personnalisé

---

## Fonctionnalités

### Interface
- Hero section immersive
- Design dark mode responsive
- Cartes interactives des destinations

### Agent conversationnel
- Widget de chat intégré
- Réponses contextualisées sur destinations et préférences

### Personnalisation & Réservation
- Recommandations simples selon intérêts
- Simulation de sélection de destination et dates

---

## Structure du projet

```
/app
/components
/public
/styles
README.md
package.json
```

Architecture modulaire facilitant maintenabilité et évolutivité.

---

## Installation

### Développement

```bash
npm install
npm run dev
```

### Production

```bash
npm run build
npm start
```

---

## Objectifs pédagogiques

- Concevoir une webapp moderne structurée
- Intégrer une IA conversationnelle
- Déployer en environnement réel
- Appliquer des bonnes pratiques d’architecture

---

## Licence

Projet académique — usage pédagogique non commercial.
