**IsiFlix**
Objectif du projet : reproduire **Netflix** version *Isitech*

Utilisation de **React** + **TypeScript**. Hebergé par **Heroku**
Déploiement automatique après chaque push sur la branche **main**, accessible sur [Heroku](https://isiflix.herokuapp.com/)

**Gestion Git :**
Utilisation de **branches** pour chaque utilisateur avec **Pull Request** pour la review de code. Une [github action](../blob/main/.github/workflows/testing.yml) vérifie que le projet peut être compilé et lance la batterie de tests d'intégration pour chaque PR.

Librairies utilisées :
**React-Router-Dom**