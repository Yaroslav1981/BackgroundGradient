let body = document.querySelector('body');
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let h3 = document.querySelector('h3');
let random = document.querySelector(".random");

body.style.background= `linear-gradient(${color1.value}, ${color2.value})`;


function setRandomGradient(){
let col1,col2;

col1 = "#" + Math.round(parseInt(color1.value.slice(1),16)*Math.random()).toString(16);
col2 = "#" + Math.round(parseInt(color1.value.slice(1),16)*Math.random()).toString(16);
body.style.background = `linear-gradient(to right,${col1}, ${col2})`;
h3.textContent= body.style.background +";";
}
function setGradient(){
	body.style.background = `linear-gradient(to right,${color1.value}, ${color2.value})`;
	h3.textContent= body.style.background +";";
}
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
random.addEventListener("click",setRandomGradient);

console.log(body.style);