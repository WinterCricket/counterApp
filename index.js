

//document.getElementById("count-el").innerText = 0;

let count = 0;
//let save = 0;
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
	count += 1;

	countEl.innerText = count;


}

function decrement() {
	count -= 1;

	countEl.innerText = count;

}

function save() {

	saveEl.innerText += count +"/";
 }