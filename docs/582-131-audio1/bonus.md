# REAComp 
(Compressor dans REAPER)

![](https://media.audiorecordingathome.com/00012483/reaper-reacomp-compressor.jpg){data-zoom-image}<small>Source: audiorecordingathome.com</small>

## Objectif

Apprendre à utiliser **ReaComp** pour :

- contrôler le volume d’un son
- uniformiser une voix
- éviter les pics trop forts
- rendre un mix plus professionnel


## 1. Qu’est-ce qu’un compresseur ?

Un compresseur sert à **réduire la différence entre les sons forts et les sons faibles**.

👉 En pratique :

- les sons trop forts deviennent moins forts
- les sons faibles restent presque identiques
- le son devient plus stable



### Exemple simple

Sans compression :

- voix : parfois trop forte / parfois trop faible

Avec compression :

- voix : volume plus constant



## 2. Ajouter ReaComp dans REAPER

### Étapes :

1. Sélectionner une piste audio
2. Cliquer sur **FX**
3. Ajouter :
   ```
   ReaComp (Cockos)
   ```



## 3. Interface de ReaComp

Voici les paramètres importants :



### Threshold (seuil)

👉 Niveau à partir duquel la compression commence

- plus bas = compression plus forte
- plus haut = compression plus légère

Exemple :

- -20 dB = compression active souvent
- -10 dB = compression plus douce



### Ratio

👉 Intensité de la compression

| Ratio | Effet |
|------|------|
| 2:1 | léger |
| 4:1 | standard voix |
| 8:1 | fort |
| 10:1+ | limite du “limiter” |



### Attack

👉 Vitesse de réaction du compresseur

- rapide = coupe les pics immédiatement
- lente = laisse passer l’attaque naturelle

Voix :
- 5 à 30 ms recommandé



### Release

👉 Temps avant que la compression s’arrête

- court = son plus nerveux
- long = son plus naturel

Voix :
- 50 à 150 ms



### Knee

👉 Douceur de la compression

- soft knee = compression progressive
- hard knee = compression brutale

Pour la voix → soft knee recommandé


### Gain Reduction (GR)

👉 Indique combien le son est compressé

- 1–3 dB → léger
- 3–6 dB → normal
- 6–10 dB → fort


## 4. Réglage de base pour une voix

### Preset simple (départ)

- Threshold : -18 dB
- Ratio : 3:1 ou 4:1
- Attack : 10 ms
- Release : 80 ms
- Knee : soft


### Objectif

Obtenir :

- une voix stable
- naturelle
- sans écrasement


## 5. Méthode de travail (très important)

### Étape 1 : écouter sans compression

Toujours commencer par le son brut


### Étape 2 : activer ReaComp

Observer :

- réduction de gain
- stabilité du volume


### Étape 3 : ajuster le threshold

👉 jusqu’à voir 3 à 6 dB de réduction


### Étape 4 : vérifier le résultat

Comparer :

- bypass ON / OFF


# 6. Erreurs fréquentes

❌ Trop de compression (voix écrasée)  
❌ Attack trop rapide (perte de naturel)  
❌ Release trop long (pompage)  
❌ Compression sans écouter le mix  


## 7. Astuce pro

👉 Toujours utiliser le compresseur pour :

- contrôler
- pas détruire

👉 Et toujours écouter :

- en contexte (avec le reste du mix)
- pas seulement en solo


## Résumé

ReaComp sert à :

- stabiliser une voix
- contrôler les dynamiques
- améliorer la clarté
- rendre un mix plus professionnel

!!! warning "Règle importante"

    Une bonne compression ne s’entend pas… elle s’impose naturellement.

<br>

# ReaGate 

![](https://www.admiralbumblebee.com/assets/Reaper/DrumFreq/SnareGateSettings.png){data-zoom-image}<small>Source: awww.admiralbumblebee.com</small>

## Objectif

Apprendre à utiliser **ReaGate** pour :

- réduire le bruit de fond
- nettoyer une piste audio
- couper les sons indésirables entre les phrases
- améliorer la clarté d’une voix ou d’un enregistrement


## 1. Qu’est-ce qu’un gate ?

Un **gate (porte de bruit)** agit comme un interrupteur automatique :

👉 Il laisse passer le son seulement quand il est assez fort  
👉 Il coupe ou réduit le son quand il est trop faible


## Exemple simple

Sans gate :

- on entend la voix + bruit de fond constant

Avec gate :

- on entend la voix
- le bruit de fond disparaît entre les phrases


### 2. Ajouter ReaGate dans REAPER

### Étapes :

1. Sélectionner une piste audio
2. Cliquer sur **FX**
3. Ajouter :
   ```
   ReaGate (Cockos)
   ```


## 3. Interface de ReaGate

Voici les paramètres essentiels :



## 🎚️ Threshold (seuil)

👉 Niveau à partir duquel le gate s’ouvre

- si le son est **au-dessus** → le son passe
- si le son est **en dessous** → le son est coupé

Exemple :

- -40 dB → très sensible (laisse passer beaucoup)
- -25 dB → plus strict (coupe plus souvent)


## Attack

👉 Vitesse d’ouverture du gate

- rapide = son passe immédiatement
- lent = début du son peut être coupé

Voix :

- 1 à 10 ms recommandé


## Hold

👉 Temps minimum pendant lequel le gate reste ouvert

- évite que le gate “clignote”
- stabilise les phrases

Voix :

- 50 à 150 ms


## Release

👉 Temps de fermeture du gate

- court = coupe rapidement
- long = fermeture plus naturelle

Voix :
- 80 à 200 ms


## Range

👉 Quantité de réduction du son

- -∞ dB = silence total
- -10 à -20 dB = réduction douce

Recommandation :

- éviter le silence total pour les voix naturelles


## 4. Réglage de base pour une voix

### Preset simple (départ)

- Threshold : -35 dB
- Attack : 5 ms
- Hold : 100 ms
- Release : 120 ms
- Range : -∞ ou -15 dB


## Objectif

- supprimer le bruit entre les phrases
- garder une voix naturelle
- éviter les coupures abruptes


## 5. Méthode de travail

### Étape 1 : écouter sans gate

Toujours commencer avec le son brut


### Étape 2 : activer ReaGate

Observer :

- bruit supprimé ?
- phrases intactes ?
- coupures naturelles ?



### Étape 3 : ajuster le threshold

👉 Le plus important

- trop bas → rien ne se coupe
- trop haut → voix coupée


### Étape 4 : ajuster release et hold

👉 Pour éviter :

- son haché
- ouverture trop brusque



### Étape 5 : tester en contexte

Toujours écouter :

- avec musique
- avec ambiance
- pas seulement en solo



## 6. Erreurs fréquentes

❌ Gate trop agressif → voix coupée  
❌ Threshold mal réglé → phrases mangées  
❌ Release trop court → effet robotique  
❌ Utiliser un gate pour corriger un mauvais enregistrement  



## 7. Astuce pro

👉 Un gate n’améliore pas un son, il nettoie un son

👉 Toujours privilégier :

- bon enregistrement
- bon placement micro
- bon gain staging


# 8. ReaGate vs Compression

| Outil | Rôle |
|------|------|
| ReaComp | réduit les différences de volume |
| ReaGate | coupe les sons faibles |


# Résumé

ReaGate sert à :

- nettoyer les silences
- réduire le bruit de fond
- clarifier une piste
- améliorer l’intelligibilité

!!! warning "Règle importante"

    Un bon gate est invisible… il nettoie sans s’entendre

