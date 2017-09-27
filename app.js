(function () {

var form = document.getElementById('catform');
var imageDiv = document.getElementById('imageDiv');
var previous = document.getElementById('previous');

var catChoices = [document.getElementById('catChoice1'), document.getElementById('catChoice2'), document.getElementById('catChoice3'), document.getElementById('catChoice4')];

var currentChoice = '';
var selectedCat = [];

var picture = function(choice){
  var image = document.createElement("img");
  switch (choice){
    case 'lion':
      image.src = 'https://media.giphy.com/media/M64UINc5ulTNK/giphy.gif';
      image.height = "245";
      image.width = "245";
      break;
    case 'tiger':
      image.src = 'https://thoughtcatalog.files.wordpress.com/2014/04/tige.gif';
      image.height = "173";
      image.width = "230";
      break;
    case 'cheetah':
      image.src = 'http://i.imgur.com/YjelnZz.gif';
      image.height = "204";
      image.width = "267";
      break;
    case 'snow-leopard':
      image.src = 'https://www.animalanswers.co.uk/wp-content/uploads/2014/12/tumblr_n0dojavSaI1rpe379o1_r1_500.gif';
      image.height = "300";
      image.width = "250";
      break;
  }
  imageDiv.appendChild(image);
};

var previousChoices = function(type, d){
  var p = document.createElement('p');
  p.innerText = 'On '+ d + ' you chose to see a '+ type;
  previous.appendChild(p);
}

var saveSelectedCat = function(){
  window.localforage.setItem('selectedCat', selectedCat);
};

form.addEventListener('submit', function (e){
  e.preventDefault();
  catChoices.forEach(function(choice){
    if (choice.checked) {
      currentChoice= choice.value;
      picture(currentChoice);
      selectedCat.push({animal: currentChoice, date: Date.now()});
      saveSelectedCat();
    }
  });
})

document.addEventListener('DOMContentLoaded', function(){
   window.localforage.getItem('selectedCat', function(err, catList){
     if (catList){
       selectedCat = catList;
       selectedCat.forEach(function(cat){
         previousChoices(cat.animal, cat.date);
       });
     }
     else {
       //don't think I need anything in here unless I'm pre-loading something
     }
   })
 })

// register service worker
if ('serviceWorker' in navigator) {
   navigator.serviceWorker
     .register('/serviceworker.js')
      .then(console.log('[ServiceWorker] registered'));
 }

})();
