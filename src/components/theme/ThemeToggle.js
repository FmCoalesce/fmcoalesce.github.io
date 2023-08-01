import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { Tooltip, IconButton, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Brightness4, Brightness7 } from "@material-ui/icons";
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    iconButton: {
        position: "fixed",
        top: theme.spacing(2),
        right: theme.spacing(6),
        height: "2.5rem",
        width: "2.5rem",
        zIndex:2000,
    },
    icon: {
        fontSize: "1.25rem",
    },
}));

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const classes = useStyles();
    const { t } = useTranslation();
    return (
        <Tooltip
            title={t('Home.ToggleTheme')}
            placement="bottom"
            TransitionComponent={Zoom}
        >
            <IconButton
                color="inherit"
                onClick={toggleTheme}
                aria-label={"Toggle"}
                className={classes.iconButton}
            >
                {theme === "light" ? (
                    <Brightness4 className={classes.icon} />
                ) : (
                    <Brightness7 className={classes.icon} />
                )}
            </IconButton>
        </Tooltip>
    );
};
