var Zitat = document.querySelector('#Zitate h4');
var Autor = document.querySelector('#Zitate p');

var Zitate = ["»Man trinkt den Tee, um den Lärm der Welt zu vergessen.«",
              "»Ruhe, Stille, Sofa und eine Tasse Tee geht über alles.«",
              "»A cup of tea is an excuse to share great thoughts with great minds.«",
              "»Enjoy simple things with total intensity. Just a cup of tea can be a deep meditation.«",
              "»Each cup of tea represents an imaginary voyage.«",
              "»Smile to the cloud in your tea.«",
              "»Drink yout tea slowly and reverently.«",
              "»Drinking tea I tasted the seven seas.«" ]

var Autoren = ["Tien Yiheng",
               "Theodor Fontane",
               "Cristina Re",
               "Bagwan Shree Rajneesh",
               "Catherine Douzel",
               "Thich Nhat Hanh",
               "Thich Nhat Hanh",
               "Shinkichi Takahashi" ]

var Minimum = 0;
var Maximum = Zitate.length - 1;

var Zufall = Math.round(Math.random() * (Maximum - Minimum)) + Minimum;

Zitat.innerHTML = Zitate[Zufall];
Autor.innerHTML = Autoren[Zufall];