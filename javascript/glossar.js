window.onload = function() {
    var Initiale = document.querySelectorAll('.Initiale');
    var InitialSeite = document.querySelectorAll('.InitialSeite');
    
    var Begriff = document.querySelectorAll('dt');
    
    for (var x = 0; x < Initiale.length; x = x + 1) {
        Initiale[x].addEventListener('click', function(e) {
            //Verhindert die ausführung einer Standard-Funktion (Bsp: Link — Weiterleitung zum Zielort)
            //Hier nicht unbendingt notwendig.
            e.preventDefault();
            
            //Definition der Variable mit dem Wert von »data-letter« des angeklickten Buchstaben
            var Buchstabe = this.dataset.letter;
            //Der querySelector erlaubt auch komplexere CSS-Selektoren
            //Klasse[Attribut] + Variable + Rest
            //Selektion von Elementen mit bestimmten Attributen wird mit eckigen Klammern gekennzeichnet
            //data-VARIABLE
            var Seite = document.querySelector('.InitialSeite[data-letter="' + Buchstabe + '"]');
            
            //Ausblenden aller Initial-Seiten
            AlleAusblenden();
            
            if (Seite !== undefined) {
                //Einblenden der Seite über die Klasse "anzeigen"
                Seite.classList.add('anzeigen');
                
                //Auszeichnung
                this.classList.add('AktuelleSeite');
            }
        });
    }
    
    function AlleAusblenden() {
        for (var x = 0; x < InitialSeite.length; x = x + 1) {
            //Aublenden aller Initial-Seiten durch entfernen der Klasse "anzeigen"
            InitialSeite[x].classList.remove('anzeigen');
        }
        
        for (var x = 0; x < Initiale.length; x = x + 1) {
             Initiale[x].classList.remove('AktuelleSeite');
        }
    }
    
    for (var x = 0; x < Begriff.length; x = x + 1) {
        Begriff[x].addEventListener('click', function(e) {
            //Verhindert die ausführung einer Standard-Funktion (Bsp: Link — Weiterleitung zum Zielort)
            //Hier nicht unbendingt notwendig.
            e.preventDefault();
            
            //Definitio der Variable mit dem Wert des nächsten "Geschwisterchens"
            var Definition = this.nextElementSibling;
            
            //Einblenden der Definition über die Klasse "anzeigen"
            Definition.classList.toggle('anzeigen');
        });
    }
}