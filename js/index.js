//init

let menu = document.querySelector('#menu-icon');
let form = document.querySelector('form');
let btn = document.querySelector('#submit')

let navbar = document.querySelector('.navbar');

//listener
menu.onclick = () => {
  
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  
    menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};



const sr = ScrollReveal( {
  distance: '60px',
  duration: 2500,
  reset: false
});

sr.reveal('.home-text', {delay: 200, origin: 'top'});
sr.reveal('.home-img', { delay: 400, origin: 'top'});
sr.reveal('.about, .services, .cta, .resume , .contact, .copyright', { delay: 200, origin: "bottom"});


//form
form.onsubmit = (e) => {
  e.preventDefault();
  
  let chr = new XMLHttpRequest();
  chr.open("POST", "../assets/data/g.php", true);
  chr.onload = () => {
    if (chr.readyState === 4 && chr.status === 200) {
      console.log(`response Status: ${chr.status} && ${chr.readyState}`);
      let response = chr.response;
     console.log(response);
    }
  };
  
  let formdata = new FormData(form);
  chr.send(formdata);
};






