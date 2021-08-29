import React from "react";
import SectionContainer from "../../containers/SectionContainer";
import ProjectsGallery from "../../components/ProjectsGallery";

const Projects = () => {
  return (
    <SectionContainer id="projects" title="Projects" maxWidth="md">
      <ProjectsGallery />
    </SectionContainer>
  );
};

export default Projects;
