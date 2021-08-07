import React from "react";
import SectionContainer from "../../containers/SectionContainer";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Home = () => {
  return (
    <SectionContainer>
      <Typography variant="body1" color="initial">
        Hi there 👋, i'm
      </Typography>
      <Typography variant="h2" color="initial">
        Mehdi BHA
      </Typography>
      <Typography variant="h3" color="initial">
        I make awesome websites.
      </Typography>
      <Typography variant="body1" color="initial">
        Full stack web developer, UI/UX designer, Freelancer, Github addict.{" "}
      </Typography>
      <Typography variant="body1" color="initial">
        based in sousse, Tunisia.{" "}
      </Typography>
      <Button variant="outlined" color="primary">
        {" "}
        Get in touch
      </Button>
    </SectionContainer>
  );
};

export default Home;
