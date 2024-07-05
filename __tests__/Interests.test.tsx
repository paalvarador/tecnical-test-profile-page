import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Interests from "@/components/Interests";

describe("Interests", () => {
  it("Debe renderizar el título con el icono", () => {
    render(
      <Interests
        icon={faHeart}
        title="Intereses y gustos"
        interests={["Codear", "Leer", "Jugar"]}
      />
    );

    const titleElement = screen.getByText(/Intereses y gustos/i);
    expect(titleElement).toBeInTheDocument();

    const iconElement = screen.getByRole("img", { hidden: true });
    expect(iconElement).toBeInTheDocument();
  });

  it("Debe renderizar una lista de intereses", () => {
    const interests = ["Codear", "Leer", "Jugar"];
    render(
      <Interests
        icon={faHeart}
        title="Intereses y gustos"
        interests={interests}
      />
    );

    interests.forEach((interest) => {
      const interestElement = screen.getByText(interest);
      expect(interestElement).toBeInTheDocument();
    });
  });

  it("Debe cargar una lista vacia de intereses", () => {
    render(
      <Interests icon={faHeart} title="Intereses y gustos" interests={[]} />
    );

    const listElement = screen.queryAllByRole("listitem");
    expect(listElement).toHaveLength(0);
  });
});
