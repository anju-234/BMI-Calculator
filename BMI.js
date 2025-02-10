// Retrieve BMI results from localStorage
const bmi = localStorage.getItem('bmi');
const category = localStorage.getItem('category');
const recommendation = localStorage.getItem('recommendation');

// Register the TextPlugin for GSAP
gsap.registerPlugin(TextPlugin);

// Animate BMI result text
gsap.to("#bmiResult", { duration: 2, text: bmi, ease: "power1.inOut" });
gsap.to("#categoryResult", { duration: 2, text: category, ease: "power1.inOut" });
gsap.to("#recommendationResult", { duration: 2, text: recommendation, ease: "power1.inOut" });

// Go Back Function (Ensure this is present)
function goBack(event) {
    event.preventDefault(); // Prevent form submission
    window.location.href = "./index.html"; // Ensure correct file path
}

