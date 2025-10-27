const EventEmitter = require('events');
// On importe le module "events" pour gérer les événements en Node.js
const emitter = new EventEmitter();
// On crée un nouvel émetteur d’événements (EventEmitter)

emitter.on('utilisateurConnecte',(data) => {
    console.log(`Nouvelle connexion: ${data.nom} (${data.id})`);
    // On écoute l’événement nommé "utilisateurConnecte"
    // Quand cet événement est déclenché, cette fonction sera exécutée

})

emitter.emit('utilisateurConnecte', {id:1, nom:'Alice'});
// On déclenche (émet) l’événement "utilisateurConnecte"
// et on envoie un objet avec les données de l’utilisateur


