import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";
import { FirstName } from "../../utils/getName";
import { useTranslation, Trans } from 'react-i18next';
const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: "auto",
        marginBottom: "auto",
        "@media (max-width: 768px)": {
            marginLeft: theme.spacing(4),
        },
    },
}));

export const Content = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    return (
        <Container component="main" className={`${classes.main}`} maxWidth="md">
            <Typography variant="h2" component="h1" gutterBottom>
                <TextDecrypt text={`${t('Home.name')}`} />
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                <TextDecrypt text={`${t('Home.introduction')}`} />
                <TextDecrypt text={`${t('Home.job')}`} />
            </Typography>
        </Container>
    );
};
