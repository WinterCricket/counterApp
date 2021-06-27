

//document.getElementById("count-el").innerText = 0;

let count = 0;
//let save = 0;
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let space = " .. ";
function increment() {
	count += 1;

	countEl.textContent = count;


}

function decrement() {
	count -= 1;

	countEl.textContent = count;

}

function save() {
	let countStr = count + "  ";
	saveEl.textContent += countStr; 
	count = 0;
	countEl.textContent = count;
 }