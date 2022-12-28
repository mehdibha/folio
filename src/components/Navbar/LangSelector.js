import React, { useState } from "react";
import { makeStyles, Menu, MenuItem, Button } from "@material-ui/core";
import { KeyboardArrowDownSharp } from "@material-ui/icons";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import "flag-icon-css/css/flag-icon.min.css";

const languages = [
  {
    code: "fr",
    name: "FR",
    country_code: "fr",
  },
  {
    code: "en",
    name: "EN",
    country_code: "gb",
  },
  {
    code: "ur",
    name: "ur",
    country_code: "pk",
  },
];

const LangSelector = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = (code) => {
    debugger;
    i18n.changeLanguage(code);
    setAnchorEl(null);

    if (props.onClose) {
      props.onClose();
    }
  };
  console.log(
    "🚀 ~ file: LangSelector.js:35 ~ handleClose ~ handleClose",
    handleClose
  );

  //For language translation switch the language when the code matchs.
  const currentLanguage = languages.find((elem) => elem.code === t("language"));
  console.log(
    "🚀 ~ file: LangSelector.js:41 ~ LangSelector ~ currentLanguage",
    currentLanguage
  );

  return (
    <div {...props}>
      <Button
        variant="contained"
        color="primary"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        {/* Flag Icon, Language */}
        {currentLanguage && (
          <>
            <span
              className={`flag-icon flag-icon-${currentLanguage.country_code} ${classes.flagIcon}`}
            />
            {currentLanguage.name}
          </>
        )}
        <KeyboardArrowDownSharp style={{ color: "white" }} />
      </Button>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        keepMounted
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        className={classes.profileMenu}
        disableScrollLock
      >
        {/* Flag Icon and Name */}
        {/* 1. ENG */}
        <MenuItem
          className={classes.menuItem}
          onClick={() => handleClose("en")}
        >
          <span className={`flag-icon flag-icon-gb ${classes.flagIcon}`} />
          EN
        </MenuItem>
        {/* 2. FRN */}
        <MenuItem
          className={classes.menuItem}
          onClick={() => handleClose("fr")}
        >
          <span className={`flag-icon flag-icon-fr ${classes.flagIcon}`} />
          FR
        </MenuItem>
        {/* 3. URU */}
        <MenuItem
          className={classes.menuItem}
          onClick={() => handleClose("ur")}
        >
          <span className={`flag-icon flag-icon-pk ${classes.flagIcon}`} />
          UR
        </MenuItem>
      </Menu>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  profileMenu: {
    "& .MuiPaper-root": {
      backgroundColor: theme.palette.primary.main,
      marginTop: "2px",
      boxShadow: theme.shadows[4],
    },
  },
  menuItem: {
    "&:hover": {
      backgroundColor: theme.backgroundSecondary,
    },
  },
  flagIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default LangSelector;
