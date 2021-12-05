burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list');
rightnav = document.querySelector('.rightnav');



burger.addeventlistener('click', () => {
    rightnav.classlist.toggle('v-class-resp');
    navlist.classlist.toggle('v-class-resp');
    navbar.classlist.toggle('h-nav-resp');
})