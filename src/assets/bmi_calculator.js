const metricBMICalculator = {
  calculate(weight, height){
    let bmiValue = weight / (height / 100 * height / 100)
    return bmiValue.toFixed(1)
  }
};

const bmiClassification = {
  classes(Value){
    if (Value < 18.5) {
      return "Underweight"
    } else if (Value < 25) {
      return "Normalweight"
    } else if (Value < 30) {
      return "Overweight"
    } else if (Value < 35) {
      return "Obesity class 1"
    } else if (Value < 40) {
      return "Obesity class 2" 
    } else {
      return "Extreme Obisity"
    };
  }
}
