//your JS code here. If required.
let btnnxt = document.getElementById("btnnxt");
let btnprv = document.getElementById("btnprv");

let c1 = document.getElementById("circle-1");
let div = document.getElementById("div");

let i=1;
function hell() {
	div.children[i].classList.add("active");
	i++;
	if(i<=2){
	btnprv.disabled = false;
}
	if(i==5){
	btnnxt.disabled = true;
	}else{
	}
}
function hell0000() {
	if(i==2){
	btnprv.disabled = true;
	
	}
	i--;
	btnnxt.disabled = false;
	
	div.children[i].classList.remove("active");
	
}