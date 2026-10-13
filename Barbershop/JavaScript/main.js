// ---- DOM Elements ----

const yearEl = document.getElementById('year');
const menuBtn = document.getElementById('menuBtn');
const siteHeader = document.querySelector('.site-header');
const nav = document.getElementById('nav');
const mobileMenu = document.getElementById('mobileMenu');
const ctaBtn = document.getElementById('ctaBtn');
const callBtn = document.getElementById('callBtn');
const phoneLink = document.getElementById('phoneLink');
const heading = document.getElementById('heroHeading');
const featureGrid = document.getElementById('featureGrid');
// ---- Services Data (Array of Objects)
const services = [
    {
        title: "Classic Haircut",
        text: "Timeless cuts with modern precision tailred to your style.",
        image: "assets/Images/feature-1.jpg",
    },
    {
        title: "Beard Trim",
        text: "Shape and line-up your beard for a clean, shapr, finish.",
        image: "assets/Images/feature-2.jpg",
    },
    {
        title: "Straight Razor Shave",
        text: "Hot towel treatment with a smooth traditioanl shave.",
        image: "assets/Images/feature-3.jpg",
    },
    {
         title: "Simple Fade",
        text: "PX special but bettter.",
        image: "assets/Images/feature-4.jpeg",
    }
];

//----Navigation Data (array of objects)
// add navigation section

const navLinks = [
    {label: "Home", href: "#hero"},
    {label: "Services", href: "#features"},
    {label: "Book", href: "#cta"},
    {label: "Contact", href: "#footer"},
];

//--Helpers / Functions ---
// Update footer year automatically
const setCurrentYear = () => {
  const now = new Date();
  yearEl.textContent = now.getFullYear();
};

//Header Scroll
//And scroll handling for scroll effects

const handleHeaderOnScroll = () => {
    if (!siteHeader) return;
    if (window.scrollY > 10) {
        siteHeader.classList.add("is-scrolled");
    } else {
        siteHeader.classList.remove("is-scrolled");
    }
};
// Toggle mobile menu open/close
let isMenuOpen = false;
const toggleMobileMenu = () => {
    if (!mobileMenu) return;
    if (isMenuOpen === false){
        mobileMenu.classList.add("is-open");
        isMenuOpen = true;
    } else {
        mobileMenu.classList.remove("is-open");
        isMenuOpen = false;
    }
};

// Close mobile menu (used when a link is clicked)
const closeMobileMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('is-open');
    isMenuOpen = false;
};

   
// Reusable function with parameters
const updateHeadingText = (newText) => {
    if (!heading) return;
    heading.textContent = newText;
};

// ---- Event Listeners ----
// 1) set year on page load
setCurrentYear();

// 2) Hamburger menu toggle
if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        toggleMobileMenu();
    });
}

// 3) Close mobile menu when a link is clicked
if (mobileMenu) {
    mobileMenu.addEventListener("click", (event) => {
        //if they clicked on <a> inside the menu, close it
        if (event.target.tagName === "A"){
            closeMobileMenu();
        }
    });
}

// 4) CTA Button: "Book now" (placeholder behavior)
if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
        updateHeadingText("Booking Coming Next - Great Choice!");
    });
    }

// 5) call button: try to use the phone number in the footer

if (callBtn){
    callBtn.addEventListener("click", () => {
        //If you later set phoneLink, href to tel:, this will work perfectly.
        //for now, this is a beinnger-friendly placeholder
        if (phoneLink) {
            updateHeadingText("Call us at " + phoneLink.textContent);
        } else {
            updateHeadingText("Call feature coming next!");
        }
    });
}

window.addEventListener("scroll", handleHeaderOnScroll);
handleHeaderOnScroll();

//Render Features using forEach
//Add render features function
const renderFeatures = () => {
    if (!featureGrid) return;
    services.forEach((service) => {
        const card = document.createElement("article");
        card.classList.add("feature-card");
        card.innerHTML = `<img src="${service.image}" alt="${service.title}" class="feature-img" />
        <h3 class="feature-title">${service.title}</h3>
        <p class="feature-text">${service.text}</p>`;
        featureGrid.appendChild(card);
    });
}

//render features with map() (teaching)

const renderFeaturesMap = () => {
    const cardHTML = services.map((service) => {
        return `
        <article class="feature-card">
            <img src="${service.image}" alt="${service.title}" class="feature-img" />
            <h3 class="feature-title">${service.title}</h3>
            <p class="feature-text">${service.text}</p>
            </article>`;
    })
            .join(""); //Join the array of strings into a single string
            featureGrid.innerHTML = cardHTML;
    };

const renderNavigation = () => {
    //desktop view
    if (nav) {
        const navHTML = navLinks.map((link) => {
        return `<a href="${link.href}" class="nav-link"> ${link.label} </a>`;
    })
.join ("");
 nav.innerHTML = navHTML;
}

//Mobile Nav
 if (mobileMenu) {
 const mobileHTML = navLinks.map((link) => {
     return `<a href="${link.href}" class="mobile-link"> ${link.label} </a>`;
 })
 .join("");
 mobileMenu.innerHTML = mobileHTML;
 }
};
    renderFeatures(); //call feature render
    renderNavigation(); //call navigation render
