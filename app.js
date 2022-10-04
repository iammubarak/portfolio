const navToggle = document.querySelector(".nav-togle");
const links = document.querySelector(".links");
const linksContainer = document.querySelector(".links-container");
const navButton = document.querySelector(".fa-bars");

navButton.addEventListener("click", function(){
//    links.classList.toggle("show-links"); 
//    console.log("bake and shake");
    if(links.classList.contains("show-links")){
        links.classList.remove("show-links");
    }else {
        links.classList.add("show-links");
    }
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    console.log("helo");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

//automated text
var typed = new Typed(".auto-input", {
    strings: ["Web development", "Web Design", "Web3.0"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
  })

 