import styles from "./page.module.css";
import Header from "@/components/Header";
import About from "@/components/About";
import Interests from "@/components/Interests";
import ContactForm from "@/components/ContactForm";
import {
  faUser,
  faHeart,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.profile_container_left}>
        <Header username="paalvarador" imageProfile="profile.jpg" />
        <Interests
          icon={faHeart}
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
      </div>
      <div className={styles.profile_right}>
        <About
          icon={faUser}
          title="Acerca de mí"
          description="Mi nombre es Pablo Alvarado, soy Ingeniero en Sistemas especializado en FullStack developer. Tengo un stack tecnológico bastante amplio el cual incluye tecnologías como HTML, CSS, JavaScript, Python, Node, React.js, Express.js, Node.js, Django, Flask, Laravel entre otros. Además tengo conocimiento en diseño e implementación de bases de datos como MySQL, Postrgresql, Oracle, entre otros"
        />

        <ContactForm title="Contacto" icon={faEnvelope} />
      </div>
    </div>
  );
}
