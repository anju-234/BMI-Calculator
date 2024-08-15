
        function updateValue(sliderId, valueId) {
            const slider = document.getElementById(sliderId);
            const valueDisplay = document.getElementById(valueId);
            valueDisplay.textContent = slider.value;
        }

        // Update values when sliders are changed
        document.getElementById('weightRange').addEventListener('input', function() {
            updateValue('weightRange', 'weightValue');
        });

        document.getElementById('heightRange').addEventListener('input', function() {
            updateValue('heightRange', 'heightValue');
        });

        function calculateBMI() {
            const weight = parseFloat(document.getElementById('weightRange').value);
            const height = parseFloat(document.getElementById('heightRange').value) / 100; // Convert to meters
            const bmi = (weight / (height * height)).toFixed(2);


            let category = "";
            let recommendation = "";

            if (bmi < 18.5) {
                category = "Underweight";
                recommendation = "You should eat more and gain some weight.";
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                category = "Normal weight";
                recommendation = "Keep up the good work!";
            } else if (bmi >= 25 && bmi <= 29.9) {
                category = "Overweight";
                recommendation = "Try to exercise more and eat healthier.";
            } else {
                category = "Obese";
                recommendation = "You should consult with a healthcare provider.";
            }

            // Store the results in localStorage
            localStorage.setItem('bmi', bmi);
            localStorage.setItem('category', category);
            localStorage.setItem('recommendation', recommendation);

            // Redirect to the result page
            // window.location.href = "bmi.html";
            window.location='./BMI.html'
        }
    


