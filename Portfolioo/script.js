let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let spanSelect = document.getElementsByTagName("span")

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");

};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode

let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
    for (let i = 0; i < spanSelect.length; i++) {
      spanSelect[i].style.color = "#fff724";
    }
    
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
    for (let i = 0; i < spanSelect.length; i++) {
      spanSelect[i].style.color = "#0ef";
    }
    
  }
};

// multiple typed js

const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer','Student', 'Full Stack Developer','Coder','Programmer','Keen Learner'],
  typeSpeed: 100,
  backSpeed:100,
  backDelay:1000,
  loop:true
});


