let leftbtn=document.querySelector(".left-box .jiantou>div:nth-child(1)");
let rightbtn=document.querySelector(".left-box .jiantou>div:nth-child(2)");
let tuImg=document.querySelectorAll(".left-box div");
let pointbtns=document.querySelectorAll(".foot-bottom-box ul li");
console.log(pointbtns)
let length=pointbtns.length-1;
let n=0;
rightbtn.onclick=function(){
	n++;
	move();
}
leftbtn.onclick=function(){
	n--;
	move();
}
function move(){
	if(n>=length){
		n=length;
	}
	if(n<0){
		n=0;
	}
	pointbtns.forEach(function(val,index){
		val.classList.remove("fff");
		tuImg[index].classList.remove("active");
	});
    pointbtns[n].classList.add("fff");
	tuImg[n].classList.add("active");
}
pointbtns.forEach(function(ele,key){
	ele.onclick=function(){
	    n=key;
		move();
	}
});