import { screen, render, mockForecast } from "../../tests";
import CardForecast from "./";

describe("CardForecast testing component", () => {
  it("Deve ter os dados recebidos da prop forecast", () => {
    render(<CardForecast forecast={mockForecast} />);

    expect(screen.queryByText(mockForecast[0].condition)).not.toBeInTheDocument();
    expect(screen.queryByText(mockForecast[0].date)).not.toBeInTheDocument();
    expect(
      screen.queryByText(mockForecast[0].description)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(mockForecast[0].weekday)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(mockForecast[0].max)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(mockForecast[0].min)
    ).not.toBeInTheDocument();
  });
});
