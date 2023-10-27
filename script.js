//your JS code here. If required.
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let c1 = document.getElementById("circle-1");
let div = document.getElementById("div");

let i=1;
function hell() {
	div.children[i].classList.add("active");
	i++;
	if(i<=2){
	prev.disabled = false;
}
	if(i==5){
	next.disabled = true;
	}
}
function hell0000() {
	if(i==2){
	prev.disabled = true;
	
	}
	i--;
	next.disabled = false;
	
	div.children[i].classList.remove("active");
	
}