const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');  
    const active = nav.classList.contains('active')
    Event.currentTarget.setAttribute('arial-expanded', 'active')

}
btnMobile.addEventListener('click', toggleMenu);



