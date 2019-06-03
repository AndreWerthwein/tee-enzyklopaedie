var DropdownHead = document.querySelector('#Filter li:first-child');
var DropdownBody = document.querySelector('#Filter');

//Reduktion des Dropdownbodys
function DropdownReduktion() {
    DropdownBody.classList.remove('FilterAnzeigen');
}

//Dropdown-Funktion für das Filtermenü
DropdownHead.addEventListener('click', function(e) {
    e.preventDefault();
    
    DropdownBody.classList.toggle('FilterAnzeigen');
});

var KachelAnsicht = document.querySelector('#KachelAnsicht');
var ListenAnsicht = document.querySelector('#ListenAnsicht');

//Ansichts-Status für dynamisches Ausblenden
//Unterscheidung bei der Einblendenklasse zischen "display = block;" und "display = inline-block" notwendig!
var Liste = false; 

var Tee = document.querySelectorAll('.Tee');

//Darstellung der Teearten und Teesorten durch Anklicken des Icons — Kacheln
KachelAnsicht.addEventListener('click', function(e) {
    e.preventDefault();
    
    for(var x = 0; x < Tee.length; x = x + 1) {
        Tee[x].classList.remove('Liste');
        Tee[x].classList.add('eingliedern');
        
    }
    
    KachelAnsicht.classList.add('AktuelleSeite');
    ListenAnsicht.classList.remove('AktuelleSeite');
    
    Liste = false;
});

//Darstellung der Teearten und Teesorten durch Anklicken des Icons — Liste
ListenAnsicht.addEventListener('click', function(e) {
    e.preventDefault();
    
    for(var x = 0; x < Tee.length; x = x + 1) {
        Tee[x].classList.remove('eingliedern');
        Tee[x].classList.add('Liste');
        Tee[x].classList.add('anzeigen');
    }
    
    ListenAnsicht.classList.add('AktuelleSeite');
    KachelAnsicht.classList.remove('AktuelleSeite');
    
    Liste = true;
});

var Filter = document.querySelectorAll('.Filter');

    //Alle Teearten und Teesorten ausblenden — Verhindert Bugs in der Filter-Funktion
    function AlleTeeSortenAusblenden() {
        for (var x = 0; x < Tee.length; x = x + 1) {
            if (Liste === false) {
                Tee[x].classList.remove('eingliedern');
            } else {
                Tee[x].classList.remove('Liste');
                Tee[x].classList.remove('anzeigen');
            }
        }
    }

    //Alle Teearten und Teesorten einblenden — Verhindert Bugs in der Filter-Funktion
    function AlleTeeSortenEinblenden() {
        for (var x = 0; x < Tee.length; x = x + 1) {
            if (Liste === false) {
                Tee[x].classList.add('eingliedern');
            } else {
                Tee[x].classList.add('Liste');
                Tee[x].classList.add('anzeigen');
            }
        }
    }

//Filter-Funktion
for (var x = 0; x < Filter.length; x = x + 1) {
    Filter[x].addEventListener('click', function(e) {
        e.preventDefault();
        
        var FilterKategorie = this.dataset.region;
        
        var TeeRegion = document.querySelectorAll('.Tee[data-region="' + FilterKategorie + '"]');
        
        if (Liste === false) {
            AlleTeeSortenAusblenden();
            for (var x = 0; x < TeeRegion.length; x = x + 1) {
                TeeRegion[x].classList.remove('Liste');
                TeeRegion[x].classList.remove('anzeigen');
                TeeRegion[x].classList.add('eingliedern');
            }
        } else {
            AlleTeeSortenAusblenden();
            for (var x = 0; x < TeeRegion.length; x = x + 1) {
                TeeRegion[x].classList.remove('eingliedern');
                TeeRegion[x].classList.add('Liste');
                TeeRegion[x].classList.add('anzeigen');
            }
        }
        DropdownReduktion();
    });
}

//Reset Filter
var ResetFilter = document.querySelector('#ResetFilter');

ResetFilter.addEventListener('click', function(e) {
    e.preventDefault();
    
    AlleTeeSortenAusblenden();
    AlleTeeSortenEinblenden();
});

var DetailPopup = document.querySelectorAll('.TeeDetail');
var Schliessen = document.querySelector('#Schliessen');

var Details = false;

//Alle Detail-Popups ausblenden — Verhindert Bugs in der Anzeige
function AlleDetailsAusblenden() {
    for(var x = 0; x < DetailPopup.length; x = x + 1) {
        DetailPopup[x].classList.remove('anzeigen');
    }
    
    Details = false;
}

Schliessen.addEventListener('click', function(e) {
    e.preventDefault();
    
    AlleDetailsAusblenden();
});

for (var x = 0; x < Tee.length; x = x + 1) {
    Tee[x].addEventListener('click', function(e) {
        e.preventDefault();
        
        var TeeName = this.dataset.detail;
        
        var TeeDetail = document.querySelector('.TeeDetail[data-detail="' + TeeName + '"]');
        
        AlleDetailsAusblenden();
        
        TeeDetail.classList.add('anzeigen');
        
        Details = true; 
    });
}

//Esc-Taste zum Schließen des Filter-Dropdowns
document.onkeydown = function(e) {
    e = e || window.event;
    
    if (e.keyCode === 27) {
        if (Details === true) {
            AlleDetailsAusblenden();
        } else {
            DropdownReduktion();
        }
    }
}