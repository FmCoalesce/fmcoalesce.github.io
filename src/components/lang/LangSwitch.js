import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeProvider";
import { Tooltip, IconButton, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GTranslateOutlined } from "@material-ui/icons";
import { useTranslation } from 'react-i18next';
const useStyles = makeStyles((theme) => ({
    iconButton: {
        position: "fixed",
        top: theme.spacing(2),
        right: theme.spacing(14),
        height: "2.5rem",
        width: "2.5rem",
        zIndex:2000,
    },
    icon: {
        fontSize: "1.25rem",
    },
}));

export const LangSwitch = () => {
    const { theme } = useContext(ThemeContext);
    const classes = useStyles();
    const { i18n } = useTranslation();

    return (
        <Tooltip
            title={"Toggle theme"}
            placement="right"
            TransitionComponent={Zoom}
        >
            <IconButton
                color="inherit"
                onClick={() => i18n.changeLanguage(i18n.language === 'en-US' ? 'zh-CN' : 'en-US')}
                aria-label={"Toggle"}
                className={classes.iconButton}
            >
                {theme === "light" ? (
                    <GTranslateOutlined className={classes.icon} />
                ) : (
                    <GTranslateOutlined className={classes.icon} />
                )}
            </IconButton>
        </Tooltip>
    );
};
