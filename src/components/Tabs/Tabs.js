import React, { useState } from "react";
import { makeStyles, Tabs, Tab, Typography, Box } from "@material-ui/core";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.main,
        display: "flex",
        width: "100%",
        height: "100%",
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.secondary.main}`,
        width: "200px",
        maxWidth: "200px",
        minWidth: "200px",
    },
    indicator: {
        backgroundColor: "red",
    },
}));

const StyledTabs = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
                classes={{ indicator: classes.indicator }}
            >
                <Tab label="Code Hub" />
                <Tab label="Dar Mounira" />
                <Tab label="Moustache vape store" />
            </Tabs>
            <TabPanel value={value} index={0}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore adipisci explicabo voluptates quos
                deleniti atque eaque neque dolores nemo natus.
            </TabPanel>
            <TabPanel value={value} index={1}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae at perspiciatis molestiae, quos
                perferendis dolor ad nostrum, cum nulla eos voluptatum odit dolores officia architecto suscipit commodi,
                incidunt minus eveniet qui corrupti iste delectus. Sapiente quae at similique expedita nesciunt. Quo
                possimus aut dolor corporis enim rem eius aliquam libero, voluptatem fugit asperiores sit, ex
                consequatur delectus eaque dicta consectetur inventore repudiandae ut distinctio ratione aperiam.
                Doloremque fugiat consequatur reiciendis amet a, commodi autem delectus incidunt doloribus adipisci
                repellat architecto ut. Alias autem, quidem maiores voluptates quaerat eius laudantium? Magnam qui
                provident itaque nesciunt quo nisi consequuntur, ratione a neque!
            </TabPanel>
            <TabPanel value={value} index={2}>
                test
            </TabPanel>
        </div>
    );
};

export default StyledTabs;
