import React from "react";
import SectionContainer from "../../containers/SectionContainer";
import ProjectsGallery from "../../components/ProjectsGallery";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation()
  return (
    <SectionContainer id="projects" title={t('menu_projects')} maxWidth="md">
      <ProjectsGallery />
    </SectionContainer>
  );
};

export default Projects;
