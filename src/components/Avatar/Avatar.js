import React from "react";
import { Paper, makeStyles } from "@material-ui/core";
import AvatarImg from "../../assets/images/avatar.jpg";

const Avatar = () => {
  const classes = useStyles();
  return (
    <Paper>
      <img src={AvatarImg} alt="Mehdi BHA" className={classes.avatarImg} />{" "}
    </Paper>
  );
};

const useStyles = makeStyles((theme) => ({
  avatarImg: {
    width: "300px",
  },
}));

export default Avatar;
