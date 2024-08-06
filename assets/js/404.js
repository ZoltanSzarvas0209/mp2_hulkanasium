// make home button on 404 page to return to main app
const homebtn = document.getElementById("home-btn");

homebtn.addEventListener("click", function() {
    const indexpage = "index.html";

    // Use window.location to navigate to the new page
    
    window.location.href = indexpage;
})