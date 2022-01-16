import { screen, render, mockCurrently, mockLoadingButton } from "../../tests";
import Search from "./";

describe("Search testing component", () => {
  render(<Search currently={mockCurrently} />);

  it("Testando se existe o placeholder no componente", () => {
    const titleSearch = screen.getByPlaceholderText(
      "Insira aqui o nome da cidade"
    );
    expect(titleSearch).toBeInTheDocument();
  });

  it("Testando se existe um tipo de tempo (dia ou noite)", () => {
    expect(screen.queryByText(mockCurrently)).not.toBeInTheDocument();
  });

  it("Testando se existe loading no botão", () => {
    expect(screen.queryByText(mockLoadingButton)).not.toBeInTheDocument();
  });
});
