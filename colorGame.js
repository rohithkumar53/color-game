var colors=[];
var colorSelected=document.querySelector("#colorgiven");
var square=document.querySelectorAll(".square");
var message=document.querySelector("#message");
var reset=document.querySelector("#reset");
var easyButton=document.querySelector("#easyButton");
var hardButton=document.querySelector("#hardButton");
var k=0;
var pickedColor=randomColor(k);
colorSelected.textContent=pickedColor;
reset.addEventListener("click", resetting);
easyButton.addEventListener("click", function(){
	this.classList.add("selected");
	hardButton.classList.remove("selected");
	k=3;
	pickedColor=randomColor(3);
	for(var i=k;i<square.length;i++){
		square[i].style.display="none";
	}
});
hardButton.addEventListener("click", function(){
	this.classList.add("selected");
	easyButton.classList.remove("selected");
	k=0;
	pickedColor=randomColor(k);
	for(var i=k;i<square.length;i++){
		square[i].style.display="block";
	}
})
for(var i=0;i<square.length;i++){
	square[i].addEventListener("click", function(){
		if(this.style.background==pickedColor){
			message.textContent="Success";
			changeColors(pickedColor);
		}
		else{
			message.textContent="Try Again!";
			this.style.background="black";
		}
	});
}
function changeColors(a){
	for(var i=0; i<square.length;i++){
		square[i].style.background=a;
	}
}
function randomColor(flag){
	for(var i=0;i<(square.length)-flag;i++){
		var a=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		var c=Math.floor(Math.random()*256);
		colors[i]="rgb("+a+", "+b+", "+c+")";
		square[i].style.background=colors[i];
	}
	var random=Math.floor(Math.random()*((square.length)-flag));
	return colors[random];
}
function resetting(){
	message.textContent="";
	for(var i=0;i<(square.length)-k;i++){
		var a=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		var c=Math.floor(Math.random()*256);
		colors[i]="rgb("+a+", "+b+", "+c+")";
		square[i].style.background=colors[i];
	}
	var random=Math.floor(Math.random()*((square.length)-k));
	pickedColor=colors[random];
	colorSelected.textContent=pickedColor;

}
