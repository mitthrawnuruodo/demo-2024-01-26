const form = document.querySelector ("form#contactForm");
form.addEventListener("submit", validateForm);

function validateForm(e) {
    // Prevent the form from submitting when clicking the "Submit" button
    e.preventDefault();

    // Get all form values
    const name = form.name.value; 
    const phone = form.phone.value;
    const email = form.email.value;  
    const email2 = form.email2.value;  
    const comment = form.comment.value;
    console.log ({name, phone, email, email2, comment});

    // Get the elements used for error messages
    const nameErrorElement = document.getElementById('nameError');
    const phoneErrorElement = document.getElementById('phoneError');
    const emailErrorElement = document.getElementById('emailError');
    const email2ErrorElement = document.getElementById('email2Error');
    const commentErrorElement = document.getElementById('commentError');

    // Make booleans
    let validName = true;
    let validPhone = true;
    let validEmail = true;
    let matchEmail = true;
    let validComment = true;

    // Check name (no need for regex)
    if (name == "") {
        var noName = "Please fill out name!";
        nameErrorElement.innerHTML = noName;
        validName = false;
    } else {
        nameErrorElement.innerHTML = "";
        validName = true;
    }

    // Check phone number
    var phonenumber = phone.replace(/ /g,''); // Fjern alle spaces
    phonenumber = phonenumber.trim();
    phonepattern = /^\d{8}$/;
    if (!phonepattern.test(phonenumber)) {
        var noPhone = "Please fill out a valid phonenumber!";
        phoneErrorElement.innerHTML = noPhone;
        validPhone = false;
    } else {
        phoneErrorElement.innerHTML = "";
        validPhone = true;
    }

    // Check email
    var emailpattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailpattern.test(email)) {
        var noEmail = "Please fill out a valid email-address";
        emailErrorElement.innerHTML = noEmail;
        validEmail = false;
    } else {
        emailErrorElement.innerHTML = "";
        validEmail = true;
    }

  // And check if both emails are the same
    if (email !== email2) {
        var diffEmail = "The email-addresses doesn't match";
        email2ErrorElement.innerHTML = diffEmail;
        matchEmail = false;
    } else {
        email2ErrorElement.innerHTML = "";
        matchEmail = true;
    }

    // Check comment field (no need for regex)
    if (comment == "") {
        var noComment = "Please fill out a comment!";
        commentErrorElement.innerHTML = noComment;
        validComment = false;
    } else {
        commentErrorElement.innerHTML = "";
        validComment = true;
    }

    // If all fields are valid, submit form
    if (validName && validPhone && validEmail && validComment && matchEmail) {
        //form.submit();
        console.log("Form submitted!")
    } else {
        console.log("Still errors...")
    }
}