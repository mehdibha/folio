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
];

const LangSelector = (props) => {
    const classes = useStyles();
    const { t } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClose = (code) => {
        i18n.changeLanguage(code);
        setAnchorEl(null);
        if (props.onClose) {
            props.onClose();
        }
    };

    const currentLanguage = languages.find((elem) => elem.code === t("language"));

    return (
        <div {...props}>
            <Button variant="contained" color="primary" onClick={(e) => setAnchorEl(e.currentTarget)}>
                {currentLanguage && (
                    <>
                        <span className={`flag-icon flag-icon-${currentLanguage.country_code} ${classes.flagIcon}`} />
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
                <MenuItem className={classes.menuItem} onClick={() => handleClose("en")}>
                    <span className={`flag-icon flag-icon-gb ${classes.flagIcon}`} />
                    EN
                </MenuItem>
                <MenuItem className={classes.menuItem} onClick={() => handleClose("fr")}>
                    <span className={`flag-icon flag-icon-fr ${classes.flagIcon}`} />
                    FR
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
