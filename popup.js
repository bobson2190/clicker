var clickcount = 0;
var countlabel = document.querySelector("#count");
var btn = document.querySelector("#buttontorick");
btn.onclick = function() {
  clickcount =+ 1;
  countlabel.innerHTML = clickcount;
  console.log("Hi!")
};