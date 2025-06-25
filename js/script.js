console.log("Javascript is working!");

function greet() {
    const welcomeSpeech = document.getElementById("welcome-speech");
    console.log(welcomeSpeech);
    welcomeSpeech.innerHTML = "Welcome to the JavaScript recap!";
}

// Function to calculate the area of a triangle
// Formula: Luas = 1/2 * alas * tinggi
function calcLuas() {
    // Get the values of 'alas' and 'tinggi' from the input fields
    const alas = document.getElementById("alas").value;
    const tinggi = document.getElementById("tinggi").value;

    console.log(alas, tinggi);
    // Check if both fields are filled
    if (alas != '' && tinggi != '') {
        // If both fields are filled, proceed with the calculation
        console.log('Calculating area...');
        /// Calculate the area
    } else {
        // If either field is empty, alert the user
        alert("Please fill in both fields.");
    }
}