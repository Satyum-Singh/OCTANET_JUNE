const openMenu = () => {
  document.querySelector(".backdrop").className = "backdrop active";
  document.querySelector("aside").className = "active";
};

const closeMenu = () => {
  var hamburger = document.getElementById("hamBurger");
  hamburger.classList.remove("active");
};

function menu() {
  var hamburger = document.getElementById("hamBurger");
  hamburger.classList.add("active");
}
