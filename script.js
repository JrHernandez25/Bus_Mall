'use strict'

const img1 = document.getElementById("img1")

img1.addEventListener('click', function () {
const newimg = document.createElement('img')
newimg.src = '/Images/Img/bubblegum.jpg;'
const image = document.getElementById('div');
image.appendChild(newimg);
});