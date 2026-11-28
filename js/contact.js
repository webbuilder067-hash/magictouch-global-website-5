
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    if (!contactForm) return;

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!contactForm.reportValidity()) return;

        const fullName = document.getElementById("fullName").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const location = document.getElementById("location").value.trim();
        const service = document.getElementById("service").value;
        const requirements = document.getElementById("requirements").value.trim();
        const preferredContact = document.getElementById("preferredContact").value;

        const message = [
            "MAGICTOUCH GLOBAL LIMITED - NEW WEBSITE ENQUIRY",
            "",
            "Full Name: " + fullName,
            "Phone Number: " + phone,
            "Email Address: " + (email || "Not provided"),
            "Location: " + location,
            "Service Required: " + service,
            "Preferred Contact: " + preferredContact,
            "",
            "Requirements:",
            requirements,
            "",
            "Sent through the MagicTouch Global Limited website."
        ].join("\n");

        const whatsappURL =
            "https://wa.me/2349018751587?text=" +
            encodeURIComponent(message);

        window.location.href = whatsappURL;
    });
});
