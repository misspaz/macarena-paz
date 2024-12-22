import React, { useRef } from "react";
import { motion } from "framer-motion";
import projectsData from "../../data/projectsData";
import "./WorkSection.scss";
import { Link } from "react-router-dom";

const WorkSection = () => {
  const photographyScrollRef = useRef(null);
  const graphicDesignScrollRef = useRef(null);
  const developmentScrollRef = useRef(null);

  const handleHorizontalScroll = (e, ref) => {
    if (ref.current) {
      e.preventDefault();
      e.stopPropagation();
      ref.current.scrollLeft += e.deltaY;
    }
  };

  const renderProjects = (category) => {
    const filteredProjects = projectsData.filter(
      (project) => project.category === category
    );

    return filteredProjects.map((project) => (
      <motion.div
        key={project.id}
        className="workContainer__section__category__scroll__item"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <Link to={`/project/${project.id}`}>
          <img
            src={project.cover}
            alt={project.title}
            className="project__image"
          />
          <motion.div
            className="project__overlay"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="project__title">{project.title}</h3>
          </motion.div>
        </Link>
      </motion.div>
    ));
  };

  return (
    <div className="workContainer">
      <h1 className="workContainer__section">Work!</h1>

      <div className="workContainer__section__category">
        <h2 className="workContainer__section__category__title">
          Fullstack Development
        </h2>
        <div
          className="workContainer__section__category__scroll"
          ref={developmentScrollRef}
          onWheel={(e) => handleHorizontalScroll(e, developmentScrollRef)}
        >
          {renderProjects("Fullstack Development")}
        </div>
      </div>

      <div className="workContainer__section__category">
        <h2 className="workContainer__section__category__title">Photography</h2>
        <div
          className="workContainer__section__category__scroll"
          ref={photographyScrollRef}
          onWheel={(e) => handleHorizontalScroll(e, photographyScrollRef)}
        >
          {renderProjects("Photography")}
        </div>
      </div>

      <div className="workContainer__section__category">
        <h2 className="workContainer__section__category__title">
          Graphic Design & UX/UI
        </h2>
        <div
          className="workContainer__section__category__scroll"
          ref={graphicDesignScrollRef}
          onWheel={(e) => handleHorizontalScroll(e, graphicDesignScrollRef)}
        >
          {renderProjects("Graphic Design & UX/UI")}
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
