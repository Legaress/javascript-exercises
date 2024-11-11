const roundToOneDecimal = (number) => Math.round(number * 10) / 10;

const convertToCelsius = (temperatureFahrenheit) => {
  
  const temperatureCelsius = (temperatureFahrenheit - 32) * (5 / 9);
  return roundToOneDecimal(temperatureCelsius);
};

const convertToFahrenheit = (temperatureCelsius) => {

  const temperatureFahrenheit = (temperatureCelsius * (9 / 5)) + 32;
  return roundToOneDecimal(temperatureFahrenheit);
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
