# Projet No SQL 
Projet de NoSQL avec Lucas Dulin à Ynov School Toulouse


## Sommaire

- Choix du dataset
  - Sa structure de donnée / Champs important / Collection(s)
- Choix de la base de donnée
- Création de la collection
- Requêtes simple
- Supression
- Recherche avancées




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


## Choix de la BDD

- On a choisi mongodb.

## Création de la collection

- Comment créer une collection ??

```
db.createCollection("dataSet")

```

- Comment insérer le dataset ?

```

mongoimport --db test --collection dataSet --file shipwrecks.json

```

- Comment afficher la liste des documents ?

```

dataSet.find()

```


## Requêtes simple

- Comment mettre a jour un document ?

### Requête dans un document
```
db.dataSet.find({"feature_type":"Wrecks - Visible"})
```

### Retourne: 

```
[
  {
    _id: ObjectId("578f6fa2df35c7fbdbaed8c4"),
    recrd: '',
    vesslterms: '',
    feature_type: 'Wrecks - Visible',
    chart: 'US,U1,graph,DNC H1409860',
    latdec: 9.3547792,
    londec: -79.9081268,
    gp_quality: '',
    depth: '',
    sounding_type: '',
    history: '',
    quasou: '',
    watlev: 'always dry',
    coordinates: [ -79.9081268, 9.3547792 ]
  },
  {
    _id: ObjectId("578f6fa2df35c7fbdbaed8c5"),
    recrd: '',
    vesslterms: '',
    feature_type: 'Wrecks - Visible',
    chart: 'US,U1,graph,DNC H1409860',
    latdec: 9.3340302,
    londec: -79.9357223,
    gp_quality: '',
    depth: '',
    sounding_type: '',
    history: '',
    quasou: '',
    watlev: 'always dry',
    coordinates: [ -79.9357223, 9.3340302 ]
  },
  {
    _id: ObjectId("578f6fa2df35c7fbdbaed8c7"),
    recrd: '',
    vesslterms: '',
    feature_type: 'Wrecks - Visible',
    chart: 'US,U1,graph,DNC H1409860',
    latdec: 9.3390503,
    londec: -79.9137115,
    gp_quality: '',
    depth: '',
    sounding_type: '',
    history: '',
    quasou: '',
    watlev: 'always dry',
    coordinates: [ -79.9137115, 9.3390503 ]
  },
  {
    _id: ObjectId("578f6fa2df35c7fbdbaed8ca"),
    recrd: '',
    vesslterms: '',
    feature_type: 'Wrecks - Visible',
    chart: 'US,US,reprt,L-1083/14',
    latdec: 9.3641392,
    londec: -79.940556,
    gp_quality: '',
    depth: '',
    sounding_type: '',
    history: '',
    quasou: '',
    watlev: 'always dry',
    coordinates: [ -79.940556, 9.3641392 ]
  },
  {
    _id: ObjectId("578f6fa2df35c7fbdbaed8cd"),
    recrd: '',
    vesslterms: '',
    feature_type: 'Wrecks - Visible',
    chart: 'US,US,reprt,L-1-2015',
    latdec: 9.3601389,
    londec: -79.9081389,
    gp_quality: '',
    depth: '',
    sounding_type: '',
    history: '',
    quasou: '',
    watlev: 'always dry',
    coordinates: [ -79.9081389, 9.3601389 ]
  },
  {
    _id: ObjectId("578f6fa2df35c7fbdbaed8ce"),
    recrd: '',
    vesslterms: '',
    feature_type: 'Wrecks - Visible',
    chart: 'US,U1,graph,DNC H1409860',
    latdec: 9.3729954,
    londec: -79.9469681,
    gp_quality: '',
    depth: '',
    sounding_type: '',
    history: '',
    quasou: '',
    watlev: 'always dry',
    coordinates: [ -79.9469681, 9.3729954 ]
  },
  {
    _id: ObjectId("578f6fa2df35c7fbdbaed8d0"),
    recrd: '',
    vesslterms: '',
    feature_type: 'Wrecks - Visible',
    chart: 'US,US,reprt,L-1-2015',
    latdec: 9.3549722,
    londec: -79.9084167,
    gp_quality: '',
    depth: '',
    sounding_type: '',
    history: '',
    quasou: '',
    watlev: 'always dry',
    coordinates: [ -79.9084167, 9.3549722 ]
  },
  {
    _id: ObjectId("578f6fa2df35c7fbdbaed8d6"),
    recrd: '',
    vesslterms: '',
    feature_type: 'Wrecks - Visible',
    chart: 'US,US,reprt,L-1218/15',
    latdec: 9.5690002,
    londec: -79.0378342,
    gp_quality: '',
    depth: '',
    sounding_type: '',
    history: '',
    quasou: '',
    watlev: 'always dry',
    coordinates: [ -79.0378342, 9.5690002 ]
  },
  {
    _id: ObjectId("578f6fa2df35c7fbdbaed8d7"),
    recrd: '',
    vesslterms: '',
    feature_type: 'Wrecks - Visible',
    chart: 'US,US,reprt,L-1218/15',
    latdec: 9.5574865,
    londec: -78.8790131,
    gp_quality: '',
    depth: '',
    sounding_type: '',
    history: '',
    quasou: '',
    watlev: 'always dry',
    coordinates: [ -78.8790131, 9.5574865 ]
  },
  {
    _id: ObjectId("578f6fa2df35c7fbdbaed8d8"),
    recrd: '',
    vesslterms: '',
    feature_type: 'Wrecks - Visible',
    chart: 'US,US,reprt,L-1218/15',
    latdec: 9.5544777,
    londec: -78.943573,
    gp_quality: '',
    depth: '',
    sounding_type: '',
    history: '',
    quasou: '',
    watlev: 'always dry',
    coordinates: [ -78.943573, 9.5544777 ]
  },
  {
    _id: ObjectId("578f6fa2df35c7fbdbaed8d9"),
    recrd: '',
    vesslterms: '',
    feature_type: 'Wrecks - Visible',
    chart: 'US,US,reprt,L-1453/14',
    latdec: 18.2312794,
    londec: -72.5419922,
    gp_quality: '',
    depth: '',
    sounding_type: '',
    history: '',
    quasou: '',
    watlev: 'always dry',
    coordinates: [ -72.5419922, 18.2312794 ]
  },
  {
    _id: ObjectId("578f6fa2df35c7fbdbaed8da"),
    recrd: '',
    vesslterms: '',
    feature_type: 'Wrecks - Visible',
    chart: 'US,US,reprt,L-1453/14',
    latdec: 18.2282791,
    londec: -72.5341797,
    gp_quality: '',
    depth: '',
    sounding_type: '',
    history: '',
    quasou: '',
    watlev: 'always dry',
    coordinates: [ -72.5341797, 18.2282791 ]
  },
  {
    _id: ObjectId("578f6fa2df35c7fbdbaed8db"),
    recrd: '',
    vesslterms: '',
    feature_type: 'Wrecks - Visible',
    chart: 'US,US,reprt,L-1453/14',
    latdec: 18.2261219,
    londec: -72.5329208,
    gp_quality: '',
    depth: '',
    sounding_type: '',
    history: '',
    quasou: '',
    watlev: 'always dry',
    coordinates: [ -72.5329208, 18.2261219 ]
  },
  {
    _id: ObjectId("578f6fa2df35c7fbdbaed8dc"),
    recrd: '',
    vesslterms: '',
    feature_type: 'Wrecks - Visible',
    chart: 'US,US,reprt,L-246-2015',
    latdec: 18.1898632,
    londec: -73.7465439,
    gp_quality: '',
    depth: '',
    sounding_type: '',
    history: '',
    quasou: '',
    watlev: 'always dry',
    coordinates: [ -73.7465439, 18.1898632 ]
  },
  {
    _id: ObjectId("578f6fa2df35c7fbdbaed8dd"),
    recrd: '',
    vesslterms: '',
    feature_type: 'Wrecks - Visible',
    chart: 'US,US,reprt,L-246-2015',
    latdec: 18.1843109,
    londec: -73.7449264,
    gp_quality: '',
    depth: '',
    sounding_type: '',
    history: '',
    quasou: '',
    watlev: 'always dry',
    coordinates: [ -73.7449264, 18.1843109 ]
  },
  {
    _id: ObjectId("578f6fa2df35c7fbdbaed8df"),
    recrd: '',
    vesslterms: '',
    feature_type: 'Wrecks - Visible',
    chart: 'US,US,reprt,L-1453/14',
    latdec: 18.5343819,
    londec: -72.3792343,
    gp_quality: '',
    depth: '',
    sounding_type: '',
    history: '4 wrecks',
    quasou: '',
    watlev: 'always dry',
    coordinates: [ -72.3792343, 18.5343819 ]
  },
  {
    _id: ObjectId("578f6fa2df35c7fbdbaed8e0"),
    recrd: '',
    vesslterms: '',
    feature_type: 'Wrecks - Visible',
    chart: 'US,US,reprt,L-1453/14',
    latdec: 18.5800037,
    londec: -72.3866577,
    gp_quality: '',
    depth: '',
    sounding_type: '',
    history: '',
    quasou: '',
    watlev: 'always dry',
    coordinates: [ -72.3866577, 18.5800037 ]
  },
  {
    _id: ObjectId("578f6fa2df35c7fbdbaed8e2"),
    recrd: '',
    vesslterms: '',
    feature_type: 'Wrecks - Visible',
    chart: 'US,US,reprt,L-1453/14',
    latdec: 18.5600472,
    londec: -72.3600616,
    gp_quality: '',
    depth: '',
    sounding_type: '',
    history: '2 wrecks',
    quasou: '',
    watlev: 'always dry',
    coordinates: [ -72.3600616, 18.5600472 ]
  },
  {
    _id: ObjectId("578f6fa2df35c7fbdbaed8e4"),
    recrd: '',
    vesslterms: '',
    feature_type: 'Wrecks - Visible',
    chart: 'US,US,reprt,L-1453/14',
    latdec: 18.5439014,
    londec: -72.3890228,
    gp_quality: '',
    depth: '',
    sounding_type: '',
    history: '',
    quasou: '',
    watlev: 'always dry',
    coordinates: [ -72.3890228, 18.5439014 ]
  },
  {
    _id: ObjectId("578f6fa2df35c7fbdbaed8e5"),
    recrd: '',
    vesslterms: '',
    feature_type: 'Wrecks - Visible',
    chart: 'US,US,reprt,L-1453/14',
    latdec: 18.5443325,
    londec: -72.3885879,
    gp_quality: '',
    depth: '',
    sounding_type: '',
    history: '',
    quasou: '',
    watlev: 'always dry',
    coordinates: [ -72.3885879, 18.5443325 ]
  }
]
```

## Supression

### Supression d'un document

```
db.dataSet.deleteOne({"watlev":"always dry"})
```

### Supression de plusieurs documents

```
db.dataSet.deleteMany({"watlev":"always dry"})

```

# Recherche avancée

## Exemple d'utilisation des requêtes avec un projet angular

- On affiche les points de tout les vaisseaux sur une carte.












