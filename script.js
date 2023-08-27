let text = document.getElementById ('text');
let sun = document.getElementById ('sun');
let rightCliff = document.getElementById ('right-cliff');
let leftFloat = document.getElementById ('left-float');
let rightFloat = document.getElementById ('right-float');
let centerMain = document.getElementById ('center-main');
let centerBack = document.getElementById ('center-back');
let backLand = document.getElementById ('back-land');


window.addEventListener('scroll', () => {
let value = window.scrollY;

text.style.marginTop = value * 1.0 + 'px';
sun.style.left = value * 0.5 + 'px';
leftFloat.style.left = value * -0.5 + 'px';
leftFloat.style.top = value * -0.2 + 'px';
rightFloat.style.right = value * -0.5 + 'px';
rightFloat.style.top = value * -0.2 + 'px';
centerMain.style.top = value * -0.8 + 'px';
centerBack.style.top = value * -0.75 + 'px';
backLand.style.top = value * -0.8 + 'px';

});