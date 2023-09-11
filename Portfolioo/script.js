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
//resume 
const handleDownload = () => {
  const resume = 'Resume.pdf'
  const pdfUrl = resume;

  const anchor = document.createElement('a');
  anchor.href = pdfUrl;
  anchor.target = '_blank';
  anchor.download = 'your-pdf-file.pdf';
  anchor.click();
  window.open(pdfUrl, '_blank');
};
// multiple typed js

const typed = new Typed('.multiple-text', {
  strings: [' Frontend Developer.',' Student.', ' Full Stack Developer.',' Coder.',' Programmer.',' Keen Learner.'],
  typeSpeed: 100,
  backSpeed:100,
  backDelay:1000,
  loop:true,
});
/////////////Professional Skils ///////////////
const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor(dots * marked / 100);
  var points = "";
  var rotate = 360 / dots;
  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  elem.innerHTML = points;

  const pointsMarked = elem.querySelectorAll('.points');
  for (let i = 0; i < percent; i++){
    pointsMarked[i].classList.add('marked')
  }
})

