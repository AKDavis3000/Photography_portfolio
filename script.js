const navOpen = document.querySelector('.fa-bars');
const navClose = document.querySelector('.fa-x');
const navMenu = document.querySelector('nav');

// open nav with click of bars
const openNavMenu = () => {
  navMenu.style.right = '0px';
};
navOpen.addEventListener('click', openNavMenu);

// close nav with x mark
const closeNavMenu = () => {
  navMenu.style.right = '-355px';
};
navClose.addEventListener('click', closeNavMenu);

// click on site to exit nav menu
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && e.target !== navOpen) {
    navMenu.style.right = '-355px';
  }
});

// lightbox code webdevsimplified not working
const lightbox = document.createElement('div');
lightbox.setAttribute('id', 'lightbox');
document.body.appendChild(lightbox);

const lightboxImages = document.querySelectorAll('.lightbox-img');

lightboxImages.forEach((image) => {
  image.addEventListener('click', (e) => {
    lightbox.classList.add('active');
    const img = document.createElement('img');
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove('active');
});
