const home = document.querySelector('#home');
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

const arrayAgent = [
  {
    imgSrc: 'photo/w3.jpeg',
    h6Name: 'Victoire',
    pDescription: `Victoire studied at Wima school in the branch of scientist and continued his university studies at the 
    free university of the countries of the great lakes where he studied civil engineering`,
  },
  {
    imgSrc: 'photo/f1.jpeg', 
    h6Name: 'Bisimwa Francklin',
    pDescription: `Bisimwa Francklin studied at Wima school in the branch of math-physics and continued his university studies at the 
    free university of the countries of the great lakes where he studied civil engineering`,
  },
  {
    imgSrc: 'photo/j2.png',
    h6Name: 'Emmanuel sefu',
    pDescription: `Emmanuel Sefu studied in Salesian school in the branch of electricity and continued his university studies at the 
    free university of the countries of the great lakes where he studied civil engineering`,
  },
  {
    imgSrc: 'photo/j3.png',
    h6Name: 'Joyeux Binasali',
    pDescription: `Joyeux Binasali studied at Mama mulezi school in the branch of scientist and continued his university studies at the 
    free university of the countries of the great lakes where he studied civil engineering`,
  },
];

function peopleTalking() {
  const insertBeforeThis = document.querySelector('#insertBeforeThis');
  const container = document.createElement('div');
  const h2 = document.createElement('h2');
  const div1 = document.createElement('div');
  const hr1 = document.createElement('hr');
  container.classList.add('bg-white', 'container-fluid');
  h2.classList.add('text-center', 'bg-transparent', 'text-black', 'pt-5');
  h2.innerText = 'Featured Speakers';
  div1.classList.add('bg-transparent', 'pb-5');
  hr1.classList.add('hrrouge');
  home.insertBefore(container, insertBeforeThis);
  container.appendChild(h2);
  container.appendChild(div1);
  div1.appendChild(hr1);
  let k = 0;
  for (let i = 0; i < 2; i += 1) {
    const div2 = document.createElement('div');
    div2.classList.add('row', 'pb-5', 'bg-transparent', 'ps-3', 'pe-3');
    if (k > 1) {
      div2.setAttribute('id', 'k');
    }
    container.appendChild(div2);
    for (let j = 0; j < 2; j += 1) {
      const div21 = document.createElement('div');
      const div211 = document.createElement('div');
      const img2111 = document.createElement('img');
      const div212 = document.createElement('div');
      const h6 = document.createElement('h6');
      const p = document.createElement('p');
      const em = document.createElement('em');
      const hrNormal = document.createElement('hr');
      const small = document.createElement('small');
      
      div21.classList.add('col-md-6', 'd-flex', 'bd-highlight', 'bg-transparent');
      div211.classList.add('p-2', 'w-25', 'bd-highlight', 'bg-transparent');
      img2111.classList.add('img-fluid', 'bg-transparent', 'pb-3', 'hautimg');
      div212.classList.add('p-2', 'w-75', 'bd-highlight', 'bg-transparent');
      h6.classList.add('bg-transparent');
      p.classList.add('rougesimple', 'bg-transparent');
      em.classList.add('bg-transparent', 'rougesimple');
      hrNormal.classList.add('hrnormal');
      small.classList.add('bg-transparent', 'pb-3');

      img2111.src = arrayAgent[k].imgSrc;
      h6.innerText = arrayAgent[k].h6Name;
      em.textContent = 'Civil engineer and general manager of BICC';
      small.textContent = arrayAgent[k].pDescription;
      k += 1;
      div2.appendChild(div21);
      div21.appendChild(div211);
      div211.appendChild(img2111);
      div21.appendChild(div212);
      div212.appendChild(h6);
      div212.appendChild(p);
      p.appendChild(em);
      div212.appendChild(hrNormal);
      div212.appendChild(small);
    }
  }
}

window.addEventListener('load', () => {
  peopleTalking();
  const screen = window.matchMedia('(max-width: 768px)');
  if (screen.matches) {
    document.querySelector('#k').style.display = 'none';
  }
});

const but = document.querySelector('.but');

but.addEventListener('click', () => {
  document.querySelector('#k').style.display = 'block';
  document.querySelector('.noned').style.display = 'block';
});