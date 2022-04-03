# **IsiFlix**

Objectif du projet : reproduire **Netflix** version *Isitech*

Utilisation de **React** + **TypeScript**. Hebergé par **Heroku**.

Déploiement automatique après chaque push sur la branche **main**, accessible sur [Heroku](https://isiflix.herokuapp.com/).

Librairies utilisées :
- **React-Router-Dom**
- **Axios**

### **Gestion Git**
Utilisation de **branches** pour chaque utilisateur avec **Pull Request** pour la review de code. Une [github action](../main/.github/workflows/testing.yml) vérifie que le projet peut être compilé et lance la batterie de tests d'intégration pour chaque PR. Une seconde [github action](../main/.github/workflows/main.yml) se charge de déployer sur Heroku l'application une fois buildée, à chaque push sur la branche **main**.

### **Démarrer une version locale** 
Lancement d'une version locale avec ```npm start```.

### **Architecture**

#### **Actions / Reducers / Routes**
Permet la mise en place d'un système de store natif.

#### **Services**
- **MovieService** : Permet de récupérer les données concernant les films & séries, via l'API https://api.themoviedb.org/3/. 
- **UserService** : Service pour récupérer les utilisateurs. Par simplicité, on mock ça en récupérant une liste statique d'utilisateurs.

#### **Models**
Contient les modèles de données utilisés, les principaux étant **Movie** (contient les données d'un film et de ses détails) ou **User** (informations basiques d'un utilisateur).

#### **Axios**
Configuration utilisée sur les requêtes interceptées par Axios, ici utilisé pour la mise en place des headers http.

#### **Components**
Composants réutilisables, dont le **header** et **MovieRow** (composant graphique pour les lignes affichant les films). Contient leur tsx et css.

#### **Pages**
Vue par page, contient les fichiers tsx et css. La page **Browse** est celle que l'on voit une fois connecté, **Login** est celle servant à se connecter, **Details** lorsqu'on affiche le détail d'un film et **Error** étant la page 404 par défaut.

#### **Routes**
Configuration des routes, renvoie sur la page **Error** lorsqu'une url est accédée mais qu'elle ne fait pas partie des routes configurées, et renvoie sur **Login** lorsque le store ne contient pas d'utilisateur authentifié, geré par [authenticatedRoute](../main/src/routes/authenticatedRoute.js).