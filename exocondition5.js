let nombre1;
do{
    nombre1 = parseInt(prompt("Entrez un nombre entier"));
} while(isNaN(nombre1));
console.log("Nombre saisi:", nombre1);