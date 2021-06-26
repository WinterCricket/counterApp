

//document.getElementById("count-el").innerText = 0;

let count = 0;

let countEl = document.getElementById("count-el")

function increment() {
	count = count + 1;

	countEl.innerText = count;


}

function decrement() {
	count = count - 1;

	countEl.innerText = count;

}