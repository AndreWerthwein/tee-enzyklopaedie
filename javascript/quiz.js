var RichtigeAntworten = 0;
var FalscheAntworten = 0;
var BeantworteteFragen = 0;

var Frage = document.querySelectorAll('.Frage');

var Antworten = document.querySelectorAll('.Antwort');

var AbsolutRichtig = document.querySelector('#RichtigeAntworten li:first-child span:first-child');
var ProzentualRichtig = document.querySelector('#RichtigeAntworten li:first-child span:last-child');
var ProzentRichtig = 0;
var RichtigDiagramm = document.querySelector('#ProzentRichtig');

var AbsolutFalsch = document.querySelector('#FalscheAntworten li:first-child span:first-child');
var ProzentualFalsch = document.querySelector('#FalscheAntworten li:first-child span:last-child');
var ProzentFalsch = 0;
var FalschDiagramm = document.querySelector('#ProzentFalsch');

var AktuelleFrage = document.querySelector('#AktuelleFrage span');

var Spezialist = document.querySelector('#Spezialist');

var AlleBeantwortet = document.querySelector('#AlleBeantwortet');

function AlleAuszeichnungenEntfernen() {
    for (var x = 0; x < Antworten.length; x = x + 1) {
        Antworten[x].classList.remove('richtig');
        Antworten[x].classList.remove('falsch');
    }
}

function NaechsteFrage(BeantworteteFragen) {
    for (var x = 0; x < Frage.length; x = x + 1) {
        Frage[x].classList.remove('anzeigen');
    }
    Frage[BeantworteteFragen].classList.add('anzeigen');    
}

function UpdateErgebnisse() {
    AbsolutRichtig.innerHTML = RichtigeAntworten;
    ProzentRichtig = Math.round((RichtigeAntworten * 100) / BeantworteteFragen);
    ProzentualRichtig.innerHTML = ProzentRichtig;
    RichtigDiagramm.style.width = ProzentRichtig + "%";  
    
    AbsolutFalsch.innerHTML = FalscheAntworten;
    ProzentFalsch = Math.round((FalscheAntworten * 100) / BeantworteteFragen);
    ProzentualFalsch.innerHTML = ProzentFalsch;
    FalschDiagramm.style.width = ProzentFalsch + "%"; 
    
    AktuelleFrage.innerHTML = BeantworteteFragen;
}

function UpdateStatus() {
    if (ProzentRichtig === 100) {
        Spezialist.innerHTML = "ein großer Teemeister.";
    }
    
    if (ProzentRichtig < 100) {
        if (ProzentRichtig < 50) {
            Spezialist.innerHTML = "ein Amateur";
        }
        if (ProzentRichtig > 50 || ProzentRichtig === 50) {
            Spezialist.innerHTML = "ein Connaisseur.";
        }
        if (ProzentRichtig > 75 || ProzentRichtig === 75) {
            Spezialist.innerHTML = "ein aufstrebender Lehrling.";
        }
    }
}

for (var x = 0; x < Antworten.length; x = x + 1) {
    Antworten[x].addEventListener('click', function(e) {
        e.preventDefault();
        
        BeantworteteFragen = BeantworteteFragen + 1;
        
        var Status = this.dataset.ergebnis;
       
        if (Status === "richtig") {
            AlleAuszeichnungenEntfernen();
            this.classList.toggle('richtig');
            
                RichtigeAntworten = RichtigeAntworten + 1;
                UpdateErgebnisse();
        } else {
            AlleAuszeichnungenEntfernen();
            this.classList.toggle('falsch');
            
                FalscheAntworten = FalscheAntworten + 1;
                UpdateErgebnisse();
        }
        
        UpdateStatus();
        
        if (BeantworteteFragen === 10) {
            for (var x = 0; x < Frage.length; x = x + 1) {
                Frage[x].classList.remove('anzeigen');
            }
                                      
            AlleBeantwortet.classList.toggle('anzeigen');
        } else {
            NaechsteFrage(BeantworteteFragen);
        }
    });
}