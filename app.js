const keyOne = document.querySelector('.keys .one p');
const keyTwo = document.querySelector('.keys .two');
const keyThree = document.querySelector('.keys .three');
const pageOne = document.querySelector('.page-1');
const pageTwo = document.querySelector('.page-2');
const pageThree = document.querySelector('.page-3');
const NavKeys = document.querySelector('.nav-keys');
const signupButton = document.querySelector('.page-3 button');
const nav = document.querySelector('.plus-icon i');
const plus = document.querySelectorAll('.menu p');


keyOne.addEventListener('click', () => {
    pageOne.style.display = 'block'
    pageTwo.style.display = 'none'
    pageThree.style.display = 'none'
    NavKeys.style.display = 'block'
});
keyTwo.addEventListener('click', () => {
    pageOne.style.display = 'none'
    pageTwo.style.display = 'block'
    pageThree.style.display = 'none'
    NavKeys.style.display = 'block'
});
keyThree.addEventListener('click', () => {
    pageOne.style.display = 'none';
    pageTwo.style.display = 'none';
    pageThree.style.display = 'block';
    // NavKeys.style.display = 'none';
    signupButton.style.display = 'block'
});

nav.addEventListener('click', () => {
    plus.style.display = 'block'
});

