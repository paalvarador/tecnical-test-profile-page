import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "@/components/ContactForm";

describe("ContactForm", () => {
  it("Debe renderizar el titulo con el icono en el formulario", () => {
    render(<ContactForm icon={faEnvelope} title="Contacto" />);
    const titleElement = screen.getByText(/Contacto/i);
    expect(titleElement).toBeInTheDocument();

    const iconElement = screen.getByRole("img", { hidden: true });
    expect(iconElement).toBeInTheDocument();
  });

  it("Debe renderizar los inputs del formulario", () => {
    render(<ContactForm icon={faEnvelope} title="Contacto" />);

    const nameInput = screen.getByPlaceholderText(/Nombre/i);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const messageTextArea = screen.getByPlaceholderText(/Mensaje/i);
    const subitButton = screen.getByRole("button", { name: /Enviar/i });

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageTextArea).toBeInTheDocument();
    expect(subitButton).toBeInTheDocument();
  });

  it("Debe mostrar un mensaje de exito al enviar enviar el mensaje", () => {
    render(<ContactForm icon={faEnvelope} title="Contacto" />);

    const nameInput = screen.getByPlaceholderText(/Nombre/i);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const messageTextArea = screen.getByPlaceholderText(/Mensaje/i);
    const submitButton = screen.getByRole("button", { name: /Enviar/i });

    fireEvent.change(nameInput, { target: { value: "Pablo Alvarado" } });
    fireEvent.change(emailInput, {
      target: { value: "paalvarador@gmail.com" },
    });
    fireEvent.change(messageTextArea, {
      target: { value: "Mensaje de prueba" },
    });

    fireEvent.click(submitButton);

    const successMessage = screen.getByText(/¡Mensaje enviado con éxito!/i);
    expect(successMessage).toBeInTheDocument();
  });
});
