
var imagesArray = [];
var displayImages = [];
var lastShown = [];
var chartLabel = [];
var chartData = [];
var counter = 0;

function ImageOption(name, path) {
  this.name = name;
  this.path = path;
  this.displayCount = 0;
  this.clickCount = 0;
  imagesArray.push(this);
}

new ImageOption('bag', 'img/bag.jpg');
new ImageOption('banana', 'img/banana.jpg');
new ImageOption('bathroom', 'img/bathroom.jpg');
new ImageOption('boots', 'img/boots.jpg');
new ImageOption('breakfast', 'img/breakfast.jpg');
new ImageOption('bubblegum', 'img/bubblegum.jpg');
new ImageOption('chair', 'img/chair.jpg');
new ImageOption('cthulhu', 'img/cthulhu.jpg');
new ImageOption('dog-duck', 'img/dog-duck.jpg');
new ImageOption('dragon', 'img/dragon.jpg');
new ImageOption('pen', 'img/pen.jpg');
new ImageOption('pet-sweep', 'img/pet-sweep.jpg');
new ImageOption('shark', 'img/shark.jpg');
new ImageOption('sweep', 'img/sweep.png');
new ImageOption('tauntaun', 'img/tauntaun.jpg');
new ImageOption('unicorn', 'img/unicorn.jpg');
new ImageOption('usb', 'img/usb.gif');
new ImageOption('water-can', 'img/water-can.jpg');
new ImageOption('wine-glass', 'img/wine-glass.jpg');

// console.log('in array:', imagesArray);

function randomImages() {
  while (displayImages.length !== 3) {
    var image = imagesArray[Math.floor(Math.random() * imagesArray.length)];
    if (displayImages.includes(image) === false && lastShown.includes(image) === false) {
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
    getChartData();
    buildChart();
  }
}

function createList() {
  document.getElementById('display').innerHTML = '';
  var display = document.getElementById('display');
  var data = [];
  var list = document.createElement('ul');
  for (var m = 0; m < imagesArray.length; m++) {
    data.push('<li>' + imagesArray[m].name + ' clicked: ' + imagesArray[m].clickCount + '/' + + imagesArray[m].displayCount + ', percentage: ' + Math.floor(imagesArray[m].clickCount/imagesArray[m].displayCount * 100) + '%' + '</li>');
  }
  list.innerHTML = data.join('');
  display.appendChild(list);
}

function getChartData() {
  for(var n = 0; n < imagesArray.length; n++) {
    chartLabel.push(imagesArray[n].name);
    chartData.push(imagesArray[n].clickCount);
  }
}

function buildChart() {
  var canvas = document.getElementById('chart');
  var ctx = canvas.getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartLabel,
      datasets: [{
        label: 'number of clicks',
        data: chartData,
        backgroundColor: '#92CFFF',
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
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
