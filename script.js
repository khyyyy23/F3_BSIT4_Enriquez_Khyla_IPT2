// ================================
// PERSONAL PORTFOLIO JAVASCRIPT
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Typing Effect (Homepage)
    // ==========================
    const typingText = document.getElementById("typing-text");

    if (typingText) {
        const words = [
            "Web Developer",
            "UI Designer",
            "Programmer",
            "BSIT Student"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {
            const currentWord = words[wordIndex];

            if (!deleting) {
                typingText.textContent = currentWord.substring(0, charIndex++);
                if (charIndex > currentWord.length) {
                    deleting = true;
                    setTimeout(typeEffect, 1200);
                    return;
                }
            } else {
                typingText.textContent = currentWord.substring(0, charIndex--);
                if (charIndex < 0) {
                    deleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                }
            }

            setTimeout(typeEffect, deleting ? 60 : 120);
        }

        typeEffect();
    }

    // ==========================
    // Smooth Navigation
    // ==========================
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // ==========================
    // About Me Read More
    // ==========================
    const readBtn = document.getElementById("readMoreBtn");
    const moreText = document.getElementById("moreText");

    if (readBtn && moreText) {
        readBtn.addEventListener("click", () => {

            if (moreText.style.display === "block") {
                moreText.style.display = "none";
                readBtn.innerHTML = "Read More";
            } else {
                moreText.style.display = "block";
                readBtn.innerHTML = "Show Less";
            }

        });
    }

    // ==========================
    // Skills Progress Animation
    // ==========================
    const progressBars = document.querySelectorAll(".progress");

    function animateSkills() {

        progressBars.forEach(bar => {

            const value = bar.dataset.progress;

            bar.style.width = value + "%";

        });

    }

    const skillsSection = document.querySelector("#skills");

    if (skillsSection) {

        window.addEventListener("scroll", () => {

            const position = skillsSection.getBoundingClientRect().top;

            if (position < window.innerHeight - 100) {
                animateSkills();
            }

        });

    }

    // ==========================
    // Contact Form Validation
    // ==========================
    const form = document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", function(e) {

            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (name === "") {
                alert("Please enter your name.");
                return;
            }

            if (!emailPattern.test(email)) {
                alert("Please enter a valid email.");
                return;
            }

            if (message.length < 10) {
                alert("Message must be at least 10 characters.");
                return;
            }

            alert("Thank you! Your message has been sent.");

            form.reset();

        });

    }

    // ==========================
    // Scroll to Top Button
    // ==========================
    const topBtn = document.getElementById("topBtn");

    if (topBtn) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 300) {
                topBtn.style.display = "block";
            } else {
                topBtn.style.display = "none";
            }

        });

        topBtn.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    // ==========================
    // Active Navigation Highlight
    // ==========================
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            if (scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }

        });

    });

});