  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAqCBAqOr76xKL-eMXZQxGfWVfLO7WIgw0",
    authDomain: "titres-presse-npp.firebaseapp.com",
    databaseURL: "https://titres-presse-npp.firebaseio.com",
    projectId: "titres-presse-npp",
    storageBucket: "titres-presse-npp.appspot.com",
    messagingSenderId: "73707316345"
  };
  firebase.initializeApp(config);

  alert('JS fonctionne')




  var titresArray = [];

  var titresRef = firebase.database().ref().child("titres");

  titresRef.on("child_added", snap => {

    var URL_logo = snap.child("URL_logo").val();
    var description = snap.child("description").val();
    var nom = snap.child("nom").val();
    var periodicite = snap.child("periodicite").val();

    titresArray.push(
      {
        category:periodicite,
        title:nom
      }
     
    );

   });



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
    console.log(titresArray);

