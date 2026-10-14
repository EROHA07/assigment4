
// Check one input
function check(input) {
    input.classList.remove("is-valid", "is-invalid");

    if (input.checkValidity()) {
        input.classList.add("is-valid");
    } else {
        input.classList.add("is-invalid");
    }
}

// TASK 3
let contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let message = document.getElementById("message");

        check(name);
        check(email);
        check(message);

        if (contactForm.checkValidity()) {
            alert("Message sent successfully!");
        }
    });
}

// TASK 4
let registerForm = document.getElementById("registerForm");

if (registerForm) {
    let password = document.getElementById("password");
    let confirm = document.getElementById("confirm");

    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let firstName = document.getElementById("firstName");
        let lastName = document.getElementById("lastName");
        let email = document.getElementById("regEmail");
        let country = document.getElementById("country");

        confirm.setCustomValidity("");

        if (password.value !== confirm.value) {
            confirm.setCustomValidity("Passwords do not match");
        }

        check(firstName);
        check(lastName);
        check(email);
        check(password);
        check(confirm);
        check(country);

        let male = document.getElementById("male");
        let female = document.getElementById("female");
        let genderError = document.getElementById("genderError");

        if (!male.checked && !female.checked) {
            genderError.classList.remove("d-none");
        } else {
            genderError.classList.add("d-none");
        }

        if (registerForm.checkValidity()) {
            alert("Registration successful!");
        }
    });

    registerForm.addEventListener("reset", function() {
        confirm.setCustomValidity("");

        let fields = registerForm.querySelectorAll(".is-valid, .is-invalid");

        fields.forEach(function(field) {
            field.classList.remove("is-valid", "is-invalid");
        });

        document.getElementById("genderError").classList.add("d-none");
    });
}
