//Variablen für Formularfelder
var Nachname = document.querySelector('input[name="Nachname"]');
var Vorname = document.querySelector('input[name="Vorname"]');
var Alias = document.querySelector('input[name="Alias"]');

var Betreff = document.querySelector('input[name="Betreff"]');
var Nachricht = document.querySelector('textarea[name="Nachricht"]');

var eMail = document.querySelector('input[name="eMail"]');

var Senden = document.querySelector('form');

function Validierung() {
    //Prüfung der Formatierung
    //@ vorhanden? unnötige Punkte? nicht erlaubte Formatierung?
    //Quelle: https://www.w3resource.com/javascript/form/email-validation.php
    var eMailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    //Nachname, Vorname und Alias dürfen nicht leer sein.
    if (Nachname.value === "" && Vorname.value === "" && Alias.value === "") {
        alert("Bitte gib' entweder deinen Namen oder einen Alias an, mit dem du angesprochen werden möchtest.");
        Nachname.focus();
        return false; 
    }
    
    //Nachname, Vorname und Alias dürfen nicht alle gefüllt sein
    if (Nachname.value != "" && Vorname.value != "" && Alias.value != "") {
        alert("Bitte gib' entweder deinen Namen oder einen Alias an, mit dem du angesprochen werden möchtest.");
        Nachname.focus();
        return false; 
    }
    
        //Fehlermeldung wenn Angaben von Alias und Namen gemischt werden. 
        if (Nachname.value != "" && Alias.value != "" && Vorname.value === "") {
            alert("Du kombinierst hier deinen Namen mit einem Alias. Bitte gib' entweder deinen Namen oder einen Alias an, mit dem du angesprochen werden möchtest.");
            Nachname.focus();
            return false; 
        }
    
        //Fehlermeldung wenn Angaben von Alias und Namen gemischt werden. 
        if (Vorname.value != "" && Alias.value != "" && Nachname.value === "") {
            alert("Du kombinierst hier deinen Namen mit einem Alias. Bitte gib' entweder deinen Namen oder einen Alias an, mit dem du angesprochen werden möchtest.");
            Vorname.focus();
            return false; 
        }
    
    //Angbae der e-Mail
    if (eMail.value === "") {
        alert("Damit ich Dir antworten kann, musst du eine e-Mail-Adresse angeben.");
        eMail.focus();
        return false;
    }
    
    if (eMail.value.match(eMailFormat)) {
        return true;
    } else {
        alert("Die Formatierung Deiner e-Mail-Adresse stimmt nicht. Bitte prüfe Deine Angaben.");
        eMail.focus();
        return false;
    }
    
    //Betreff ist ein Pflichtfeld
    if (Betreff.value === "") {
        alert("Bitte lass' mich wissen, worum es geht.");
        Betreff.focus();
        return false;
    }
    
    //Nachricht ist ein Pflichtfeld
    if (Nachricht.value === "") {
        alert("Bitte gib' eine Nachricht ein.");
        Nachricht.focus();
        return false;
    }
}