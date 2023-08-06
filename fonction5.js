let direBonjour = (nom) => { console.log("Bonjour " + nom) };

​// Fonction normale
function afficherObjet(objet){
    let result = "";
    for(let propriete in objet){
        result += propriete + ": " + objet[propriete] + "\n";
    }
    return result;
}
console.log(afficherObjet({nom: "John", age: 25}));
// nom: John
// age: 25

// Fonction fléchée
// let afficherObjet = objet => Object.entries(objet).map(([cle, valeur]) => `${cle}: ${valeur}`).join("\n");
// console.log(afficherObjet({nom: "John", age: 25}));
// // nom: John
// // age: 25