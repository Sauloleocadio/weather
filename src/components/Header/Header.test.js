import { screen, render, mockCurrently } from "../../tests";
import Header from "./";

describe("Header testing component", () => {
  render(<Header currently={mockCurrently} />);

  it("Testando se existe titulo no componente", () => {
    const titleHeader = screen.getByText("Previsão do tempo");
    expect(titleHeader).toBeInTheDocument();
  });

  it("Testando se existe um tipo de tempo (dia ou noite)", () => {
     expect(screen.queryByText(mockCurrently)).not.toBeInTheDocument();
  });
  
   it("Testando se existe um estado no campo search", () => {
     expect(screen.queryByText(mockCurrently)).not.toBeInTheDocument();
   });
});
