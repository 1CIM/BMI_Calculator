const calculateBMI = document.getElementById('calculate')
const resultNode = document.getElementById('results')

calculateBMI.addEventListener('click', () => {
  const weightInput = document.getElementById("weightInKg");
  const heightInput = document.getElementById("heightInCm");
  const bmiValue = metricBMICalculator.calculate(weightInput.value, heightInput.value)
  const message = bmiClassification.classes(bmiValue)
  resultNode.innerHTML = `Your BMI value is: ${bmiValue} and you are classed as ${message}!`
});
 
