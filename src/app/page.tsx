import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import About from "@/components/About";
import Interests from "@/components/Interests";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div>
      <Header username="paalvarador" imageProfile="profile.jpg" />
      <About
        title="Acerca de mí"
        description="Mi nombre es Pablo Alvarado, soy Ingeniero en Sistemas especializado en FullStack developer. Tengo un stack tecnológico bastante amplio el cual incluye tecnologías como HTML, CSS, JavaScript, Python, Node, React.js, Express.js, Node.js, Django, Flask, Laravel entre otros. Además tengo conocimiento en diseño e implementación de bases de datos como MySQL, Postrgresql, Oracle, entre otros"
      />
      <Interests
        title="Intereses y Gustos"
        interests={[
          "Caminar por la ciudad",
          "Conocer nuevos lugares",
          "Disfrutar con mi familia el mayor tiempo posible",
          "Tocar guitarra",
          "Ver futbol",
          "Hacer crossfit",
          "Aprender Ingles",
        ]}
      />
      <ContactForm />
    </div>
  );
}
