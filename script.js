let element1Clicked = false;
let element2Clicked = false;

document.getElementById('element1').addEventListener('click', function() {
    if (!element1Clicked) {
        document.getElementById('element1').style.backgroundColor = 'blue';
        document.getElementById('element1').style.color = 'white';
        element1Clicked = true;
    } else {
        document.getElementById('element1').style.backgroundColor = 'initial';
        document.getElementById('element1').style.color = 'initial';
        element1Clicked = false;
    }
});

document.getElementById('element2').addEventListener('click', function() {
    if (!element2Clicked) {
        document.querySelector('#element2').style.backgroundColor = 'green';
        document.querySelector('#element2').style.color = 'white';
        element2Clicked = true;
    } else {
        document.querySelector('#element2').style.backgroundColor = 'initial';
        document.querySelector('#element2').style.color = 'initial';
        element2Clicked = false;
    }
});







const mainImage = document.getElementById('mainImage');
const addButton = document.getElementById('addButton');
const enlargeButton = document.getElementById('enlargeButton');
const shrinkButton = document.getElementById('shrinkButton');
const deleteButton = document.getElementById('deleteButton');

addButton.addEventListener('click', function() {
    const newImage = document.createElement('img');
    newImage.src = mainImage.src;
    newImage.alt = mainImage.alt;
    newImage.style.maxWidth = '50%'; 

    mainImage.parentNode.appendChild(newImage);

    newImage.addEventListener('click', function() {
        newImage.remove();
    });

    newImage.addEventListener('dblclick', function() {
        let currentWidth = newImage.clientWidth;
        let currentHeight = newImage.clientHeight;
        newImage.style.width = (currentWidth * 1.1) + 'px';
        newImage.style.height = (currentHeight * 1.1) + 'px';
    });

    newImage.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        let currentWidth = newImage.clientWidth;
        let currentHeight = newImage.clientHeight;
        newImage.style.width = (currentWidth * 0.9) + 'px';
        newImage.style.height = (currentHeight * 0.9) + 'px';
    });
});

enlargeButton.addEventListener('click', function() {
    let currentWidth = mainImage.clientWidth;
    let currentHeight = mainImage.clientHeight;
    mainImage.style.width = (currentWidth * 1.1) + 'px';
    mainImage.style.height = (currentHeight * 1.1) + 'px';
});

shrinkButton.addEventListener('click', function() {
    let currentWidth = mainImage.clientWidth;
    let currentHeight = mainImage.clientHeight;
    mainImage.style.width = (currentWidth * 0.9) + 'px';
    mainImage.style.height = (currentHeight * 0.9) + 'px';
});

deleteButton.addEventListener('click', function() {
    mainImage.remove();
});
