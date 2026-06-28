// ================================
// CONTACT FORM VALIDATION
// ================================

const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (event) {

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all the required fields.");
            event.preventDefault();
        } else {
            alert("Thank you! Your message has been sent successfully.");
        }

    });
}


// ================================
// FAQ SHOW/HIDE ANSWERS
// ================================

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {

    question.addEventListener("click", function () {

        const answer = this.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }

    });

});