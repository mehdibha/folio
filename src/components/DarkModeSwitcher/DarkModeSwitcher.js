import React, { useContext } from "react";
import { Switch, FormControlLabel } from "@material-ui/core";
import ThemeContext from "../../contexts/themeContext";
import { useTranslation } from "react-i18next";

const DarkModeSwitcher = ({ onClose }) => {
    const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
    const { t } = useTranslation()
    return (
        <FormControlLabel
            control={
                <Switch
                    checked={isDarkMode}
                    name="checkedDarkMode"
                    color="primary"
                    onChange={() => {
                        if (onClose) {
                            onClose();
                        }
                        setIsDarkMode(!isDarkMode);
                    }}
                />
            }
            label={t('dark_mode')}
        />
    );
};

export default DarkModeSwitcher;
