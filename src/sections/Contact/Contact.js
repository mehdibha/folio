import React from "react";
import SectionContainer from "../../containers/SectionContainer";
import MessageBox from "../../components/MessageBox/MessageBox";

const Contact = () => {
  return (
    <SectionContainer title="Contact" maxWidth="700" reverse>
      <MessageBox />
    </SectionContainer>
  );
};

export default Contact;
