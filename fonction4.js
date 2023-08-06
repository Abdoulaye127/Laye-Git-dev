function sommeTab(tab){
    let resultat=0;
    for( let i=0;i<tab.length;i++){

        resultat += tab[i];
    }
    return  resultat;
}

console.log(sommeTab([2,3,4,5,6]));

