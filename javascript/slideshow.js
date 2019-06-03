var Zaehler = 1;

var Slideshow = document.querySelector('#BildZeile');
var Links = document.querySelectorAll('.Links');
var Rechts = document.querySelectorAll('.Rechts');

for (var x = 0; x < Links.length; x = x +1) {
    Links[x].addEventListener('click', function(e) {
        e.preventDefault();

        var Typ = this.dataset.slideshow;
        var Slide = document.querySelector('.BildZeile[data-slideshow="' + Typ + '"]');
        var SlideshowTotal = document.querySelector('.SlideshowTotal[data-slideshow="' + Typ + '"]').innerHTML;
            
        Zaehler = Zaehler - 1;
            
        if (Zaehler < 1) {
            Zaehler = SlideshowTotal; 
        }
            
        var BilderName = "bilder/" + Typ + "/" + Typ + Zaehler + ".jpg";
        Slide.style.backgroundImage = "url('" + BilderName + "')";
    });
}

for (var x = 0; x < Rechts.length; x = x + 1) {
    Rechts[x].addEventListener('click', function(e) {
        e.preventDefault();

        var Typ = this.dataset.slideshow;
        var Slide = document.querySelector('.BildZeile[data-slideshow="' + Typ + '"]');
        var SlideshowTotal = document.querySelector('.SlideshowTotal[data-slideshow="' + Typ + '"]').innerHTML;
            
        Zaehler = Zaehler + 1;
            
        if (Zaehler > SlideshowTotal) {
            Zaehler = 1; 
        }
            
        var BilderName = "bilder/" + Typ + "/" + Typ + Zaehler + ".jpg";
        Slide.style.backgroundImage = "url('" + BilderName + "')";
    });
}