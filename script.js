let colorArray = ["gold", "green", "skyBlue", "brown", "orange", "red", "blue", "yellow", "yellowGreen"]
let randomColor1 = colorArray[Math.floor(Math.random()*colorArray.length)]
let randomColor2 = colorArray[Math.floor(Math.random()*colorArray.length)]
let randomColor3= colorArray[Math.floor(Math.random()*colorArray.length)]
let randomColor4= colorArray[Math.floor(Math.random()*colorArray.length)]
let randomColor5 = colorArray[Math.floor(Math.random()*colorArray.length)]

document.querySelector(".box2").style.backgroundColor = randomColor1;
document.querySelector(".box1").style.backgroundColor = randomColor2;
document.querySelector(".box3").style.backgroundColor = randomColor3;
document.querySelector(".box4").style.backgroundColor = randomColor4;
document.querySelector(".box5").style.backgroundColor = randomColor5;








