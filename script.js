'use strict'

const ImageContainer = document.getElementById('s3');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const Tone = document.getElementById('T1');
const Ttwo = document.getElementById('T2');
const Tthree = document.getElementById('T3');

function Image (name, image) {
    this.name = name;
    this.image = image;
    this.clicks = 0;
    this.views = 0;
}

Image.all = [];

Image.all.push (new Image('bag', './Img/bag.jpg'));
Image.all.push (new Image('banana', './Img/banana.jpg'));
Image.all.push (new Image('bathroom', './Img/bathroom.jpg'));
Image.all.push (new Image('boots', './Img/boots.jpg'));
Image.all.push (new Image('breakfast', './Img/breakfast.jpg'));
Image.all.push (new Image('bubblegum', './Img/bubblegum.jpg'));
Image.all.push (new Image('chair', './Img/chair.jpg'));
Image.all.push (new Image('cthulhu', './Img/cthulhu.jpg'));
Image.all.push (new Image('dog-duck', './Img/dog-duck.jpg'));
Image.all.push (new Image('dragon', './Img/dragon.jpg'));
Image.all.push (new Image('pen', './Img/pen.jpg'));
Image.all.push (new Image('pet-sweep', './Img/pet-sweep.jpg'));
Image.all.push (new Image('scissors', './Img/scissors.jpg'));
Image.all.push (new Image('shark', './Img/shark.jpg'));
Image.all.push (new Image('sweep', './Img/sweep.jpg'));
Image.all.push (new Image('tauntaun', './Img/tauntaun.jpg'));
Image.all.push (new Image('unicorn', './Img/unicorn.jpg'));
Image.all.push (new Image('water-can', './Img/water-can.jpg'));
Image.all.push (new Image('wine-glass', './Img/wine-glass.jpg'));




console.log(Image.all);