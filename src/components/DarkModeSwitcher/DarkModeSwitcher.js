import React, { useContext } from "react";
import { Switch, FormControlLabel } from "@material-ui/core";
import themeContext from "../../contexts/themeContext";

const DarkModeSwitcher = () => {
    const { isDarkMode, setIsDarkMode } = useContext(themeContext);
    return (
        <FormControlLabel
            control={
                <Switch
                    checked={isDarkMode}
                    name="checkedDarkMode"
                    color="primary"
                    onChange={() => setIsDarkMode(!isDarkMode)}
                />
            }
            label="Dark Mode"
        />
    );
};

export default DarkModeSwitcher;
