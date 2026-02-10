// Inicializar ícones Lucide
lucide.createIcons();

// Scroll reveal
function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Subtle parallax on background
document.addEventListener("mousemove", (e) => {
    const bg = document.querySelector(".mesh-bg");
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    bg.style.setProperty("--bg-x", `${-(x * 20)}px`);
    bg.style.setProperty("--bg-y", `${-(y * 20)}px`);
});

// Mobile menu toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        const isOpen = document.body.classList.toggle("nav-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            document.body.classList.remove("nav-open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });
}
