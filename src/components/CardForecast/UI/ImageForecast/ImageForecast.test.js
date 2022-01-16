import { screen, render, mockTypeForecast } from "../../../../tests";
import ImageForecast from "./";

describe("ImageForecast testing component", () => {
  it("Deve ter um tipo de imagem para o componente", () => {
    render(<ImageForecast typeForecast={mockTypeForecast} />);

    expect(screen.queryByText(mockTypeForecast)).not.toBeInTheDocument();
  });
});
