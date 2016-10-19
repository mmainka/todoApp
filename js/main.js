// Counting
var text = document.querySelector("#todo");
var output = document.querySelector("#length");
text.addEventListener("input", function() {
  output.textContent = text.value.length;
});
