"use client";

import React, { FormEvent, use, useState } from "react";
import styles from "@/styles/ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target?.name]: event.target?.value });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Validación básica
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <section className={styles.contact}>
      <h2>Contacto</h2>
      {submitted ? (
        <p>¡Mensaje enviado con éxito!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            id="message"
            placeholder="Mensaje"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
