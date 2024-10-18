let toggle = document.querySelector(".header .left .font-icon i.bar");
let retoggle = document.querySelector(".header .left .font-icon i.xxx");
let menu = document.querySelector(".header .left .container");

toggle.addEventListener("click", () => {
  toggle.style.transform = "scale(0)";
  retoggle.style.transform = "scale(1)";
  menu.classList.add("active");
});

retoggle.addEventListener("click", () => {
  retoggle.style.transform = "scale(0)";
  toggle.style.transform = "scale(1)";
  menu.classList.remove("active");
});

// slides
let slides = document.querySelectorAll(".parent-slides .slide-bar");
let textOne = document.querySelector(".texts .one");
let textTwo = document.querySelector(".texts .two");
let textThree = document.querySelector(".texts .three");
let textFour = document.querySelector(".texts .four");
var x = window.matchMedia("(max-width:768px)");

slides.forEach((e) => {
  e.addEventListener("click", () => {
    slides.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
    if (e.classList.contains("first")) {
      textOne.style.cssText = "display:block";
      textTwo.style.cssText = "display:block";
      textThree.style.cssText = "display:none";
      textFour.style.cssText = "display:none";
      if (x.matches) {
        textOne.style.cssText = "display:block";
        textTwo.style.cssText = "display:none";
        textThree.style.cssText = "display:none";
        textFour.style.cssText = "display:none";
      }
    } else if (e.classList.contains("second")) {
      textOne.style.cssText = "display:none";
      textFour.style.cssText = "display:none";
      textThree.style.cssText = "display:block";
      textTwo.style.cssText = "display:block";
      if (x.matches) {
        textOne.style.cssText = "display:none";
        textTwo.style.cssText = "display:block";
        textThree.style.cssText = "display:none";
        textFour.style.cssText = "display:none";
      }
    } else if (e.classList.contains("third")) {
      textOne.style.cssText = "display:none";
      textTwo.style.cssText = "display:none";
      textThree.style.cssText = "display:block";
      textFour.style.cssText = "display:block";
      if (x.matches) {
        textOne.style.cssText = "display:none";
        textTwo.style.cssText = "display:none";
        textThree.style.cssText = "display:block";
        textFour.style.cssText = "display:none";
      }
    } else if (e.classList.contains("fourth")) {
      if (x.matches) {
        textOne.style.cssText = "display:none";
        textTwo.style.cssText = "display:none";
        textThree.style.cssText = "display:none";
        textFour.style.cssText = "display:block";
      }
    }
  });
});
