//déclaration Array vide

var titresArray = [];
var searchtitresArray = [];

//appel à la base (asynchrone)

var titresRef = firebase.database().ref().child("titres");

//traitement synchrone suite à la récupération des informations de la base

titresRef.on("child_added", snap => {

	var URL_logo = snap.child("URL_logo").val();
	var description = snap.child("description").val();
	var nom = snap.child("nom").val();
	var periodicite = snap.child("periodicite").val();

	titresArray.push(
	  {
	    URL_logo: URL_logo,
	    description: description,
	    nom:nom,
	    periodicite:periodicite
	  }
	 
	);

	searchtitresArray.push(
	  {
	    category:periodicite,
	    title:nom
	  }
	 
	);

	//initialisation des élements de la fonction recherche (synchrone)

	$('.ui.search') 
	.search({
	  type: 'category',
	  source: searchtitresArray
	});

});

console.log(titresArray);

console.log(searchtitresArray);


// on lance displayTitre lorsqu'on clique sur le bloc de recherche (search bar + resultats)

$("#search-bar").on("click", function() {
  displayTitre();
});

var arraychoixTitre = [];

function displayTitre() {

	// on écrit le resultat de getvalue dans choixTitre
  var choixTitre = $('.ui.search').search('get value');
  console.log(choixTitre);
  	// on cherche l'objet correspondant
  arraychoixTitre = titresArray.find(k => k.nom==choixTitre);
  $("#logo-publicationURL").attr("src", arraychoixTitre.URL_logo);
  //$("#imageURL").attr("src", arraychoixTitre.URL_UneEmblematique);

}



function ajoutTitre() {

    var cardString = '';
    cardString += '<div class="card">'
    cardString += 	'<div class="image">'
    cardString +=   	'<img class="ui image" src="' + arraychoixTitre.URL_logo + '">'
    cardString +=   '</div>'
    cardString += '</div>'    

/*
    var cardString = '';
    cardString += '<div class="blurring dimmable image">'
    cardString += 	'<div class="ui inverted dimmer">'
    cardString +=   	'<div class="content">'
    cardString +=    		'<div class="center">'
    cardString +=    			'<div class="ui red compact button">'
    cardString +=    				'Retirer'
    cardString +=   			'</div>'
    cardString +=   		'</div>'
    cardString +=   	'</div>'
    cardString +=   '</div>'
    cardString +=   '<img class="ui image" src="' + arraychoixTitre.URL_logo + '">'
    cardString += '</div>'    
*/

    //alert(cardString);

    $("#grille-unes").append(cardString);
}

/*

$("#ajoutTitre").on("click", function() {
  alert("t'as cliqué");
  //ajoutTitre();
});




/*
    var categoryContent = [
    { category: 'Hebdomadaire',  title: 'Vraiment' },
    { category: 'Hebdomadaire', title: 'Le Canard Enchaîné' },
    { category: 'Hebdomadaire', title: 'Courrier International' },
    { category: 'Hebdomadaire', title: 'Le 1' },
    { category: 'Bimensuel', title: 'Society' },
    { category: 'Mensuel', title: 'SO FOOT' },
    { category: 'Mensuel', title: 'Sofilm' }, 
    { category: 'Trimestriel', title: 'Usbek & Rica' },  
    //etc       
    ];


  console.log(categoryContent);

*/






