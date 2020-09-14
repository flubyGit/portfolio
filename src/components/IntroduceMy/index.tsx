import React from "react";
import "./styled.scss";
import { FaGithub, FaDiscord, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import developer from "../../assets/images/developer.png";
import myPhoto from "../../assets/images/icons/myPhoto.jpeg";
import Card from "../Card";

export default function IntroduceMy(): JSX.Element {
  return (
    <section>
      <div>
        <figure>
          <img src={developer} alt="" />
        </figure>
        <h2>Contato</h2>
        <section id="contact">
          <Card title="Discord" description="...this">
            <FaDiscord size={25} />
          </Card>
          <Card title="Whatsapp" description="(11) 973813705">
            <FaWhatsapp size={25} />
          </Card>
          <Card title="Linkedin" description="www.linkedin.com/in/devfandre/">
            <FaLinkedin size={25} />
          </Card>
          <Card title="Github" description="https://github.com/flubyGit">
            <FaGithub size={25} />
          </Card>
        </section>
      </div>
      <h2>Introdução</h2>
      <section id="introduce">
        <i>
          <img src={myPhoto} alt="Felipe André" />
        </i>
        <article>
          &quot;Meu nome é Felipe André e tenho 19 anos e moro na região oeste
          de São Paulo. Sou estudante de tecnologia desde os 17 anos e sou grato
          pelo progresso que venho aprendendo com a{" "}
          <abbr title="World Wide Web">web</abbr> e com esse mundo vasto da web
          em si. Adoro front-end, javascript, back-end e estou em constante
          evolução para me tornar um desenvolvedor full-stack melhor a cada
          dia!&quot;
        </article>
      </section>
    </section>
  );
}
