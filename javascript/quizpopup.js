var Schliessen = document.querySelector('#Schliessen');

var Popup = document.querySelector('#QuizPopup');
var PopupInhalt = document.querySelector('#QuizPopupInhalt');
var Dokument = document.querySelector('#Inhalt');
//Nur auf mobilen Endgeräten
var Navigationspunkt = document.querySelector('#QuizBeta');

function PopupSchliessen() {
    Popup.classList.remove('anzeigen');
    
    setTimeout(function() {
        PopupInhalt.classList.remove('einschieben');
        Popup.classList.remove('einblenden');
    }, 300);
}

function PopupOeffnen() {
    setTimeout(function() {
        Popup.classList.add('anzeigen');
        
        setTimeout(function() {
            PopupInhalt.classList.add('einschieben');
            Popup.classList.add('einblenden');
        }, 300);                  
    }, 8000);
}

if (navigator.userAgent.match(/iPad/i) || 
    navigator.userAgent.match(/iPod/i) || 
    navigator.userAgent.match(/iPad/i) || 
    navigator.userAgent.match(/Kindle/) || 
    navigator.userAgent.match(/PlayBook/) || 
    navigator.userAgent.match(/Windows Phone/) || 
    navigator.userAgent.match(/iemobile/) || 
    navigator.userAgent.match(/Android/) || 
    navigator.userAgent.match(/Blackberry/)) {
        //Quiz-Option im Burger-Menü
        Dokument.classList.toggle('anzeigen');
    } else {
        PopupOeffnen();
    }

//Schließen des Popups
Schliessen.addEventListener('click', function(e) {
    e.preventDefault();
    
    PopupSchliessen();
});

//Schließen des Popups nach Drücken des Escape-Taste
document.onkeydown = function(e) {
    e = e || window.event;
    
    if (e.keyCode === 27) {
        PopupSchliessen();
    }
}