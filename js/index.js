const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo

//IMAGES \\
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", siteContent["cta"]["img-src"]);

let centerImg = document.querySelector(".middle-img");
centerImg.src = "img/mid-page-accent.jpg";

// NAV BAR \\

let navItems = siteContent["nav"];

let navBar = document.querySelectorAll("a");

navBar.forEach(function(item, i) {
  item.textContent = navItems[`nav-item-${i}`];
});

navBar.forEach(function(item) {
  item.style.color = "#84E2AA";
});

// ADDED ITEMS \\

let newNavText = document.createElement("a");
let newText = document.createTextNode("MORE GAINS");

newNavText.appendChild(newText);

document.querySelector("nav").appendChild(newNavText);

let newNavTextTwo = document.createElement("a");
let newTextTwo = document.createTextNode("GAINS");

newNavTextTwo.prepend(newTextTwo);

document.querySelector("nav").prepend(newNavTextTwo);

// CTA TEXT \\

let text = siteContent["cta"];

let ctaTextContent = document.querySelectorAll("h1");
ctaTextContent[0].textContent = text["h1"];

let boxContent = document.getElementsByTagName("button");
boxContent[0].textContent = text["button"];

// MAIN CONTENT \\

let mainNinoContent = siteContent["main-content"];

// TOP CONTENT \\

let topContentHeaders = document.querySelectorAll(".top-content div h4");
topContentHeaders[0].textContent = mainNinoContent["features-h4"];
topContentHeaders[1].textContent = mainNinoContent["about-h4"];

let topContentP = document.querySelectorAll(".top-content div p");
topContentP[0].textContent = mainNinoContent["features-content"];
topContentP[1].textContent = mainNinoContent["about-content"];

// BOTTOM CONTENT \\

let bottomContentHeaders = document.querySelectorAll(".bottom-content div h4");
bottomContentHeaders[0].textContent = mainNinoContent["services-h4"];
bottomContentHeaders[1].textContent = mainNinoContent["product-h4"];
bottomContentHeaders[2].textContent = mainNinoContent["vision-h4"];

let bottomContentP = document.querySelectorAll(".bottom-content div p");
bottomContentP[0].textContent = mainNinoContent["services-content"];
bottomContentP[1].textContent = mainNinoContent["product-content"];
bottomContentP[2].textContent = mainNinoContent["vision-content"];

// CONTACT \\

let contactNinoContent = siteContent["contact"];

let contactContentHeader = document.querySelectorAll(".contact h4");
contactContentHeader[0].textContent = contactNinoContent["contact-h4"];

let contactContentP = document.querySelectorAll(".contact p");
contactContentP[0].textContent = contactNinoContent["address"];
contactContentP[1].textContent = contactNinoContent["phone"];
contactContentP[2].textContent = contactNinoContent["email"];
// FOOTER \\

let footerNinoContent = siteContent["footer"];

// COPYRIGHT \\
let copyrightContentP = document.querySelectorAll("footer p");
copyrightContentP[0].textContent = footerNinoContent["copyright"];
