import React from "react";
import { useParams } from "react-router-dom";
import "./Project.scss";
import projectsData from "../../data/projectsData";
import NextJSIcon from "../../assets/techIcons/next-js.svg";
import AngularIcon from "../../assets/techIcons/angular.svg";
import FigmaIcon from "../../assets/techIcons/figma.svg";
import MySQLIcon from "../../assets/techIcons/mysql.svg";
import NodeJSIcon from "../../assets/techIcons/node-js.svg";
import ReactIcon from "../../assets/techIcons/react.svg";
import VSCodeIcon from "../../assets/techIcons/visual-studio-code.svg";

const techIcons = {
  "Next.js": <img src={NextJSIcon} alt="Next.js" />,
  "Node.js": <img src={NodeJSIcon} alt="Node.js" />,
  "Angular": <img src={AngularIcon} alt="Angular.js" />,
  "Figma": <img src={FigmaIcon} alt="Figma" />,
  "MySQL": <img src={MySQLIcon} alt="MySQL" />,
  "React": <img src={ReactIcon} alt="React.js" />,
  "VSCode": <img src={VSCodeIcon} alt="Visual Studio Code" />,
};

const Project = () => {
  const { projectId } = useParams();

  const project = projectsData.find((project) => project.id === projectId);

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  const techArray = project.technologies.split(", ");

  return (
    <div className="projectPage">
      <div className="projectPage__info">
        <div className="projectPage__info__boxes">
          <h2 className="projectPage__info__boxes__title">Title</h2>
          <p className="projectPage__info__boxes__text">{project.title}</p>
        </div>

        <div className="projectPage__info__boxes">
          <h2 className="projectPage__info__boxes__title">Client</h2>
          <p className="projectPage__info__boxes__text">{project.client}</p>
        </div>

        <div className="projectPage__info__boxes">
          <h2 className="projectPage__info__boxes__title">Technologies</h2>
          <div className="projectPage__info__boxes__techIcons">
            {techArray.map((tech, index) => (
              <span
                key={index}
                className="projectPage__info__boxes__techIcons__icon"
                data-tooltip={tech}
              >
                {techIcons[tech] || tech}
              </span>
            ))}
          </div>
        </div>

        <div className="projectPage__info__boxes">
          <h2 className="projectPage__info__boxes__title">Year</h2>
          <p className="projectPage__info__boxes__text">{project.year}</p>
        </div>

        <div className="projectPage__info__boxes">
          <h2 className="projectPage__info__boxes__title">Brief</h2>
          <p className="projectPage__info__boxes__text">{project.brief}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
