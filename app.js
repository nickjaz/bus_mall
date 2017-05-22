
var imagesArray = [];
var displayImages = [];
var lastShown = [];
var counter = 0;

function ImageOption(name, path) {
  this.name = name;
  this.path = path;
  this.displayCount = 0;
  this.clickCount = 0;
  imagesArray.push(this);
}

var bag = new ImageOption('bag', 'img/bag.jpg');
var banana = new ImageOption('banana', 'img/banana.jpg');
var bathroom = new ImageOption('bathroom', 'img/bathroom.jpg');
var boots = new ImageOption('boots', 'img/boots.jpg');
var breakfast = new ImageOption('breakfast', 'img/breakfast.jpg');
var bubblegum = new ImageOption('bubblegum', 'img/bubblegum.jpg');
var chair = new ImageOption('chair', 'img/chair.jpg');
var cthulhu = new ImageOption('cthulhu', 'img/cthulhu.jpg');
var dogDuck = new ImageOption('dog-duck', 'img/dog-duck.jpg');
var dragon = new ImageOption('dragon', 'img/dragon.jpg');
var pen = new ImageOption('pen', 'img/pen.jpg');
var petSweep = new ImageOption('pet-sweep', 'img/pet-sweep.jpg');
var shark = new ImageOption('shark', 'img/shark.jpg');
var sweep = new ImageOption('sweep', 'img/sweep.png');
var tauntaun = new ImageOption('tauntaun', 'img/tauntaun.jpg');
var unicorn = new ImageOption('unicorn', 'img/unicorn.jpg');
var usb = new ImageOption('usb', 'img/usb.gif');
var waterCan = new ImageOption('water-can', 'img/water-can.jpg');
var wineGlass = new ImageOption('wine-glass', 'img/wine-glass.jpg');

// console.log('in array:', imagesArray);

function randomImages() {
  for (var i = 0; i < 3; i++) {
    displayImages.push(imagesArray[Math.floor(Math.random() * imagesArray.length)]);
  }
  // while (displayImages[0] === displayImages[1] || displayImages[0] === displayImages[2] || displayImages[1] === displayImages[2]) {
  //   displayImages.splice(1,2);
  //   displayImages.push(imagesArray[Math.floor(Math.random() * imagesArray.length)]);
  // }
  while (displayImages[0] === displayImages[1] || displayImages[0] === displayImages[2] || displayImages[0] === lastShown[0] || displayImages[0] === lastShown[1] || displayImages[0] === lastShown[2]) {
    displayImages.splice(0,1, imagesArray[Math.floor(Math.random() * imagesArray.length)]);
  }
  while (displayImages[1] === displayImages[0] || displayImages[1] === displayImages[2] || displayImages[1] === lastShown[0] || displayImages[1] === lastShown[1] || displayImages[1] === lastShown[2]) {
    displayImages.splice(1,1, imagesArray[Math.floor(Math.random() * imagesArray.length)]);
  }
  while (displayImages[2] === displayImages[1] || displayImages[2] === displayImages[0] || displayImages[2] === lastShown[0] || displayImages[2] === lastShown[1] || displayImages[2] === lastShown[2]) {
    displayImages.splice(2,1, imagesArray[Math.floor(Math.random() * imagesArray.length)]);
  }
}

randomImages();

// console.log('random images:', displayImages);

function render() {
  for (var j = 0; j < 3; j++){
    var display = document.getElementById('display');
    var object = displayImages[j];
    var image = document.createElement('img');
    image.setAttribute('class', 'survey');
    image.setAttribute('src', object.path);
    image.setAttribute('id', object.name);
    display.appendChild(image);
    image.addEventListener('click', eventHandler);
    object.displayCount++;
    console.log(image);
  }
}

render();


function eventHandler() {
  if (counter < 25) {
    object.clickCount++;
    counter++;
    lastShown = displayImages;
    displayImages = [];
    document.getElementById('display').innerHTML = '';
    randomImages();
    render();
  } else;
}
