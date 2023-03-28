# Projet No SQL 
Projet de NoSQL avec Lucas Dulin à Ynov School Toulouse


## Sommaire

- Choix du dataset
  - Sa structure de donnée / Champs important / Collection(s)
- Choix de la base de donnée




## Choix du dataset

- On a choisis le dataset geospatial (shipwrecks.json)

### Structure de donnée

- _id : string
- recrd : string
- vesslItems : string
- feature_type : string
- chart : string
- latdec : double
- londec : double
- gp_quality : string
- depth : string
- sounding_type : string
- history : string
- quasou : string
- watlev : string
- cooordinates : tableau[double,double]

### Donnée importante

- La donnée la plus importantes est l'id car elle joue le rôle de clé primaire, elle permet de distinguer chaque documents.
- D'autres champs pouvant être important pour le document sont le feature_type qui définit le type, ainsi que les coordonnées qui permettent de savoir la position exacte de cet objet.
