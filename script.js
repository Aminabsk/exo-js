console.log("hello world")
let nomEquipement = "Switch Cisco 2960";
let nombrePorts = 24;
let estActif = true;
let adresseIP = "192.168.1.254";
let debit = 1000.5;

console.log("Nom:" + nomEquipement)
console.log("nombre de port:" + nombrePorts);
console.log("actif:" + estActif);
console.log("adresse IP:" + adresseIP);
console.log("débit:" + debit);

let motDePasse = "Cyber2024!"
let longeur = motDePasse.length

console.log("Mot de passe: " + motDePasse)
console.log("Longeur : "+ longeur + "caractères")

if (longeur < 6) {
     console.log("Sécurité faible")
     console.log("Recommandation : utilisez au moins 6 caractères")
}else if (longeur < 10){
    console.log("Sécurité moyenne")
    console.log("Recommandation : utilisez au moins 10 caractères")
}else {
    console.log("Sécurité forte")
}
let vitesse = 100

if (vitesse === 0){
    console.log("ERROR : pas de connexion")
} else {
    if (vitesse < 10) {
        console.log("Connexion LENTE - Véifier les câbles")
    }else if (vitesse <100){
            console.log("Connexion CORRECTE - Débit standard")
    }else if (vitesse <1000){
            console.log("Connexion Rapide - Bon débit")
    }else if (vitesse >= 1000){
            console.log("Connexion TRES RAPIDE - Fibre optique")
    }
}

console.log("===== Boucle FOR =====")

let decompte = 10

for (let i = 0; decompte > 0;  i++) {
    console.log("Décompte : ", decompte)
    decompte --
}

let ports = [20,80,443,3306,8080];
console.log(ports[2])

for (let i = 0; i < ports.length; i++) {
    console.log("Port :" + ports[i])
}

let server = ["8.8.8.8", "1.1.1.1", "208.67.222.222", "192.168.1.1", "10.0.0.1"];
let Total Serveurs = 0

for(let i = 0; i < server.length; i++) {
    console.log("Ping vers : " + ports [i])
    console.log("Temps de réponse :" + ports i*15 + "ms")
    TotalServeurs ++
}

console.log("Total :" + TotalServeurs)

