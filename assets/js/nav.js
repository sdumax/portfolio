// function openMenu() {
//   document.getElementById("menu-icon").style.width = "250px";
//   document.getElementById("side-list").style.display = "block";

//   // document.getElementById("main").style.marginLeft = "250px";
// }

// function closeMenu() {
//   document.getElementById("side-menu").style.width = "0px";
//   // document.getElementById("main").style.marginLeft = "0";
// }
const checkbox = document.getElementById("nav_icon");
const sidebar = document.getElementById("side-menu");
const sidelist = document.getElementById("side-list");

checkbox.addEventListener("click", () => {
  let isActiveState = document.getElementById("side-menu");
  isActiveState.classList.toggle("is-active");
  console.log("checked");

  if (isActiveState.classList.contains("is-active")) {
    console.log("active indeed");
    sidebar.style.width = "250px";
    sidelist.style.display = "block";
  } else {
    console.log("no active indeed");
    sidebar.style.width = "0";
    sidelist.style.display = "none";
  }
});
// if (chekbox) {
// } else {
// }
// const hamburger = document.querySelector('.hamburger');
// const navList = document.querySelector('.nav-list');
// const navCollapse = document.querySelector('.navbar-collapse');
// console.log(navList.clientHeight);
// hamburger.addEventListener('click', function() {
//     hamburger.classList.toggle('is-active');
//     if (hamburger.classList.contains('is-active')) {
//         const newHeight = navList.clientHeight + 20;
//         navCollapse.style.height = `${newHeight}px`;
//     } else {
//         navCollapse.style.height = `0`;
//     }
// });
