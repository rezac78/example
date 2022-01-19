const MouseOver = document.getElementById("Click");

MouseOver.addEventListener("mousemove", function (e) {
  e.target.style.background = "red";
  e.target.style.width = "80px";
});

function submitClick() {
  alert("hello word");
}
