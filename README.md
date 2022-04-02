**IsiFlix**
Objectif du projet : reproduire **Netflix** version *Isitech*

Utilisation de **React** + **TypeScript**. Hebergé par **Heroku**
Déploiement automatique après chaque push sur la branche **main**, accessible sur [Heroku](https://isiflix.herokuapp.com/)

**Gestion Git :**
Utilisation de **branches** pour chaque utilisateur avec **Pull Request** pour la review de code. Une [github action](../main/.github/workflows/testing.yml) vérifie que le projet peut être compilé et lance la batterie de tests d'intégration pour chaque PR. Une seconde [github action](../main/.github/workflows/main.yml) se charge de déployer sur Heroku l'application une fois buildée, à chaque push sur la branche **main**.

Librairies utilisées :
- **React-Router-Dom**
- **Axios**