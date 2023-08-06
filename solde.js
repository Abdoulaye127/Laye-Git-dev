let compte = {
    nom: "Laye DIOP",
    solde: 10000,
    historique: [],
    deposer: function(montant){
        this.solde += montant;
        this.historique.push("Dépôt de " + montant);
    },
    retirer: function(montant){
        if(this.solde >= montant){
            this.solde -= montant;
            this.historique.push("Retrait de " + montant);
        } else {
            console.log("Solde insuffisant");
        }
    },
    afficherHistorique: function(){
        for(let i = 0; i < this.historique.length; i++){
            console.log(this.historique[i]);
        }
    }
};
compte.deposer(500);
compte.retirer(20000);
compte.afficherHistorique();