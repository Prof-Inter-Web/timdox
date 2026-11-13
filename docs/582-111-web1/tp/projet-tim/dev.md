# Développement

## Fichiers

- [ ] Mettre en place la structure de projet suivante :

```text
📁 nomdefamille-prenom-tp2
│
├─ 📁 site
│  │
│  ├─ 📁 assets
│  │  ├─ 📁 img
│  │  ├─ 📁 video (au besoin)
│  │  └─ 📁 audio (au besoin)
│  │
│  ├─ 📁 src
│  │  └─ 📁 css
│  │     └─ 📄 styles.css
│  │
│  ├─ 📄 index.html (page d’accueil)
│  ├─ 📄 [...].html (scène 1)
│  ├─ 📄 [...].html (scène 2)
│  ├─ 📄 [...].html (scène 3)
│  ├─ 📄 [...].html (scène 4)
│  ├─ 📄 [...].html (scène 5)
│  └─ 📄 [...].html (page victoire)
│
└─ 📄 conception.docx
```

## Design et programmation

Au cours de cette étape, vous devrez développer les styles CSS en même temps que la structure en HTML. Allez-y une étape à la fois.

- [ ] Programmer en HTML/CSS la première énigme
  - Structure HTML
  - Styles CSS
  - Contenus
- [ ] Programmer en HTML/CSS les autres énigmes avec le même modèle que la première
- [ ] Programmer en HTML/CSS l'accueil avec un lien qui pointe vers la première énigme
- [ ] Programmer en HTML/CSS la page victoire (devrait être la réponse de la dernière énigme)

## Finaliser

- [ ] Indenter correctement tous les fichiers HTML et CSS avec l'extension Prettier
- [ ] Tester toutes les énigmes pour s'assurer que les liens fonctionnent

### 1. Envoyer le projet sur GitHub depuis VS Code

Vous pouvez publier vos fichiers directement via l'interface graphique intégrée à VS Code.

* **Ouvrir le panneau Git.** Cliquez sur l'icône de contrôle de code source dans la barre latérale gauche (raccourci `Ctrl + Shift + G`).
* **Initialiser le dépôt.** Cliquez sur le bouton bleu **Initialiser le dépôt** (*Initialize Repository*).
* **Préparer et valider les fichiers.** Saisissez un message dans la zone de texte en haut (par exemple `Version initiale`), puis cliquez sur **Valider** (*Commit*) et acceptez de tout indexer (*Stage All Changes*).
* **Publier sur GitHub.** Cliquez sur **Publier la branche** (*Publish Branch*). Autorisez la connexion à votre compte GitHub si demandé, choisissez un nom de dépôt et sélectionnez **Publish to GitHub public repository** (un dépôt public est requis pour l'offre gratuite de GitHub Pages).

### 2. Activer GitHub Pages

Une fois vos fichiers envoyés en ligne, il reste à activer la mise en ligne du site.

* **Ouvrir les paramètres du dépôt.** Rendez-vous sur la page de votre nouveau dépôt sur GitHub et cliquez sur l'onglet **Settings** en haut.
* **Accéder à la section Pages.** Dans le menu latéral gauche, cliquez sur **Pages**.
* **Choisir la branche source.** Sous la section *Build and deployment* > *Source*, laissez **Deploy from a branch**. Sous *Branch*, sélectionnez **main** (et le dossier `/ (root)`), puis cliquez sur **Save**.
* **Récupérer le lien du site.** Patientez une à deux minutes puis actualisez la page. L'adresse publique de votre site (au format `https://github.io`) apparaîtra en haut de cette section.

### 3. Mettre à jour le site par la suite

Chaque modification future suivra ce cycle rapide directement dans VS Code :

* **Enregistrer les modifications.** Sauvegardez vos fichiers modifiés dans l'éditeur (`Ctrl + S`).
* **Valider et synchroniser.** Retournez dans l'onglet Contrôle de code source, entrez un message de mise à jour, cliquez sur **Valider** (*Commit*), puis cliquez sur **Synchroniser les modifications** (*Sync Changes*) pour mettre à jour le site en ligne automatiquement.

