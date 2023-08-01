import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {Link} from 'react-scroll';
import { Person, HomeOutlined,Computer,Description } from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

function NavBar() {
  const theme = useTheme();
  const [expand, updateExpanded] = useState(false);
  const [navColor, updateNavbar] = useState(false);
  const { t } = useTranslation();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar expanded={expand} fixed="top" expand="md"  className={navColor ? 'sticky' : 'navbar'} >
      <Container style={{ justifyContent: 'start' }}>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : 'expanded');
            updateNavbar(expand ? false : true);
          }}
        >
          <span style={{ background: theme.palette.foreground.default }}></span>
          <span style={{ background: theme.palette.foreground.default }}></span>
          <span style={{ background: theme.palette.foreground.default }}></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" style={{ justifyContent: 'start' }}>
          <Nav defaultActiveKey="#home">
            <Nav.Item style={{ color: theme.palette.foreground.default }}>
              <Link
                to="Home"
                onClick={() => {
                  updateExpanded(false);
                  updateNavbar(false);
                }}
                smooth={true}
                duration={200}
              >
                <HomeOutlined style={{ marginBottom: '2px' }} /> {t('Home.nav_home')}
              </Link>
            </Nav.Item>
            <Nav.Item style={{ color: theme.palette.foreground.default }}>
              <Link
                to="About"
                onClick={() => {
                  updateExpanded(false);
                  updateNavbar(false);
                }}
                smooth={true}
                duration={200}
              >
                <Person style={{ marginBottom: '2px' }} /> {t('Home.nav_about')}
              </Link>
            </Nav.Item>
            <Nav.Item style={{ color: theme.palette.foreground.default }}>
              <Link
                to="Project"
                onClick={() => {
                  updateExpanded(false);
                  updateNavbar(false);
                }}
                smooth={true}
                duration={200}
              >
                <Computer style={{ marginBottom: '2px' }} /> {t('Home.nav_project')}
              </Link>
            </Nav.Item>
            <Nav.Item style={{ color: theme.palette.foreground.default }}>
              <Link
                to="Resume"
                onClick={() => {
                  updateExpanded(false);
                  updateNavbar(false);
                }}
                smooth={true}
                duration={200}
              >
                <Description style={{ marginBottom: '2px' }} />  {t('Home.nav_Resume')}
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
