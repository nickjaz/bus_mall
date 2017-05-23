
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
  while (displayImages.length !== 3) {
    var image = imagesArray[Math.floor(Math.random() * imagesArray.length)];
    if (displayImages.includes(image) === false) {
      displayImages.push(image);
    }
  }
}

function render() {
  for (var j = 0; j < 3; j++){
    var display = document.getElementById('display');
    var imageObj = displayImages[j];
    var image = document.createElement('img');
    image.setAttribute('class', 'survey');
    image.setAttribute('src', imageObj.path);
    image.setAttribute('id', imageObj.name);
    display.appendChild(image);
    image.addEventListener('click', eventHandler);
    imageObj.displayCount++;
  }
}

function clicker(selected) {
  for (var k = 0; k < imagesArray.length; k++) {
    if (imagesArray[k].name === selected) {
      imagesArray[k].clickCount++;
    }
  }
}

function eventHandler() {
  if (counter < 25) {
    var selected = event.target.id;
    clicker(selected);
    counter++;
    lastShown = displayImages;
    displayImages = [];
    document.getElementById('display').innerHTML = '';
    randomImages();
    render();
  } else {
    createList();
  }
}

function createList() {
  document.getElementById('display').innerHTML = '';
  var display = document.getElementById('display');
  var data = [];
  var list = document.createElement('ul');
  for (var m = 0; m < imagesArray.length; m++) {
    data.push('<li>' + imagesArray[m].name + ' clicked: ' + imagesArray[m].clickCount + ', percentage: ' + Math.floor(imagesArray[m].clickCount/imagesArray[m].displayCount * 100) + '%' + '</li>');
  }
  list.innerHTML = data.join('');
  console.log(data);
  display.appendChild(list);
}

function start() {
  var display = document.getElementById('display');
  var button = document.createElement('button');
  button.innerHTML = 'START';
  button.addEventListener('click', function() {
    randomImages();
    render();
    display.removeChild(button);
  });
  display.appendChild(button);
}

start();
