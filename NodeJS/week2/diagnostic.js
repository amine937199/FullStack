const os = require("os"); 
// On importe le module "os" pour obtenir des informations sur le système d’exploitation

console.log("Platform:", os.platform());
// Affiche la plateforme du système (ex : win32, linux, darwin)

console.log("Architecture:", os.arch());
// Affiche l’architecture du processeur (ex : x64, arm)

console.log("CPU :", os.cpus().length, "coures");
// Affiche le nombre de cœurs du processeur (CPU)

console.log("Toltal Memory:", os.totalmem());
// Affiche la quantité totale de mémoire (RAM) en octets

console.log("Free Memory:", os.freemem());
// Affiche la quantité de mémoire libre actuellement disponible

console.log("Uptime: ", (os.uptime() / 3600).toFixed(2));
// Affiche depuis combien d’heures le système est en marche (uptime)