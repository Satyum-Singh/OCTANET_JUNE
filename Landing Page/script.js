const openMenu = () => {
  document.querySelector(".backdrop").className = "backdrop active";
  document.querySelector("aside").className = "active";
};

const closeMenu = () => {
  document.querySelector(".backdrop").className = "backdrop";
  document.querySelector("aside").className = "";
};

document.getElementById("menubtn").oneclick = (e) => {
  e.preventDefault();
};

document.querySelector("aside buttons.close").onClick = (e) => {
  closeMenu();
};

document.querySelector(".backdrop").onClick = (e) => {
  closeMenu();
};
