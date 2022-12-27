import React from "react";
import SectionContainer from "../../containers/SectionContainer";
import Tabs from "../../components/Tabs/Tabs";
import { useTranslation } from "react-i18next";

const Experience = () => {

  const { t } = useTranslation()

  return (
    <SectionContainer id="experience" title={t("experience")} maxWidth="sm" padding="120" reverse>
      <Tabs />
    </SectionContainer>
  );
};

export default Experience;
