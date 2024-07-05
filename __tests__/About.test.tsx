import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe } from "node:test";
import About from "@/components/About";
import { faUser } from "@fortawesome/free-regular-svg-icons";

describe("About", () => {
  it("Debe renderizar el título con el ícono", () => {
    render(
      <About icon={faUser} title="Acerca de mí" description="Descripción" />
    );

    const titleElement = screen.getByText(/Acerca de mí/i);
    expect(titleElement).toBeInTheDocument();

    const iconElement = screen.getByRole("img", { hidden: true });
    expect(iconElement).toBeInTheDocument();
  });

  it("Debe renderizar la descripción", () => {
    render(
      <About
        icon={faUser}
        title="Acerca de mí"
        description="Esta es una descripción"
      />
    );

    const descriptionElement = screen.getByText(/Esta es una descripción/i);
    expect(descriptionElement).toBeInTheDocument();
  });
});
