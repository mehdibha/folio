import React from "react";
import { makeStyles } from "@material-ui/core";
import AvatarImg from "../../assets/images/avatar.jpg";

const Avatar = () => {
  const classes = useStyles();
  return (
      <img src={AvatarImg} alt="Mehdi BHA" className={classes.avatarImg} />
  );
};

const useStyles = makeStyles((theme) => ({
  avatarImg: {
    borderRadius:'50%',
    width:"270px",
    height:"270px",
    objectFit:'cover',
    boxShadow:theme.shadows[10]
  },
}));

export default Avatar;
