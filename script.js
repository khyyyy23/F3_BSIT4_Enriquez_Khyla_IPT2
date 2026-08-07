// ================================
// PERSONAL PORTFOLIO JAVASCRIPT
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Typing Effect
    // ==========================
    const typingText = document.getElementById("typing-text");

    if (typingText) {
        const words = [
            "Web Developer",
            "Programmer",
            "UI Designer",
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
                    setTimeout(typeEffect, 1000);
                    return;
                }
            } else {
                typingText.textContent = currentWord.substring(0, charIndex--);
                if (charIndex < 0) {
                    deleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                }
            }

            setTimeout(typeEffect, deleting ? 50 : 100);
        }

        typeEffect();
    }

    // ==========================
    // Smooth Scroll
    // ==========================
    const navLinks = document.querySelectorAll("nav a");

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
    // Read More Button
    // ==========================
    const readMoreBtn = document.getElementById("readMoreBtn");
    const moreText = document.getElementById("moreText");

    if (readMoreBtn && moreText) {

        readMoreBtn.addEventListener("click", () => {

            if (moreText.style.display === "block") {

                moreText.style.display = "none";
                readMoreBtn.textContent = "Read More";

            } else {

                moreText.style.display = "block";
                readMoreBtn.textContent = "Show Less";

            }

        });

    }

    // ==========================
    // Skills Animation
    // ==========================
    const progressBars = document.querySelectorAll(".progress");

    function animateSkills() {

        progressBars.forEach(bar => {

            const percent = bar.getAttribute("data-progress");
            bar.style.width = percent + "%";

        });

    }

    const skills = document.getElementById("skills");

    if (skills) {

        window.addEventListener("scroll", () => {

            const position = skills.getBoundingClientRect().top;

            if (position < window.innerHeight - 100) {
                animateSkills();
            }

        });

    }

    // ==========================
    // Contact Form
    // ==========================
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function(e) {

            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {

                alert("Please complete all fields.");

                return;

            }

            alert("Thank you! Your message has been sent.");

            contactForm.reset();

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

});