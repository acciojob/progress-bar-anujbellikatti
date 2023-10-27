//your JS code here. If required.
let btnnxt = document.getElementById("btnnxt");
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
	btnnxt.disabled = true;
	}
}
function hell0000() {
	if(i==2){
	prev.disabled = true;
	
	}
	i--;
	btnnxt.disabled = false;
	
	div.children[i].classList.remove("active");
	
}