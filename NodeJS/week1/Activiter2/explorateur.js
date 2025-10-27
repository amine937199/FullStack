// Importation des modules nécessaires
const fs = require("fs");       // Module pour travailler avec le système de fichiers
const path = require("path");   // Module pour gérer les chemins de fichiers

// Lecture du contenu du dossier actuel (__dirname représente le dossier du script)
fs.readdir(__dirname, (err, files) => {
    if (err) {
        // Si une erreur se produit pendant la lecture du dossier, on l’affiche
        return console.error("Erreur lors de la lecture du dossier :", err);
    }

    console.log(" Contenu du dossier actuel :");
    

    // Parcours de chaque élément (fichier ou dossier) trouvé dans le dossier actuel
    files.forEach((file) => {
        // Création du chemin complet pour chaque élément
        const fullPath = path.join(__dirname, file);
        // Affichage du chemin complet dans la console
        console.log(fullPath);
    });

    // Création d’un message contenant la date et le nombre de fichiers trouvés
    const date = new Date().toLocaleString();
    const logMessage = `Date : ${date}\nNombre de fichiers trouvés : ${files.length}\n\n`;

    // Écriture (ou ajout) de ce message dans le fichier log.txt
    fs.appendFile("log.txt", logMessage, (err) => {
        if (err) {
            // Si une erreur survient lors de l’écriture du fichier log
            return console.error("Erreur lors de l'écriture dans log.txt :", err);
        }
        // Message de confirmation dans la console
        console.log("\nInformations enregistrées dans log.txt !");
    });
});

