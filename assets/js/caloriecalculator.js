
// handleSubmit function to link html validation together with custome calculateCalorie() function
function handleSubmit(event) {
    event.preventDefault();

    const form = document.getElementById('calorie-input-form');

    if (form.checkValidity()) {
        calculateCalorie();
    } else {
        form.reportValidity();
    }
}

function calculateCalorie() {

    const calculateButton = document.getElementById('calculate-btn');

    /*calculateButton.addEventListener("click", function() {*/

        const gender = document.getElementById('gender').value;
        const weight = parseFloat(document.getElementById('weight-input').value);
        const height = parseFloat(document.getElementById('height-input').value);
        const age = parseFloat(document.getElementById('age-input').value);
        const activity = document.getElementById('activity-level').value;

        let bmr;
        let calorieNeeds;

        //Harris-Benedict Equation is used to Calculate BMR, chatGPT was used to come up with the equation and helped with the code structure.
        if (gender === 'male') {
            bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age); 
        } else {
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }

        // Adjust BMR for activity levels

        if (activity === 'low') {
            calorieNeeds = bmr * 1.2;
        } else if (activity === 'moderate') {
            calorieNeeds = bmr * 1.55;
        } else {
            calorieNeeds = bmr * 1.9;
        }

        // round down to the nearest integer

        calorieNeeds = Math.floor(calorieNeeds);

        // make result div replace the calculator displaying the current result

        document.getElementById('calorie-value').innerHTML = calorieNeeds;

        var hideDiv = document.getElementById('calorie-default');
        hideDiv.style.display = "none";

        var resultDiv = document.getElementById('calorie-result');
        resultDiv.style.display = "block";

   /* });*/

};


