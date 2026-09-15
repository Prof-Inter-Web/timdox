# LDVELH | Développement

Créer une petite histoire interactive à partir les de la phase de planification. Chaque page HTML correspond à une case de votre schéma draw.io.

## Exemple

Une scène ressemblera à ceci :

![](./exemple-scene.png){data-zoom-image}

[Exemple de projet](https://web1.tim-momo.com/ldvelh/histoires/exemple/)



## Consignes

- [ ] Créez un dossier nommé tp1-XXXXX (remplacez XXXXX par le code associé à votre nom).
- [ ] Placez dans ce dossier :
  - [ ] un fichier `index.html` pour votre première page
  - [ ] les autres fichiers `.html` de chaque scène de votre histoire
  - [ ] un dossier assets contenant vos images et fichiers audios compartimenté dans des sous-dossiers.
- [ ] Dans la portion `<head>` de **tous** vos fichiers HTML, vous devez ajouter la balise suivante en remplaçant "John Doe" par votre nom complet :
    ```html
    <meta name="author" content="John Doe">
    ```
- [ ] Structure minimale d’une page :
  - [ ] Un entête avec un titre 1
  - [ ] Une balise main dans laquelle on retrouve une image (1200px x 700px) et le texte de la scène
  - [ ] Un pied de page contenant une balise de navigation dans laquelle se trouve une liste non ordonnée de liens vers les scènes suivantes.

- [ ] Une fois la structure minimale faite pour une page, vous pouvez utiliser la même pour les autres pages HTML.

- [ ] Ajoutez au moins deux balises `<audio>` en autoplay dans des scènes différentes, en cohérence avec l’histoire (ex. bruit d’épée). Aucune de ces balises ne doit être sur la première scène.
- [ ] Ajoutez obligatoirement des balises `<em>` pour mettre les mots importants de l'histoire en emphase
- [ ] Tous les chemins doivent être relatifs
- [ ] Tous les fichiers du projet doivent respecter la notation kebab-case
- [ ] Toutes les images du projet doivent avoir un texte alternatif
- [ ] La dernière scène doit contenir un lien vers l’index.html de l’étudiant suivant (Suite). Pour ce faire, il faudra remonter d'un niveau relatif. Voici un exemple :
    ```html title="Exemple de lien final"
    <a href="../tp1-12345/index.html">Suite ...</a>
    ```

## Remise

Remettez un fichier `.zip` de votre dossier. Exemple : `tp1-XXXXX.zip`

Remise 15-16 octobre à 23:59



## Grille d’évaluation

| Critère                                                           | Points |
|-------------------------------------------------------------------|--------|
| Usage des balises sémantiques (`header`, `main`, `footer`, `nav`) | 1      |
| Code bien indenté et lisible                                      | 1      |
| Code HTML valide                                                  | 1      |
| Navigation fonctionnelle avec liens relatifs                      | 1      |
| Lien final fonctionnel vers l’étudiant suivant                    | 1      |
| Chaque page contient une image                                    | 1      |
| Images au format 1200px x 700px                                   | 1      |
| Texte alternatif sur toutes les images                            | 1      |
| Présence d’au moins 2 pistes audio pertinentes                    | 1      |
| Audio en autoplay (sauf sur la première scène)                    | 1      |
| Emploi de la balise d’emphase                                     | 1      |
| Présence d’un titre 1 sur chaque page                             | 1      |
| Liste à puces non ordonnée pour les choix                         | 1      |
| Texte de l’histoire rédigé dans des paragraphes                   | 1      |
| Balise `<meta name="author">` dans chaque fichier                 | 1      |
| Fichiers nommés en kebab-case                                     | 1      |
| Structure de fichiers avec le dossier `assets/`                   | 1      |
| Créativité de l’histoire                                          | 1      |
| Cohérence narrative de l’histoire                                 | 1      |
| Respect général des consignes                                     | 1      |
| Total                                                             | /20    |

**Les points de l'évaluation équivalent à 15 points sur 20 points du tp1**
