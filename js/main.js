document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");

  if (button && nav) {
    const closeMenu = function () {
      nav.classList.remove("is-open");
      button.classList.remove("is-active");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Open navigation");
    };

    button.addEventListener("click", function () {
      const opened = nav.classList.toggle("is-open");
      button.classList.toggle("is-active", opened);
      button.setAttribute("aria-expanded", String(opened));
      button.setAttribute(
        "aria-label",
        opened ? "Close navigation" : "Open navigation"
      );
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 760) closeMenu();
    });
  }

  const year = document.getElementById("current-year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});

// MAGIC TOUCH CONTACT FORM
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
`MAGIC TOUCH GLOBAL LIMITED - NEW ENQUIRY

Full Name: ${fullName}
Phone Number: ${phone}
Email Address: ${email || "Not provided"}
Service Required: ${service}
Preferred Location: ${location}

Requirements:
${requirements}`;

        const whatsappURL =
            "https://wa.me/2349018751587?text=" +
            encodeURIComponent(message);

        window.open(whatsappURL, "_blank");
    });
}
