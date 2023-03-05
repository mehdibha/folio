import React from "react";
import SectionContainer from "../../containers/SectionContainer";
import MessageBox from "../../components/MessageBox/MessageBox";

// useTranslation from react-il8next
import { useTranslation } from "react-i18next";

const Contact = () => {

  const { t } = useTranslation();
  return (
    <SectionContainer id="contact" title={t("contact")} maxWidth="sm" reverse>
      <MessageBox />
    </SectionContainer>
  );
};

export default Contact;
