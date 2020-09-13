import React from "react";
import "./styled.scss";

import SocialMedia from "./SocialMedia";

const date: number = new Date().getFullYear();

export default function Footer(): JSX.Element {
  return (
    <footer>
      <SocialMedia />
      <aside>
        <p>
          Página feita com <span>Typescript</span> e{" "}
          <span>
            <abbr title="Syntactically Awesome Style Sheets">Sass</abbr>
          </span>
        </p>
        <span>{date} &mdash; Felipe André</span>
      </aside>
    </footer>
  );
}
