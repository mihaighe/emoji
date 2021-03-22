var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
  pxValue = this.value + "px";
  const emoji1 = document.getElementsByClassName("emoji")[0];
  const emoji2 = document.getElementsByClassName("emoji")[1];
  const emoji3 = document.getElementsByClassName("emoji")[2];
  const emoji4 = document.getElementsByClassName("emoji")[3];


  emoji1.style.setProperty("--emoji-size", pxValue);
  emoji2.style.setProperty("--emoji-size", pxValue);
  emoji3.style.setProperty("--emoji-size", pxValue);
  emoji4.style.setProperty("--emoji-size", pxValue);

};
