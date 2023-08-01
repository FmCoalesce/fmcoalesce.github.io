import React from "react";
import Helmet from "react-helmet";
import Resume from "../settings/resume.json";
import Settings from "../settings/settings.json";
import { useTranslation, Trans } from 'react-i18next';

export const HelmetMeta = () => {
    const { t } = useTranslation();
    return (
        <Helmet>
            <meta name="theme-color" content={Settings.colors.primary} />
            <title>{t('Home.meta_name')} | {t('Home.meta_job')}  ,{t('Home.meta_city')}</title>
            <meta name="author" content={t('Home.meta_name')} />
            <meta name="description" content={Resume.basics.description} />
            <meta name="keywords" content={Resume.basics.keywords} />
        </Helmet>
    );
};
