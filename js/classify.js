let leftbox=document.querySelector(".main-left-box");
let leftlis=document.querySelectorAll(".main-left-box div");
let rightbox=document.querySelector(".main-right");
let rightfloors=document.querySelectorAll(".main-right-box");
let size=leftlis[0].offsetHeight;
let flag=true;
leftlis.forEach(function(val,index){
	val.onclick=function(){
		flag=false;
		rightbox.scrollTop=rightfloors[index].offsetTop;
		leftlis.forEach(function(ele){
			ele.classList.remove("active");
		});
		val.classList.add("active");
		leftbox.scrollTop=val.offsetTop-leftbox.offsetHeight+size;
		setTimeout(function(){
			flag=true;
		},10);
	}
});

rightbox.onscroll=function(){
	rightfloors.forEach(function(val,index){
		if(rightbox.scrollTop>=val.offsetTop&&rightbox.scrollTop<val.offsetTop+val.offsetHeight){
			leftlis[index].classList.add("active");
			leftbox.scrollTop=leftlis[index].offsetTop-leftbox.offsetHeight+size;
		}
		else{
			leftlis[index].classList.remove("active");
		}
	});
}

