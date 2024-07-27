// open popup window with form

document.addEventListener("DOMContentLoaded", function() {
    const getmyplan = document.getElementById('getmyplan-btn');
    const form = document.getElementById('form-container');

    getmyplan.addEventListener("click", function() {
        form.style.display = "block";
    })

});


// close button for pop up window
const close = document.getElementById('close-btn');

close.addEventListener("click", function() {
    form.style.display = "none";
    window.location.reload(); // reload window - fixed functionality issue after closing window
})


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
    )

    return false;  // To block from loading a new page
};
