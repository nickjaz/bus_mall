
var imagesArray = [];
var counter = 0;

function ImageOption(name, path) {
  this.name = name;
  this.path = path;
  this.displayed = 0;
  this.clicked = 0;
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
var sweep = new ImageOption('sweep', 'img/sweep.jpg');
var tauntaun = new ImageOption('tauntaun', 'img/tauntaun.jpg');
var unicorn = new ImageOption('unicorn', 'img/unicorn.jpg');
var usb = new ImageOption('usb', 'img/usb.gif');
var waterCan = new ImageOption('water-can', 'img/water-can.jpg');
var wineGlass = new ImageOption('wine-glass', 'img/wine-glass.jpg');

// console.log(bag);
console.log('in array:', imagesArray);
