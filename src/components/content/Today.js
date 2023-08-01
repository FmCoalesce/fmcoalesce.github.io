import React from "react";
import { Typography } from "@material-ui/core";
import { useTranslation } from 'react-i18next';

export const Today = () => {
    const { t } = useTranslation();
    var date = new Date();
    var hour = date.getHours();
    var time = `${
        (hour < 4 && t('Home.goodNight')) ||
        (hour < 12 && t('Home.goodMorning')) ||
        (hour < 19 && t('Home.goodAfternoon')) ||
        (hour < 22 && t('Home.goodEvening')) ||
        t('Home.goodNight')
    }`;
    var days = [
        "weekend",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "weekend",
    ];
    var day = days[date.getDay()];

    return (
        <Typography variant="h5" component="h2"   style={{ margin: "0 0 20px 30px" }}>
            {day === "weekend" ? t('Home.goodWeekend') : time}.
        </Typography>
    );
};
