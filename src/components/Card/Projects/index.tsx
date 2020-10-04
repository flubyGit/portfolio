import React from "react";
import "./styled.scss";

interface Project<T> {
  image: T;
  description: T;
  text: T;
  url: T;
}

export default function CardProjects({
  image,
  description,
  text,
  url,
}: Project<string>): JSX.Element {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div id="projects" data-testid="wrapper">
        <img src={image} alt={description} data-testid="image" />
        <h2 data-testid="text">{text}</h2>
      </div>
    </a>
  );
}
