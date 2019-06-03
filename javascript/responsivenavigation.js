var Navigation = document.querySelector('#Burger');
var Navigationspunkte = document.querySelector('#Navigationspunkte');

var LinieI = document.querySelector('#LinieI');
var LinieII = document.querySelector('#LinieII');
var LinieIII = document.querySelector('#LinieIII');

function BurgerAnimation() {
    LinieI.classList.toggle('KreuzI');
    LinieII.classList.toggle('KreuzII');
    LinieIII.classList.toggle('KreuzIII');
}

Navigation.addEventListener('click', function(e) {
    e.preventDefault();
    Navigationspunkte.classList.toggle('NavigationspunkteAnzeigen');
    
    BurgerAnimation();
});
