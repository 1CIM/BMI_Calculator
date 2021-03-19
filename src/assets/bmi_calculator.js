const bmiCalculator = {
  calculate(weight, height){
    let bmiValue = weight / (height / 100 * height / 100)
    return bmiValue.toFixed(2)
  }
}

const bmiClassification = (bmiValue) => {
  if (bmiValue < 18.5) {
    return "You are"
  }
}