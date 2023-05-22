'use strict';

const ImageContainer = document.getElementById('s3');
const image1 = document.getElementById('img1');
const image2 = document.getElementById('img2');
const image3 = document.getElementById('img3');
const Tone = document.getElementById('T1');
const Ttwo = document.getElementById('T2');
const Tthree = document.getElementById('T3');
let count = 0;
function Image (name, image) {
    this.name = name;
    this.image = image;
    this.clicks = 0;
    this.views = 0;
}

Image.all = [];

Image.all.push (new Image('Bag', './Img/bag.jpg'));
Image.all.push (new Image('Banana', './Img/banana.jpg'));
Image.all.push (new Image('Bathroom', './Img/bathroom.jpg'));
Image.all.push (new Image('Boots', './Img/boots.jpg'));
Image.all.push (new Image('Breakfast', './Img/breakfast.jpg'));
Image.all.push (new Image('Bubblegum', './Img/bubblegum.jpg'));
Image.all.push (new Image('Chair', './Img/chair.jpg'));
Image.all.push (new Image('Cthulhu', './Img/cthulhu.jpg'));
Image.all.push (new Image('Dog-duck', './Img/dog-duck.jpg'));
Image.all.push (new Image('Dragon', './Img/dragon.jpg'));
Image.all.push (new Image('Pen', './Img/pen.jpg'));
Image.all.push (new Image('Pet-Sweep', './Img/pet-sweep.jpg'));
Image.all.push (new Image('Scissors', './Img/scissors.jpg'));
Image.all.push (new Image('Shark', './Img/shark.jpg'));
Image.all.push (new Image('Sweep', './Img/sweep.png'));
Image.all.push (new Image('Tauntaun', './Img/tauntaun.jpg'));
Image.all.push (new Image('Unicorn', './Img/unicorn.jpg'));
Image.all.push (new Image('Water-can', './Img/water-can.jpg'));
Image.all.push (new Image('Wine-glass', './Img/wine-glass.jpg'));





Image.prototype.renderImages = function (image, name) {
 image.src = this.image;
 name.textContent = this.name;
 this.views ++;
};

function randomizeArray(){
    let myArray = Image.all;
    let randomArray = myArray.sort(function(){return (Math.random()-0.5)});
    console.log(randomArray)
};

function getThreeImages(){
    randomizeArray();
    let img1 = Image.all[0];
    let img2 = Image.all[1];
    let img3 = Image.all[2];
    img1.renderImages(image1, Tone);
    img2.renderImages(image2, Ttwo);
    img3.renderImages(image3, Tthree);
};


function putArrayInStorage(){
    let stringArray = JSON.stringify(Image.all);
    if (stringArray = []){
        localStorage.setItem('Image', stringArray);
    }
    else(localStorage.setItem('Image', stringArray));
}


function getArrayFromStorage(){
    let storedImage = localStorage.getItem('Image');
    if(storedImage){
        let newImage = JSON.parse(storedImage);
        for(let images of newImage){
            let myNewImage = new Images(images.name, images.imgPath, images.views, images.clicks);
            Image.all.push(myNewImage)
        }
    }
}
function removeImages (){
    document.getElementById("img1").style.display='none';
    document.getElementById("img2").style.display='none';
    document.getElementById("img3").style.display='none';
}
function handleClick(e){
    let imageClicked = e.target.id;
    if(imageClicked === 'img1' || imageClicked === 'img2' || imageClicked === 'img3'){
        count++;
    }
    if(imageClicked === 'img1'){
        Image.all[0].clicks++;
    }    
    if(imageClicked === 'img2'){
        Image.all[1].clicks++;
    }
    if(imageClicked === 'img3'){
        Image.all[2].clicks++;
    } 
    getThreeImages(); 
    if (count === 25){
        //removeImages();
        window.location.href = 'results.html';
        console.log(Image.all);
    }
    putArrayInStorage();
};

function Showdata(){
    let hidebutton = getElementById('')
    let showbutton = getElementById("")
}

ImageContainer.addEventListener('click', handleClick)
console.log(Image);
getArrayFromStorage();
getThreeImages();
