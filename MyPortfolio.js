const scrollTopBtn = document.getElementById("scrollTopBtn");

const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");

const successMessage = document.getElementById("successMessage");

function setError(input, errorElement, message) {

    input.classList.add("error");
    input.classList.remove("success");

    errorElement.textContent = message;

}

function setSuccess(input, errorElement) {

    input.classList.remove("error");
    input.classList.add("success");

    errorElement.textContent = "";

}

function validateName() {

    const name = nameInput.value.trim();

    if (name === "") {

        setError(
            nameInput,
            nameError,
            "Please enter your name."
        );

        return false;
    }

    if (name.length < 3) {

        setError(
            nameInput,
            nameError,
            "Name must contain at least 3 characters."
        );

        return false;
    }

    if (!/^[A-Za-z ]+$/.test(name)) {

        setError(
            nameInput,
            nameError,
            "Please enter a valid name."
        );

        return false;
    }

    setSuccess(nameInput, nameError);

    return true;
}

function validateEmail() {

    const email = emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        setError(
            emailInput,
            emailError,
            "Please enter your email."
        );

        return false;
    }

    if (!emailPattern.test(email)) {

        setError(
            emailInput,
            emailError,
            "Please enter a valid email address."
        );

        return false;
    }

    setSuccess(emailInput, emailError);

    return true;
}

function validateSubject() {

    const subject = subjectInput.value.trim();

    if (subject === "") {

        setError(
            subjectInput,
            subjectError,
            "Please enter a subject."
        );

        return false;
    }

    if (subject.length < 3) {

        setError(
            subjectInput,
            subjectError,
            "Subject must contain at least 3 characters."
        );

        return false;
    }

    setSuccess(subjectInput, subjectError);

    return true;
}

function validateMessage() {

    const message = messageInput.value.trim();

    if (message === "") {

        setError(
            messageInput,
            messageError,
            "Please enter your message."
        );

        return false;
    }

    if (message.length < 10) {

        setError(
            messageInput,
            messageError,
            "Message must contain at least 10 characters."
        );

        return false;
    }

    setSuccess(messageInput, messageError);

    return true;
}

nameInput.addEventListener("input", validateName);

emailInput.addEventListener("input", validateEmail);

subjectInput.addEventListener("input", validateSubject);

messageInput.addEventListener("input", validateMessage);

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const validName = validateName();

    const validEmail = validateEmail();

    const validSubject = validateSubject();

    const validMessage = validateMessage();

    if (
        validName &&
        validEmail &&
        validSubject &&
        validMessage
    ) {

        successMessage.style.display = "block";

        successMessage.textContent =
            "Message sent successfully! Thank you for contacting me.";

        contactForm.reset();

        nameInput.classList.remove("success");
        emailInput.classList.remove("success");
        subjectInput.classList.remove("success");
        messageInput.classList.remove("success");

        setTimeout(function () {

            successMessage.style.display = "none";

        }, 5000);

    } else {

        successMessage.style.display = "none";

    }

});


const revealElements =
    document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right"
    );

const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );

revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        scrollTopBtn.style.display = "flex";

        scrollTopBtn.style.alignItems = "center";

        scrollTopBtn.style.justifyContent = "center";

    } else {

        scrollTopBtn.style.display = "none";

    }

});


scrollTopBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});