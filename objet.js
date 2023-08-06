let personne = {
    nom: "Laye",
    age: 20,
    presentation: function() {
    console.log(`Bonjour, je m'appelle ${this.nom}`);
       }
   };
   console.log(personne.nom); // Affiche "John"
   personne.presentation(); // Affiche "Bonjour, je m'appelle John"