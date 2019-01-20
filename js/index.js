function Selector (a,b){
	
	let topList = document.querySelectorAll(a)
	let bottomList = document.querySelectorAll(b)
	
	topList.forEach(function(val,index){
		val.onclick = function(){
			topList.forEach(function(ele,key){
				ele.classList.remove("active");
				bottomList[key].style.display = "none";
			})
			topList[index].classList.add("active");
			bottomList[index].style.display = "block";
		}
		
	})
	
}
Selector(".commodity-one .furniture-top .top-right span",".commodity-bottom .bottom-right-3bei ul li");



// 响应式js
let diBig = document.querySelector(".xiangyingshi ");
 console.log(diBig);
let diBigLis =document.querySelector(".xiangyingshi-bottom"); 
let diBigSma=document.querySelector(".small-xys ul li:last-child");
let diSma=document.querySelector(".small-xys");
let main=document.querySelector(".mi-bigbox");
let root=document.querySelector("html");
diBigLis.onclick=function(){
	root.scrollTop=0;
}
diBigSma.onclick=function(){
	root.scrollTop=0;
}
document.onscroll=function(){
	if(root.scrollTop>=main.offsetTop){
		let top=root.scrollTop;
setInterval(function(){
if(top==root.scrollTop){
diBigLis.style.display="block";
diBigSma.style.display="block" ;
}
if(root.scrollTop==0){
diBigLis.style.display="none";
diBigSma.style.display="none";
}
},500)
}
}
// 响应式js结束