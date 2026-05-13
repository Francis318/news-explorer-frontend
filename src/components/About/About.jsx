import "./About.css";
import aboutImage from "../../images/author.jpeg";

function About() {
  return (
    <section className="about">
      <img className="about__image" src={aboutImage} alt="Author" />
      <div className="about__info">
        <h2 className="about__title">Sobre el autor</h2>
        <p className="about__description">
          Hola, soy Francisco Reyes, ingeniero en robótica y desarrollador
          backend apasionado por la tecnología y el aprendizaje continuo.
          Actualmente me especializo en desarrollo web utilizando JavaScript,
          Node.js y React, creando proyectos enfocados en APIs, aplicaciones
          funcionales y buenas prácticas de programación. Me interesa
          especialmente el desarrollo de software, la automatización y la
          creación de soluciones tecnológicas que puedan resolver problemas
          reales. Constantemente busco mejorar mis habilidades mediante
          proyectos personales y nuevos retos que me permitan seguir creciendo
          profesionalmente dentro de la industria tecnológica.
        </p>
      </div>
    </section>
  );
}

export default About;
