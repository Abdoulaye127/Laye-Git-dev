let monCompte = {
    nom: "Laye",
    montantNet : 200000,
    history : [],
    depot :   function( argent)  {
        this.montantNet += this.argent;
        this.history.push(argent);
    },
    retrait : function ( argent ) {
    if (this.montantNet>= argent){
        this.montantNet -= this.argent;
        this.history.push(argent)
    }  
    else{
        console.log(" solde insuffisant");
    }
    },
    voirHistorique : function(argent){
        for ( let i = 0; i< this.history.length; i++){
            console.log("voici votre historique de transaction ", this.history[i]);
        }
    }
};
monCompte.depot(20000);
monCompte.retrait(10000);
monCompte.this.voirHistorique();
