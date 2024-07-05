import Header from "@/components/Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe } from "node:test";

describe("Header", () => {
  it("Debe renderizar el username", () => {
    render(<Header username="paalvarador" imageProfile="profile.jpg" />);
    const usernameElement = screen.getByText(/paalvarador/i);
    expect(usernameElement).toBeInTheDocument();
  });

  it("Debe renderizar la imagen del perfil", () => {
    render(<Header username="paalvarador" imageProfile="profile.jpg" />);
    const imageElement = screen.getByAltText(/Profile/i);
    expect(imageElement).toBeInTheDocument();
  });
});
