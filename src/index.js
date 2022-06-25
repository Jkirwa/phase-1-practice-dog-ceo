console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded",function(){
    fetchDogName();
    fetchBreed();
})

function fetchDogName(){
    fetch ("https://dog.ceo/api/breeds/image/random/4")
    .then((response)=>response .json())
    .then(data => {
        console.log(data);
        let images=data.message;
      images.forEach(image => loadImagestoDom(image))
    });
}

function fetchBreed(){
    fetch ('https://dog.ceo/api/breeds/list/all')
    .then((response)=>response .json())
    .then(dogs => {
        breeds = Object.keys(dogs.message);
        updateBreedList(breeds);
        addBreedSelectListener();
        
    });
}

    function loadImagestoDom(image){
    let dogsCont=document.getElementById("dog-image-container")
    let ourImage=document.createElement("img");
    ourImage.src=image;
    dogsCont.appendChild(ourImage);
}


function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
  }

  function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }
  
  function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
  }
  
  function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
  }
  
  function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
  }
  
  function updateColor(event) {
    event.target.style.color = 'blue';
  }
