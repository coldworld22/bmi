document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.bmi-form');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const resultValue = document.querySelector('.result-value');
    const resultDescription = document.querySelector('.result-description');
    const unitToggle = document.querySelectorAll('input[name="unit"]');
  
    function calculateBMI() {
      let height = parseFloat(heightInput.value);
      let weight = parseFloat(weightInput.value);
      const unit = document.querySelector('input[name="unit"]:checked').value;
      
      if (unit === 'imperial') {
        height *= 0.0254; // inches to meters
        weight *= 0.453592; // pounds to kilograms
      } else {
        height /= 100; // cm to meters
      }
      
      const bmi = weight / (height * height);
      resultValue.textContent = bmi.toFixed(1);
      updateBMIDescription(bmi);
    }
  
    function updateBMIDescription(bmi) {
      let description = '';
      if (bmi < 18.5) {
        description = 'Your BMI suggests you are underweight.';
      } else if (bmi >= 18.5 && bmi < 25) {
        description = 'Your BMI suggests you are a healthy weight.';
      } else if (bmi >= 25 && bmi < 30) {
        description = 'Your BMI suggests you are overweight.';
      } else {
        description = 'Your BMI suggests you are obese.';
      }
      resultDescription.textContent = description;
    }
  
    function updateUnits() {
      const unit = document.querySelector('input[name="unit"]:checked').value;
      document.querySelector('.input-unit').textContent = unit === 'metric' ? 'cm' : 'in';
      document.querySelector('.input-unit + .input-unit').textContent = unit === 'metric' ? 'kg' : 'lbs';
    }
  
    form.addEventListener('input', calculateBMI);
    unitToggle.forEach(radio => radio.addEventListener('change', updateUnits));
    calculateBMI(); // Initial calculation on load
  });
  