const imperialBMICalculator = {
  calculate(weight, height){
    let impBmiValue = (((weight / height) / height) * 703)
    return impBmiValue.toFixed(1)
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
