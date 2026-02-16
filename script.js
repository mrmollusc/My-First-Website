const rainbowButton = document.getElementById('rainbowButton');
const colors = ['red', 'orange', 'yellow', 'lime', 'aqua', 'BlueViolet', 'fuchsia'];
let index = 0;

function changeColor() {
    rainbowButton.style.color = colors[index];
    index ++; 

}
rainbowButton.addEventListener("click", function () {
  rainbowButton.style.color = colors[index%7];
  changeColor();
});