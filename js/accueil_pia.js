//création des constantes pour identifier les champs html de la fiche des vilains
const photoId = document.getElementById('photoId');
const nameId = document.getElementById('nameId');
const descriptionId = document.getElementById('descriptionId');
const positionId = document.getElementById('positionId');
const crimeId = document.getElementById('crimeId');

//création de la classe pour les vilains
class Vilain{
    constructor(photo, nom, description, position, crime){
        this.photo = photo;
        this.nom = nom;
        this.description = description;
        this.position = position;
        this.crime = crime;
    }
}

let kilepabo = new Vilain('images/chopper.png',
                                'Kilépabô',
                                'Mais pourquoi est il si méchant aussi ?',
                                'Il était là !!',
                                'C\'est juste qu\'il est pas bô en fait, mais rien de personnel bien sûr'
);

let nightmareDiv = new Vilain('images/NightmareDiv.jpg',
                                'Nightmare Div',
                                'Codeur fou ayant tendance à oublier l`\'existence des balises sémantiques et place des div partout dans son code',                                
                                'Position inconnue actuellement, il oeuvrerait apparemment par le biais de millier de développeurs, rendant toutes recherches difficiles',
                                'Ne s\'est pas mis à jour concernant l\'évolution des langages depuis 1995'
);

function slide(direction) {

//disparition de l'affiche avec un fade out
  $( "#warningId" ).fadeOut( 0 );
  
  //remplissage des champs définissant le vilain suivant
  if(nameId.innerHTML == "Nightmare Div"){
    remplirFiche(kilepabo);
  } 
  else {
    remplirFiche(nightmareDiv);
  };

  //réapparition de la fiche du vilain avec les nouvelles infos
  if(direction == 'gauche') {
    $( "#warningId" ).toggle("slide", { direction: "right" });
  } else if(direction == 'droite') {
    $( "#warningId" ).toggle("slide", { direction: "left" });
  }

}

function remplirFiche(vilain){
    photoId.setAttribute("src", vilain.photo);
    nameId.innerHTML = vilain.nom;
    descriptionId.innerHTML = vilain.description;
    positionId.innerHTML = vilain.position;
    crimeId.innerHTML = vilain.crime;

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

