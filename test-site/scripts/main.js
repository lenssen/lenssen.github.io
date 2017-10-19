var myHeading = document.querySelector('h3');
myHeading.textContent = 'Hello world!';
/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/0.jpg') {
      myImage.setAttribute ('src','images/1.jpg');
    } else {
      myImage.setAttribute ('src','images/0.jpg');
    }
}
var myButton = document.querySelector('button');
myButton.onclick = function() {
  setUserName();
}
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Movie things is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Movie things is cool, ' + storedName;
}