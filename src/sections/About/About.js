import React from "react";
import SectionContainer from "../../containers/SectionContainer";
import Skills from "../../components/Skills";
import { Grid, Typography } from "@material-ui/core";
import Avatar from "../../components/Avatar";

const About = () => {
  return (
    <SectionContainer>
      <Typography variant="h2" color="initial">
        About me
      </Typography>
      <Grid container alignItems="center">
        <Grid item xs={12} md={7}>
          <Typography variant="body1" color="initial">
            Hello there, my name is Mehdi Ben Hadj Ali and i love doing stuff
            for internet espacially open-source projects. My love for the
            development started when i was 14: i was playing a french video game
            called Dofus and i wanted to automate repetitive things so i built a
            bot for the game (it's not fair i know 🙁).
          </Typography>
          <Skills />
        </Grid>
        <Grid item xs={12} md={5} style={{ flexBasis: "auto" }}>
          <Avatar />
        </Grid>
      </Grid>
      <Typography variant="body1" color="initial"></Typography>
    </SectionContainer>
  );
};

export default About;
