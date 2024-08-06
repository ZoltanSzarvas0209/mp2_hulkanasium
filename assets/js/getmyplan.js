// open popup window with form

document.addEventListener("DOMContentLoaded", function() {
    const getmyplan = document.getElementById("getmyplan-btn");
    const form = document.getElementById("form-container");

    getmyplan.addEventListener("click", function() {
        form.style.display = "block";
    });

});


// close button for pop up window
const close = document.getElementById("close-btn");

close.addEventListener("click", function() {
    form.style.display = "none";
    // reload window - fixed functionality issue after closing window
    window.location.reload();
});


// EmailJS

function sendMail(contactForm) {
    emailjs.send("service_rraaj3w","hulkanasium",{
        "from_name": contactForm.fname.value,
        "message": contactForm.textarea.value,
        "from_email": contactForm.email.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("ERROR", error);
        }
    );

    return false;  // To block from loading a new page
}

// create pop up thank you div upon submiting the form

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    if (this.checkValidity()) {
        const thankyoupage = document.getElementById("form-container");
        thankyoupage.innerHTML = `
        <div id="thankyoupage">
            <h1>Thank you for your enquiry!</h1>
            <p>Your personalised workout plan will be e-mailed to you within 48 hours.</p>
            <button class="btn" id="close">CLOSE</button>
        </div>`;

        // Add event listener to the close button after it's created
        document.getElementById("close").addEventListener("click", function() {
            document.getElementById("form-container").style.display = "none";
            window.location.reload();
        });
    } else {
        this.reportValidity();
    }
});