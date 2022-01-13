
var h3=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var change=document.getElementById("change");

function changecolor()
{
	change.style.background= "linear-gradient(to right,"+color1.value+","+color2.value+")";
    h3.textContent=(change.style.background);
}

color1.addEventListener("input", changecolor);
color2.addEventListener("input", changecolor);



