let imgObj = null;
imObj = document.getElementById('myImage');
function init(){
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
}
function moveright(){
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}
window.onload = init;