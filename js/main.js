
/* =====================================================
   MAGICTOUCH GLOBAL LIMITED
   WEBSITE JAVASCRIPT
===================================================== */


/* 1. MOBILE NAVIGATION */

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        const isOpen = mainNav.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

    });

    // Close menu after selecting a navigation link

    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );

        });

    });

}


/* 2. AUTOMATIC COPYRIGHT YEAR */

const currentYear = document.getElementById("year");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


/* 3. CLOSE MOBILE MENU WHEN CLICKING OUTSIDE */

document.addEventListener("click", function (event) {

    if (!menuToggle || !mainNav) return;

    const clickedInsideMenu = mainNav.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (
        !clickedInsideMenu &&
        !clickedToggle &&
        mainNav.classList.contains("active")
    ) {

        mainNav.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation"
        );

    }

});


/* 4. SMOOTH INTERNAL NAVIGATION */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* 5. BASIC IMAGE ERROR HANDLING */

document.querySelectorAll("img").forEach(function (image) {

    image.addEventListener("error", function () {

        this.classList.add("image-unavailable");

    });

});


/* 6. REDUCE ANIMATIONS WHEN REQUESTED */

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);

if (prefersReducedMotion.matches) {

    document.documentElement.style.scrollBehavior = "auto";

}


/* 7. WEBSITE INITIALIZATION */

document.addEventListener("DOMContentLoaded", function () {

    console.log(
        "MagicTouch Global Limited website initialized successfully."
    );

});

/* =====================================================
   8. CONTACT FORM — WHATSAPP SUBMISSION
===================================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const service = document.getElementById("service").value;
        const location = document.getElementById("location").value.trim();
        const requirements = document.getElementById("requirements").value.trim();

        const message =
            "MAGICTOUCH GLOBAL LIMITED — NEW ENQUIRY\n\n" +
            "Full Name: " + fullName + "\n" +
            "Phone Number: " + phone + "\n" +
            "Email Address: " + (email || "Not provided") + "\n" +
            "Service Required: " + service + "\n" +
            "Preferred Location: " + location + "\n\n" +
            "Requirements:\n" + requirements;

        const whatsappURL =
            "https://wa.me/2349018751587?text=" +
            encodeURIComponent(message);

        window.open(whatsappURL, "_blank");

    });

}
