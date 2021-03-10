//création des constantes pour identifier les champs html de la fiche des vilains
const photoId = document.getElementById('photoId');
const nameId = document.getElementById('nameId');
const descriptionId = document.getElementById('descriptionId');
const associeId = document.getElementById('associeId');
const positionId = document.getElementById('positionId');
const gardeId = document.getElementById('gardeId');
const vilenieId = document.getElementById('vilenieId');

var compteurDeClic = 0;

//création de la classe pour les vilains
class Vilain{
    constructor(photo, nom, description, associe, position, garde, vilenie){
        this.photo = photo;
        this.nom = nom;
        this.description = description;
        this.associe = associe;
        this.position = position;
        this.garde = garde;
        this.vilenie = vilenie;
    }
}

//création des instances de classe pour chaque vilain connu

let kilepabo = new Vilain('images/chopper.png',
                                'Kilépabô',
                                'Mais pourquoi est il si méchant aussi ?',
                                '<li>Associé</li> <li>Associé</li>',
                                'Il était là !!',
                                'Attention, c\'est vraiment un vilain pas beau !',
                                '<li>vilénie</li> <li>vilénie</li> <li>vilénie</li>'
);

let nightmareDiv = new Vilain('images/NightmareDiv.jpg',
                                'Nightmare Div',
                                'Codeur fou ayant tendance à oublier l`\'existence des balises sémantiques et place des div partout dans son code',
                                '<li>Associé</li> <li>Associé</li> <li>Associé</li> <li>Associé</li> <li>Associé</li>',
                                'Position inconnue actuellement, il oeuvrerait apparemment par le biais de millier de développeurs, rendant toutes recherches difficiles',
                                'Attention, c\'est vraiment un vilain pas beau !',
                                '<li>N\'effectue pas de veille</li> <li>N\'utilise pas les balises sémantiques</li> <li>vilénie</li> <li>vilénie</li>'
);

let drEmmettBrown = new Vilain('images/drEmmettBrown.jpg',
                                'Dr Emmett Brown',
                                'Vieux fou en blouse qui crie constamment "ON VA ALLER DANS LE FUTUR MARTY !!!, a tendance à rammasser les ordures pour les mettre dans le réservoir des voitures.',
                                '<li>Associé</li> <li>Associé</li>',
                                'Dans le futur, là où il n\'y a pas de route ! !!',
                                'Pilote un train qui est rarement à en retard et aime les rituels rythmiques les samedis soir',
                                '<li>vilénie</li> <li>vilénie</li> <li>vilénie</li> <li>vilénie</li>'
);

let jonSnow = new Vilain('images/jonsnow.jpg',
                                'Jon Snow',
                                'Qui l\'as mis dans les méchants ? Encore un coup du stagiaire ça bordel !',
                                '<li>Associé</li> <li>Associé</li> <li>Associé</li> <li>Associé</li>',
                                'Le Mur, nord de Westeros',
                                'Don\'t worry, he knows nothing...',
                                '<li>vilénie</li> <li>vilénie</li> <li>vilénie</li>' 
);

//fonction pour remplir chaque fiche de vilain selon le nom choisi dans la base de données

function vilain(vilain_name) {

    //disparition de la fiche du vilain
    $( "#affiche" ).fadeOut(0);

    //remplissage des champs définissant le vilain
    photoId.setAttribute("src", vilain_name.photo);
    nameId.innerHTML = vilain_name.nom;
    descriptionId.innerHTML = vilain_name.description;
    associeId.innerHTML = vilain_name.associe;
    positionId.innerHTML = vilain_name.position;
    gardeId.innerHTML = vilain_name.garde;
    vilenieId.innerHTML = vilain_name.vilenie;

    //réapparition de la fiche du vilain avec les bonnes infos
    $( "#affiche" ).fadeIn( 500 );

}

function notYet() {
    if(compteurDeClic < 5) {
        alert("Cette fonctionnalité n'est pas encore fonctionnelle (j'aime la redondance), merci de votre compréhension !")
        compteurDeClic = compteurDeClic + 1;
    }
    else if(compteurDeClic < 15) {
        alert("Arrêtez de cliquer partout bon sang !");
    } 
    else {
        alert("Vous avez vraiment que ça à faire ?");
    }
}

//disparition du petit espion lorsque l'on clique dessus
$( document ).ready(function() {
    $( "#itsASpy" ).click(function() {
    $( "#itsASpy" ).toggle( "slide" );
  });

}); 

$(document).ready(function() {

    // Vérifie s'il y a un clic sur le menu burger
    $(".navbar-burger").click(function() {
  
        // Fais descendre les éléments indiqué dans la nav avec la classe "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
});

$( ".thumbU" ).click(function() {
    $( ".thumbU" ).animate({color: "blue"});
  });

  $( ".thumbD" ).click(function() {
    $( ".thumbD" ).animate({color: "red"});
  });
