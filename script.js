
// =====================================
// DEEPA A - PORTFOLIO JAVASCRIPT
// =====================================


// 1. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("show");

        menuToggle.textContent = isOpen ? "✕" : "☰";

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });

    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}


// 2. TYPING ANIMATION

const typingText = document.getElementById("typingText");

const words = [
    "Python",
    "Java",
    "Problem Solving",
    "AI & Computer Vision",
    "Web Development"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;

const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

function typeAnimation() {

    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingText.textContent =
        currentWord.substring(0, characterIndex);

    let speed = deleting ? 55 : 100;

    if (!deleting && characterIndex === currentWord.length) {

        deleting = true;
        speed = 1200;

    } else if (deleting && characterIndex === 0) {

        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 350;

    }

    setTimeout(typeAnimation, speed);

}

if (typingText && !reducedMotion) {
    typeAnimation();
}


// 3. SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && !reducedMotion) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

} else {

    revealElements.forEach(element => {
        element.classList.add("visible");
    });

}


// 4. ACTIVE NAVIGATION HIGHLIGHT

if ("IntersectionObserver" in window) {

    const sections = document.querySelectorAll("main section[id]");
    const navItems = document.querySelectorAll(".nav-link");

    const sectionObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    navItems.forEach(link => {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            "#" + entry.target.id
                        ) {

                            link.classList.add("active");

                        }

                    });

                }

            });

        },
        {
            rootMargin: "-30% 0px -60% 0px"
        }
    );

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

}


// 5. AUTOMATIC COPYRIGHT YEAR

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// 6. CONSOLE MESSAGE

console.log(
    "%cWelcome to Deepa's Portfolio!",
    "color: #38bdf8; font-size: 20px; font-weight: bold;"
);

console.log("Thanks for visiting my website!");
