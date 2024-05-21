const toggleBackground = function () {
  const getClass = document.getElementsByTagName("BODY")[0].classList; //Grabbing the body's classlist
  const nav = document.getElementsByClassName("navbar")[0].classList;

  for (let i = 0; i < 2; i++) {
    const darkButton = document.querySelectorAll(".iconDark")[i].classList;
    const lightButton = document.querySelectorAll(".iconLight")[i].classList;
    darkButton.toggle("iconToggle");
    lightButton.toggle("iconToggle2");
  }

  getClass.toggle("toggleClass");
  nav.toggle("toggleClass");

  for (let i = 0; i < 5; i++) {
    const element =
      document.getElementsByClassName("navigationLink")[i].classList;
    element.toggle("toggleClass");
  }

  for (let i = 0; i < 6; i++) {
    const socialDarkButton =
      document.querySelectorAll(".socialDark")[i].classList;
    const socialLightButton =
      document.querySelectorAll(".socialLight")[i].classList;

    console.log(socialDarkButton);
    socialDarkButton.toggle("iconToggle");
    socialLightButton.toggle("iconToggle2");
  }
};

const menu = document.getElementById("hamburgerMenu");
menu.addEventListener("click", function () {
  const nav = document.getElementsByClassName("navbar")[0].classList;
  const menu = document.getElementsByClassName("menuContainer")[0];
  menu.style.flexDirection = "column";
  nav.toggle("hamburgerNav");
  for (let i = 0; i < 5; i++) {
    const menuItem = document.getElementsByTagName("li")[i].classList;
    menuItem.toggle("showMenu");
  }
});
console.log(menu);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showObserver");
    } else {
      entry.target.classList.remove("showObserver");
    }
  });
});

const hiddenElements = document.querySelectorAll(".observeElement");
hiddenElements.forEach((el) => observer.observe(el));

const scrollDown = document.querySelector(".scroll-down");
scrollDown.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollBy(0, 660);
  // window.screenY(200)
});
