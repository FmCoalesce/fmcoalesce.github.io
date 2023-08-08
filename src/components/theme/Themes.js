import { createTheme, responsiveFontSizes } from '@material-ui/core';
import Settings from '../../settings/settings.json';

export const primary = `${Settings.colors.primary}`;
export const secondary = `${Settings.colors.secondary}`;
export const black = `${Settings.colors.black}`;
export const white = `${Settings.colors.white}`;

export const cardColorWhite = `${Settings.colors.cardColorWhite}`;
export const cardColorDark = `${Settings.colors.cardColorDark}`;
export const infoBgWhite = `${Settings.colors.infoBgWhite}`;
export const infoBgDark = `${Settings.colors.infoBgDark}`;
export const LightTheme = responsiveFontSizes(
  createTheme({
    palette: {
      type: 'light',
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
      background: {
        default: white,
      },
      foreground: {
        default: black,
      }
    },
    typography: {
      fontSize: 16,
      htmlFontSize: 16,
      h2: {
        fontWeight: 500,
      },
      h5: {
        fontWeight: 500,
        fontFamily: 'canger',
      },
      body1: {
        fontWeight: 500,
        fontFamily: 'canger',
      },
    },
      info: {
        background: infoBgWhite,
        card: cardColorWhite
      },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            color: black,
            backgroundColor: white,
          },
        },
      },
      'Nav': {
        color: white
      },
      MuiIconButton: {
        root: {
          boxShadow:
            '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
          '&:hover': {
            backgroundColor: primary,
          },
          transition: 'all 0.5s ease',
        },
      },
      MuiFab: {
        root: {
          width: '2.5rem',
          height: '2.5rem',
          fontSize: '1.25rem',
        },
        primary: {
          color: black,
          backgroundColor: 'transparent',
          '&:hover': {
            color: black,
            backgroundColor: primary,
          },
          transition: 'all 0.5s ease !important',
        },
      },
      MuiSpeedDialAction: {
        fab: {
          color: white,
          backgroundColor: 'transparent',
          '&:hover': {
            color: white,
            backgroundColor: primary,
          },
          transition: 'all 0.5s ease',
          margin: '0px',
          marginBottom: '16px',
        },
      },
      MuiTooltip: {
        tooltip: {
          fontFamily: 'canger',
          backgroundColor: primary,
          color: black,
          fontSize: 11,
        },
      },
    },
  })
);

export const DarkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
      background: {
        default: black,
      },
      foreground: {
        default: white,
      },
     
    },
    info: {
      background: infoBgDark,
      card: cardColorDark
    },
    typography: {
      fontSize: 16,
      htmlFontSize: 16,
      h2: {
        fontWeight: 500,
      },
      h5: {
        fontWeight: 500,
        fontFamily: 'canger',
      },
      body1: {
        fontWeight: 500,
        fontFamily: 'canger',
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            color: white,
            backgroundColor: black,
          },
        },
      },
      'nav-link': {
        text: {
          color: white
        }
       
      },
      MuiIconButton: {
        root: {
          boxShadow:
            '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
          '&:hover': {
            backgroundColor: primary,
          },
          transition: 'all 0.5s ease',
        },
      },
      MuiFab: {
        root: {
          width: '2.5rem',
          height: '2.5rem',
          fontSize: '1.25rem',
        },
        primary: {
          color: white,
          backgroundColor: 'transparent',
          '&:hover': {
            color: white,
            backgroundColor: primary,
          },
          transition: 'all 0.5s ease !important',
        },
      },
      MuiSpeedDialAction: {
        fab: {
          color: white,
          backgroundColor: 'transparent',
          '&:hover': {
            color: white,
            backgroundColor: primary,
          },
          transition: 'all 0.5s ease',
          margin: '0px',
          marginBottom: '16px',
        },
      },
      MuiTooltip: {
        tooltip: {
          fontFamily: 'canger',
          backgroundColor: primary,
          color: white,
          fontSize: 11,
        },
      },
    },
  })
);