const form = document.querySelector ("form#signup");
form.addEventListener("submit", validateForm);

const fullName = document.querySelector ("input#name");
const email = document.querySelector ("input#email");
const dob = document.querySelector ("input#dob");

const nameMsg = document.querySelector ("span#nameMsg");
const emailMsg = document.querySelector ("span#emailMsg");
const dobMsg = document.querySelector ("span#dobMsg");

function validateForm(eventFired) {
    // Prevent the form from submitting when clicking the "Submit" button
    eventFired.preventDefault();

    // Validate Name, minimum 2 characters long, no digits
    let submittedName = fullName.value.trim(); 
    console.log("Name: " + submittedName); 
    nameMsg.innerHTML = ""; // Clear earlier messages
    if (submittedName.length < 2) { // Check if name is long enough
        nameMsg.innerHTML += "The name must be at least 2 characters long! "; 
    }
    if (/\d/.test(submittedName)) { // And make sure it don't contain any digits
        nameMsg.innerHTML += "The name cannot contain any digits! ";
    }

    // Validate e-mail
    let submittedEmail = email.value.trim();
    console.log("Email: " + submittedEmail); 
    emailMsg.innerHTML = ""; // Clear earlier messages
    let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailPattern.test(submittedEmail)) {
        emailMsg.innerHTML += "Please enter a valid email";
    }

    let submittedDob = dob.value.trim();
    console.log("DOB: " + submittedDob); 
    dobMsg.innerHTML = ""; // Clear earlier messages  
    let dobPattern = /^(?:(?:(?:(?:(?:[1-9]\d)(?:0[48]|[2468][048]|[13579][26])|(?:(?:[2468][048]|[13579][26])00))(\/|-|\.)(?:0?2\1(?:29)))|(?:(?:[1-9]\d{3})(\/|-|\.)(?:(?:(?:0?[13578]|1[02])\2(?:31))|(?:(?:0?[13-9]|1[0-2])\2(?:29|30))|(?:(?:0?[1-9])|(?:1[0-2]))\2(?:0?[1-9]|1\d|2[0-8])))))$/; // https://rgxdb.com/r/2V9BOC58
     if (!dobPattern.test(submittedDob)) { // Reject a date that is not well formatted
      dobMsg.innerHTML = "Please enter a valid date, on the form yyyy-mm-dd";
    }  else { // If well formatted, calculate age:
        let today = new Date(); 
        let dobDate = new Date(submittedDob); 
        let age = Math.floor ((today.getTime() - dobDate.getTime())/(365.24*24*60*60*1000));
        console.log ("Age: " + age);
        if (age < 18) { // If age < 18 reject
            dobMsg.innerHTML = "You need to be 18 or older to sign up";
        } else if (age > 120) { // If age > 120, also reject
            dobMsg.innerHTML = "I'm not sure you are that old: " + age;
        }
    }

    // If all fields validate, the form may be submitted
    if (nameMsg.innerHTML === "" && emailMsg.innerHTML === "" && dobMsg.innerHTML === "") {
        console.log ("Form submitted");
        //message.innerHTML = "Form submitted";
        //form.submit(); // Not really, until this is run...
    } else {
        console.log ("Still validation errors");
        //message.innerHTML = "Still validation errors";
    }  
}