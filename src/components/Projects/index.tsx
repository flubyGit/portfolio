import React from "react";

import "./styled.scss";
import bootstrapClone from "../../assets/images/clones/bootstrap.png";
import dropboxClone from "../../assets/images/clones/dropbox.png";
import ecoletaClone from "../../assets/images/clones/ecoleta.png";
import githubClone from "../../assets/images/clones/github.png";
import linkedinClone from "../../assets/images/clones/linkedin.png";
import npmClone from "../../assets/images/clones/npm.png";
import reduxClone from "../../assets/images/clones/redux.png";
import sassClone from "../../assets/images/clones/sass.png";
import mouse from "../../assets/images/icons/mouse.png";
import CardProjects from "../Card/Projects";

export default function Projects(): JSX.Element {
  return (
    <section id="projects">
      <h2>
        Projetos <img src={mouse} alt="Imagem ilustrativa de um mouse" />
      </h2>
      <div id="card-projects">
        <CardProjects
          image={linkedinClone}
          description="Clonando a interface web do linkedin"
          text="Clonando a interface web do linkedin"
          url="https://ui-clone-linkedin.flubygit.vercel.app/"
        />
        <CardProjects
          image={bootstrapClone}
          description="Clonando a interface web do bootstrap"
          text="Clonando a interface web do bootstrap"
          url="https://ui-clone-bootstrap.flubygit.vercel.app/"
        />
        <CardProjects
          image={dropboxClone}
          description="Clonando a interface web do dropbox"
          text="Clonando a interface web do dropbox"
          url=""
        />
        <CardProjects
          image={ecoletaClone}
          description="Clonando a interface web da Next Level Week Ecoleta"
          text="Clonando a interface web da Next Level Week Ecoleta"
          url="https://ecoleta-xi.vercel.app/"
        />
        <CardProjects
          image={githubClone}
          description="Clonando a interface web do github"
          text="Clonando a interface web do github"
          url="https://ui-clone-github.vercel.app/"
        />
        <CardProjects
          image={npmClone}
          description="Clonando a interface web do npm"
          text="Clonando a interface web do npm"
          url="https://ui-clone-npm.flubygit.vercel.app/"
        />
        <CardProjects
          image={reduxClone}
          description="Clonando a interface web do redux"
          text="Clonando a interface web do redux"
          url="https://ui-clone-redux.flubygit.vercel.app/"
        />
        <CardProjects
          image={sassClone}
          description="Clonando a interface web do SASS"
          text="Clonando a interface web do SASS"
          url="https://ui-clone-sass.flubygit.vercel.app/"
        />
      </div>
    </section>
  );
}
