let leftBtn = document.querySelector(".main-1-1");
console.log(leftBtn);
let rightBtn = document.querySelector(".main-1-2");
let floor1 = document.querySelector(".box");
let floor2 = document.querySelector(".main-floor2");
console.log(floor2);

leftBtn.onclick = function(){
	rightBtn.classList.remove("active")
	leftBtn.classList.add("active");
	floor2.classList.remove("hhh")
	floor1.classList.add("hhh");
}
// leftBtn.onmouseover = function(){
// 	leftBtn.style.color="#ff6700";
// }
// leftBtn.onmouseout = function(){
// 	leftBtn.style.color="#757575";
// }
// rightBtn.onmouseover = function(){
// 	rightBtn.style.color="#ff6700";
// }
// rightBtn.onmouseout = function(){
// 	rightBtn.style.color="#757575";
// }
rightBtn.onclick = function(){
	leftBtn.classList.remove("active");
	rightBtn.classList.add("active");
	floor2.classList.add("hhh");
	floor1.classList.remove("hhh");
}
let yiru = document.querySelector(".main-2-3 div:nth-child(2) span");
console.log(yiru);
yiru.onmouseover = function(){
	yiru.style.color="#ff6700";
}
yiru.onmouseout = function(){
	yiru.style.color="#757575";
}
let yiru2 = document.querySelector(".main-2-3 div:nth-child(2) a");
console.log(yiru2);
yiru2.onmouseover = function(){
	yiru2.style.color="#ff6700";
}
yiru2.onmouseout = function(){
	yiru2.style.color="#757575";
}