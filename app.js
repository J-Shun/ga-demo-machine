const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');

const toggle = document.querySelector('.toggle');

localStorage.setItem('ga101', 'zero-to-hero');

let isToggle = false;

toggle.addEventListener('click', () => {
  if (!isToggle) {
    box1.style.backgroundColor = '#fa0';
    box2.style.backgroundColor = '#f3a';
    box3.style.backgroundColor = '#a6f';
    box4.style.backgroundColor = '#66ff8c';
  } else {
    box1.style.backgroundColor = '#86c6fd';
    box2.style.backgroundColor = '#86c6fd';
    box3.style.backgroundColor = '#86c6fd';
    box4.style.backgroundColor = '#86c6fd';
  }
  isToggle = !isToggle;
});
