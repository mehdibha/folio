import React from "react";
import { Box, Button, FormControlLabel, makeStyles, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";

const MessageBox = () => {
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            email: "",
            message: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Mail is not valid"),
            message: Yup.string(),
        }),
        onSubmit: (values) => {},
    });
    return (
        <div>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
                <TextField
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    helperText={formik.touched.email && formik.errors.email}
                    variant="filled"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email adress"
                    name="email"
                />
                <TextField
                    error={Boolean(formik.touched.message && formik.errors.message)}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    helperText={formik.touched.message && formik.errors.message}
                    variant="filled"
                    margin="normal"
                    fullWidth
                    name="message"
                    label="Message"
                    type="text"
                    id="message"
                    multiline
                    minRows={5}
                    // className={classes.messageField}
                />
                <Box display="flex" justifyContent='center' mt={2}>
                    <Button
                        className={classes.submitBtn}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Send message
                    </Button>
                </Box>
            </form>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    form: {
        width: "100%", // Fix IE 11 issue.
    },
    submitBtn: {
        width: "200px",
    },
    // messageField:{
    //     height:"600px"
    // }
}));

export default MessageBox;
