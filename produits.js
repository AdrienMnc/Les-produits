/**
 * 
 * @param {string} nom 
 * @param {string} description 
 * @param {number} prixHT 
 * @param {number} TVA 
 * @param {number} stock 
 * @param {number} ageRestriction 
 * @param {boolean} etatVente 
 * @param {number} remise 
 */


function Produits(nom, description, prixHT, stock, ageRestriction, etatVente, remise) {
    this.nom = nom;
    this.description = description;
    this.prixHT = prixHT;
    this.TVA = 20;
    this.stock = stock;
    this.ageRestriction = ageRestriction;
    this.etatVente = etatVente;
    this.remise = remise;
}

// Création produits
let produit1 = new Produits("console", "PS5", 500, 5, 12, true);
let produit2 = new Produits("livre", "mangas", 9.99, 0, 18, true, 5);

// Calcule du prix TTC
Produits.prototype.calculPrixTTC = function(){
    montantTVA = (this.prixHT * this.TVA) / 100
    prixTTC = (this.prixHT + montantTVA)
    return prixTTC        
}

//Produit encore dispo oui ou non
Produits.prototype.verifStock = function(){
    if (this.stock >= 1) {
        return "Il vous en reste encore" + " " + this.stock; 
    }else {
        return "Rupture de stock"
    }       
}

// Vérification de l'age
Produits.prototype.verifAge = function(){
    if (this.ageRestriction >= 18) {
        return "Vous pouvez acheter"; 
    }else {
        return "Il faut etre majeur"
    }       
}

// Remise oui ou non
Produits.prototype.remise = function(){
         if (this.remise >= 1) {
            result = (this.prixHT - this.remise);
            return result;
         }
         else {
            return "Pas de remise sur le produit";
         }
}

//description produit
Produits.prototype.desc = function () {
    return `Le produit est vendu au prix de ${this.prixHT} HT soit ${produit2.calculPrixTTC()}.
            Vous devez avoir ${this.ageRestriction} ans pour l'acheter.
            Une remise de ${this.remise} euro est disponible.`
}


console.log(produit2);
// console.log(produit1.calculPrixTTC());
// console.log(produit1.verifStock());
// console.log(produit2.remise());
console.log(produit2.desc());



