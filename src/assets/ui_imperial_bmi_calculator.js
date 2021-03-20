const impCalculateBMI = document.getElementById('impCalculate')
const impResultNode = document.getElementById('impResults')
const imperialBtn = document.getElementById('metricPage').onclick = () => {
  location.href = "../index.html"
}

impCalculateBMI.addEventListener('click', () => {
  const impWeightInput = document.getElementById("weightInLbs");
  const impHeightInput = document.getElementById("heightInInch");
  const impBmiValue = imperialBMICalculator.calculate(impWeightInput.value, impHeightInput.value)
  const impMessage = bmiClassification.classes(impBmiValue)
  impResultNode.innerHTML = `Your BMI value is: ${impBmiValue} and you are classed as ${impMessage}!`
});
 