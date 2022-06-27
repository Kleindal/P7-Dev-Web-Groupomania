<p align="center">
  <a href="#">
    <img src="https://user.oc-static.com/upload/2022/05/25/1653474647318_icon-left-font.png" width="auto" height="192px"/>
  </a>
</p>

<h1 align="center">
  Web API: Créez un réseau social d’entreprise
</h1>

<p align="center">
  Réalisation d'une <strong>Application de publication de postes</strong> avec des fonctions basiques.
  <br />
  <br />
</p>

## 👩‍💻 Explication du projet

L'objectif de ce projet est de créer une API reprennant les concepts de base d'une application de publication de posts (type Workplace, Reddit, 9gag), pour l'entreprise Groupomania. Les utilisateurs pourront publier leurs propres posts pouvant contenir à la fois du texte et des images.
Les posts pourront être modifiés, supprimés et likés. 

Ce projet a été réalisé en :
   - [NodeJS](https://nodejs.org/en/about/releases/)
   - [Express](https://expressjs.com/fr/starter/installing.html)


## 🚀 Requirement
- npm@8.6.0
- node@v16.13.1
- nodemon@2.0.15
- Une base de donnée mysql8.0
    - L'utilisation de MySQLWorkbench est recommandé pour manipuler la base de donnée MySQL

### 🐳 Installation
Une fois l'enrivonnement installé :
```
git clone https://github.com/Kleindal/P7-Dev-Web-Groupomania.git
cd P7-Dev-Web-Groupomania/backend
npm install
```

Mise en place de la base de données:
Éxécuter dans votre base de données le sql présent dans le fichier `./bd-config/db.models.sql`

Fichier de configuration de la base de données :  
`./bd-config/database.js`

### 🚀 Démarrer l'application
Démarrer le server backend
```ssh
npm run dev
```
Le serveur sera accessible sur l'url http://localhost:3006/  
Les identifiants de l'administrateur sont :
- email : admin@groupomania.fr
- password : admin


