// Retrieve BMI results from localStorage
const bmi = localStorage.getItem('bmi');
const category = localStorage.getItem('category');
const recommendation = localStorage.getItem('recommendation');

// Display results using GSAP scrambled text
// Register the TextPlugin
gsap.registerPlugin(TextPlugin);

gsap.to("#bmiResult", { duration: 2, text: bmi, ease: "power1.inOut", scrambleText: { speed: 0.2 } });
gsap.to("#categoryResult", { duration: 2, text: category, ease: "power1.inOut", scrambleText: { speed: 0.2 } });
gsap.to("#recommendationResult", { duration: 2, text: recommendation, ease: "power1.inOut", scrambleText: { speed: 0.2 } });
//exit
function goBack() {
    window.location= './index.html'; 
}