async function start() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  createBreedList(data.message);
}
start();

function createBreedList(breedList) {
  document.getElementById("breed").innerHTML = `
  <select onchange="loadByBreed(this.value)">
  <option>Select Breed</option>
  ${Object.keys(breedList)
    .map(function (breed) {
      return `<option>${breed}</option>`;
    })
    .join("")}
</select>
`;
}

async function loadByBreed(breed) {
  if (breed != "Select Breed") {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await response.json();
    createSlideShow(data.message);
  }
}

function createSlideShow(images) {
  document.getElementById("slideshow").innerHTML = `
 <div
          class="slide"
          style="
            background-image: url('${images[0]}');
          "
        ></div>
 `;
}
