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
        console.log(dogs);
        
    });
}

    function loadImagestoDom(image){
    let dogsCont=document.getElementById("dog-image-container")
    let ourImage=document.createElement("img");
    ourImage.src=image;
    dogsCont.appendChild(ourImage);
}

function  loadBreedToDom(pic){

    let dogBreed = document.getElementById('dog-breeds')
    let breedImages = document.createElement('ul')

    breedImages.src = pic
    dogBreed.append(breedImages)
}
