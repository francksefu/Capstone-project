const homeMenu = document.querySelector('#homeVer');
const aboutMenu = document.querySelector('#aboutVer');
const cross = document.querySelector('#cross');
const menu = document.querySelector('#menu');

function hiderMenu() {
  menu.style.display = 'none';
  cross.style.display = 'block';
}

function hiderCross() {
  menu.style.display = 'block';
  cross.style.display = 'none';
}

menu.addEventListener('click', () => {
  hiderMenu();
});

cross.addEventListener('click', () => {
  hiderCross();
});

homeMenu.addEventListener('click', () => {
  hiderCross();
});

aboutMenu.addEventListener('click', () => {
  hiderCross();
});