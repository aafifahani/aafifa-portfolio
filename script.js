document.addEventListener("DOMContentLoaded", () => {

    const menu = document.getElementById("mobile-menu");
    const nav = document.querySelector(".nav-links");

    menu.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // Smooth Scroll
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            document.querySelector(link.getAttribute("href"))
                .scrollIntoView({ behavior: "smooth" });
        });
    });

    // Active Link
    window.addEventListener("scroll", () => {
        let current = "";

        document.querySelectorAll("section").forEach(sec => {
            if (scrollY >= sec.offsetTop - 100) {
                current = sec.id;
            }
        });

        document.querySelectorAll("nav a").forEach(a => {
            a.classList.remove("active");
            if (a.getAttribute("href") === "#" + current) {
                a.classList.add("active");
            }
        });
    });

    // Reveal Animation
    const reveals = document.querySelectorAll(".reveal");

    window.addEventListener("scroll", () => {
        reveals.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add("active");
            }
        });
    });

});

// AI Chatbot
function reply() {
    const input = document.getElementById("userInput").value.toLowerCase();
    let response = "I am a Web Developer!";

    if (input.includes("skills")) {
        response = "HTML, CSS, JS, AI/ML";
    } else if (input.includes("project")) {
        response = "I built Green Nest and AI projects!";
    }

    document.getElementById("botReply").innerText = response;
}
