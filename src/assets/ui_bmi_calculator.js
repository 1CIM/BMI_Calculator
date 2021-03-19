const calculateBMI = document.getElementById('calculate')
const resultNode = document.getElementById('results')

calculateBMI.addEventListener('click', () => {
  const weightInput = document.getElementById("weightInKg");
  const heightInput = document.getElementById("heightInCm");
  const bmiValue = bmiCalculator.calculate(weightInput.value, heightInput.value)
  resultNode.innerHTML = `Your BMI value is: ${bmiValue} !`
});
 