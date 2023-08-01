import React from 'react';
// import { LogoLink } from '../components/logo/LogoLink';
import { Content } from '../components/content/Content';
// import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DisplacementSphere from '../components/background/DisplacementSphere';
// import { ThemeToggle } from '../components/theme/ThemeToggle';
// import { FooterText } from '../components/footer/FooterText';
// import { SocialIcons } from '../components/content/SocialIcons';
// import { SpeedDials } from '../components/speedDial/SpeedDial';
import { Today } from '../components/content/Today';;
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100vw',
    overflow: 'hidden',
  },
}));

export const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div id='Home' className={classes.root}>

        {/* <LogoLink /> */}
        <Content />
        <DisplacementSphere />
    
        <Today>
        </Today>
        {/* <Hidden mdUp> */}
          {/* <SpeedDials /> */}
        {/* </Hidden> */}
        {/* <FooterText /> */}
      </div>
    </>
  );
};
