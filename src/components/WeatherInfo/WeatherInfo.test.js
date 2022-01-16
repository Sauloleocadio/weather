import { screen, render, mockWeather } from "../../tests";
import WeatherInfo from "./";

describe("WeatherInfo testing component", () => {
  it("Deve ter os dados recebidos da prop weather", () => {
    render(<WeatherInfo weather={mockWeather} />);

    expect(
      screen.queryByText(mockWeather[0].city_name)
    ).not.toBeInTheDocument();
    expect(screen.queryByText(mockWeather[0].date)).not.toBeInTheDocument();
    expect(
      screen.queryByText(mockWeather[0].description)
    ).not.toBeInTheDocument();
    expect(screen.queryByText(mockWeather[0].humidity)).not.toBeInTheDocument();
    expect(screen.queryByText(mockWeather[0].sunrise)).not.toBeInTheDocument();
    expect(screen.queryByText(mockWeather[0].sunset)).not.toBeInTheDocument();
    expect(screen.queryByText(mockWeather[0].temp)).not.toBeInTheDocument();
    expect(screen.queryByText(mockWeather[0].time)).not.toBeInTheDocument();
    expect(
      screen.queryByText(mockWeather[0].wind_speedy)
    ).not.toBeInTheDocument();
  });
});
