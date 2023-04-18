
from pymongo import MongoClient
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True, max_age=3600)

@app.route('/api/data', methods=['GET'])
def get_data():
    # Se connecter à MongoDB

    wat_lev = request.args.get('watlev')
    feature_type = request.args.get('feature_type')
    quasou = request.args.get('quasou')
    client = MongoClient('localhost', 27017)
    db = client['local']

    # Exécuter la requête et récupérer les résultats
    collection = db['dataSet']
    filterList = []
    if wat_lev != None:
        wat_lev = wat_lev.replace('_',' ')
        print(wat_lev)
        filterList.append({"watlev":wat_lev})
    if quasou != None:
        quasou = quasou.replace('_',' ')
        print(quasou)
        filterList.append({"quasou": quasou})
    if feature_type != None:
        if feature_type=="subdangerous":
            feature_type = "Wrecks - Submerged, dangerous"
        if feature_type=="subnondangerous":
            feature_type = "Wrecks - Submerged, nondangerous"
        if feature_type=="visible":
            feature_type = "Wrecks - Visible"
        if feature_type=="distribute":
            feature_type = "distributed remains of wreck"
        filterList.append({"feature_type": feature_type})

    if len(filterList)<=0:
        results = collection.find({})
    else:
        results = collection.find({"$and":filterList})

    # Convertir les résultats en JSON et les renvoyer à Angular
    json_results = []
    for result in results:
        json_results.append({
            'latdec': result['latdec'],
            'londec': result['londec'],
            'watlev':result['watlev'],
            # ajouter les autres champs si nécessaire
        })
    return jsonify(json_results)

if __name__ == '__main__':
    app.run(debug=True)
