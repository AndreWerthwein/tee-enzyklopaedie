var Button = document.querySelector('#ObenButton');

window.onscroll = function() {ButtonEinblenden()};

function ButtonEinblenden() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        Button.classList.add('einblenden');
    } else {
        Button.classList.remove('einblenden');
    }
}


function NachObenScrollen() {
    document.body.scrollTo({
        top: 0,
        behavior : 'smooth'
    });
    
    document.documentElement.scrollTo({
        top: 0,
        behavior : 'smooth'
    });
}

Button.addEventListener('click', function(e) {
    e.preventDefault();
    NachObenScrollen();
});