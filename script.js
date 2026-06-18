/* ==========================================
   AOS INITIALIZATION
========================================== */

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

/* ==========================================
   TYPED JS
========================================== */

new Typed("#typing", {

    strings: [
        "Python Developer",
        "Django Developer",
        "Backend Developer",
        "REST API Developer"
    ],

    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true,
    smartBackspace: true

});

/* ==========================================
   PARTICLE JS
========================================== */

particlesJS("particles-js", {

    particles: {

        number: {
            value: 40,
            density: {
                enable: true,
                value_area: 800
            }
        },

        color: {
            value: "#dc3545"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3
        },

        line_linked: {

            enable: true,
            distance: 150,
            color: "#dc3545",
            opacity: 0.4,
            width: 1

        },

        move: {

            enable: true,
            speed: 3,
            direction: "none",
            random: false

        }

    }

});

/* ==========================================
   DARK / LIGHT MODE
========================================== */

const themeBtn =
document.getElementById("theme-btn");

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light-mode");

}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        localStorage.setItem("theme", "light");

    }else{

        localStorage.setItem("theme", "dark");

    }

});

/* ==========================================
   COUNTER ANIMATION
========================================== */

const counterSection =
document.querySelector(".counter-section");

const counterObserver =
new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

const target =
+counter.dataset.target;

let count = 0;

const increment =
Math.ceil(target / 100);

const updateCounter = () => {

count += increment;

if(count < target){

counter.innerText = count;

requestAnimationFrame(updateCounter);

}else{

counter.innerText = target;

}

};

updateCounter();

});

counterObserver.disconnect();

}

});

});

counterObserver.observe(counterSection);

/* ==========================================
   SKILL BAR ANIMATION
========================================== */

const skillBars =
document.querySelectorAll(".progress-bar");

const skillObserver =
new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

const width =
entry.target.dataset.width;

entry.target.style.width = width;

}

});

});

skillBars.forEach(bar => {

skillObserver.observe(bar);

});

/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

window.addEventListener("scroll", () => {

const navbar =
document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.padding = "10px 0";
navbar.style.background =
"rgba(15,15,15,.98)";

}else{

navbar.style.padding = "15px 0";
navbar.style.background =
"rgba(15,15,15,.95)";

}

});

/* ==========================================
   GITHUB API PROJECT LOADER
========================================== */

const githubContainer =
document.getElementById("github-projects");

if(githubContainer){

fetch(
"https://api.github.com/users/Aakash-Ashok/repos?sort=updated"
)

.then(response => response.json())

.then(repos => {

const filteredRepos =
repos
.filter(repo => !repo.fork)
.slice(0, 6);

filteredRepos.forEach(repo => {

githubContainer.innerHTML += `

<div class="col-lg-4 col-md-6 mb-4">

<div class="github-card">

<h5>${repo.name}</h5>

<p>
${repo.description || "No description available."}
</p>

<a
href="${repo.html_url}"
target="_blank"
class="btn btn-danger">

View Repository

</a>

</div>

</div>

`;

});

})

.catch(error => {

console.log(
"GitHub API Error:",
error
);

});

}

/* ==========================================
   EMAILJS CONTACT FORM
========================================== */

/*
1. Create account:
https://www.emailjs.com

2. Replace:

YOUR_PUBLIC_KEY
YOUR_SERVICE_ID
YOUR_TEMPLATE_ID

*/

emailjs.init("MYFC-9inJ0FtmlagF");

const contactForm =
document.getElementById("contact-form");

if(contactForm){

contactForm.addEventListener(
"submit",
function(e){

e.preventDefault();

emailjs.send(

"service_zbru6ck",

"template_8oh4r24",

{

from_name:
this.name.value,

from_email:
this.email.value,

subject:
this.subject.value,

message:
this.message.value

}

)

.then(() => {

alert(
"Message Sent Successfully!"
);

contactForm.reset();

})

.catch(() => {

alert(
"Failed to send message."
);

});

}

);

}

/* ==========================================
   ACTIVE NAVBAR LINK
========================================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop =
section.offsetTop;

const sectionHeight =
section.clientHeight;

if(
pageYOffset >=
sectionTop - 200
){

current =
section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(
link.getAttribute("href") ===
`#${current}`
){

link.classList.add("active");

}

});

});

/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const scrollBtn =
document.createElement("button");

scrollBtn.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

scrollBtn.className =
"scroll-top-btn";

document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.width = "50px";
scrollBtn.style.height = "50px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.background = "#dc3545";
scrollBtn.style.color = "#fff";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";
scrollBtn.style.cursor = "pointer";

window.addEventListener("scroll", () => {

if(window.scrollY > 300){

scrollBtn.style.display = "block";

}else{

scrollBtn.style.display = "none";

}

});

scrollBtn.addEventListener(
"click",
() => {

window.scrollTo({

top:0,
behavior:"smooth"

});

}
);

/* ==========================================
   PRELOADER (OPTIONAL)
========================================== */

window.addEventListener("load", () => {

document.body.classList.add(
"loaded"
);

});

/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log(
"Akash Ashok Portfolio Loaded Successfully 🚀"
);