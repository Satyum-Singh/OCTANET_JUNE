const openMenu = () => {
  document.querySelector(".backdrop").className = "backdrop active";
  document.querySelector("aside").className = "active";
};

const closeMenu = () => {
  var hamburger = document.getElementById("hamBurger");
  hamburger.classList.remove("active");
};

// const menu = document.getElementById("menubtn");

function menu() {
  var hamburger = document.getElementById("hamBurger");
  hamburger.classList.add("active");
}

// document.querySelector("aside buttons.close").onClick = (e) => {
//   closeMenu();
// };

// document.querySelector(".backdrop").onClick = (e) => {
//   closeMenu();
// };
