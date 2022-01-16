const mockForecast = [
  {
    condition: "rain",
    date: "16/01",
    description: "Chuva",
    max: 25,
    min: 19,
    weekday: "Dom",
  },
  {
    condition: "rain",
    date: "16/01",
    description: "Chuva",
    max: 25,
    min: 19,
    weekday: "Dom",
  },
];

const mockWeather = [
  {
    city_name: "São paulo",
    date: "16/01",
    description: "Chuva",
    humidity: 25,
    sunrise: "05:33 am",
    sunset: "07:23 pm",
    temp: 19,
    time: "17:34",
    wind_speedy: "5.66 km/h",
  },
  {
    city_name: "Fortaleza",
    date: "16/01",
    description: "Chuva forte",
    humidity: 25,
    sunrise: "15:33 pm",
    sunset: "06:23 am",
    temp: 17,
    time: "12:34",
    wind_speedy: "9.78 km/h",
  },
];

const mockTypeForecast = "clear_day";
const mockCurrently = "dia";
const mockLoadingButton = true;

export {
  mockForecast,
  mockTypeForecast,
  mockCurrently,
  mockLoadingButton,
  mockWeather,
};
