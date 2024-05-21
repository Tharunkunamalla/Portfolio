var menu = document.getElementById("menu");
function myfunction(x) {
  x.classList.toggle("change");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
