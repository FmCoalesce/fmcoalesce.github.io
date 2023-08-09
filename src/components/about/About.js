import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.png";
import { useTheme } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import vueImg from "../../assets/vue.svg";
import reactImg from "../../assets/react.svg";
import htmlImg from "../../assets/html.svg";
import muImg from "../../assets/material-ui.svg";
import css3Img from "../../assets/css3.svg";
import javascriptImg from "../../assets/javascript.svg";
import typescriptImg from "../../assets/typescript.svg";
import tailwindcssImg from "../../assets/tailwindcss.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';
const useStyles = makeStyles((theme) => ({
  skillIcons: {
    padding: '0.25rem 0.75rem',
    borderRadius: '1.5rem',
    backgroundColor: theme.palette.iconBackground.default,
    margin: '0.2rem',
    display:"inline-block",
    color: theme.palette.iconColor.default,
    verticalAlign: 'middle',
  },
}));
function Home2() {
  AOS.init({
    duration : 1000,
    easing: 'ease-out-back',  
    delay: 0
})
  const theme = useTheme();
  const { t } = useTranslation();

  const classes = useStyles();
  return (
    <Container fluid className="home-about-section" id="About" style={{ background: theme.info.background }}>
      <Container>
        <Row>
        <Col md={12} className="my-avatar" data-aos="zoom-in-down">
          <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
          <Col md={12} className="home-about-description">
            <h2 data-aos="zoom-in-up" style={{ fontSize: "2.6em" , color: theme.palette.foreground.default}}>
            {t('About.title')} <span className="purple">  </span> 
            </h2>
            <div className="home-about-body"  style={{ color: theme.palette.foreground.default }}  >
            <p data-aos="zoom-in-left">&nbsp;&nbsp;&nbsp;&nbsp;{t('About.introduction_job')}</p> 
            <br />
            <p data-aos="zoom-in-up" > &nbsp;&nbsp;&nbsp;&nbsp;{t('About.introduction_skill')}
              <span  className={classes.skillIcons}>  <img src={htmlImg}  style={{ width: "20px"} } alt="html" /> html</span>
              <span  className={classes.skillIcons}>  <img src={javascriptImg}  style={{ width: "20px"} } alt="Javascript" /> javascript</span>
              <span  className={classes.skillIcons}>  <img src={css3Img}  style={{ width: "20px"} } alt="css" /> css</span>
              <span  className={classes.skillIcons}>  <img src={vueImg}  style={{ width: "20px"} } alt="vue" /> vue</span>
              <span  className={classes.skillIcons}>  <img src={typescriptImg}  style={{ width: "20px"} } alt="typescript" /> typescript</span>
       
              {t('About.introduction_build')}</p> 
              <br />
              <p data-aos="zoom-in-right" >&nbsp;&nbsp;&nbsp;&nbsp;{t('About.introduction_spare')}
              <span  className={classes.skillIcons}>  <img src={muImg}  style={{ width: "20px"} } alt="material" /> material-ui</span>
              <span  className={classes.skillIcons}>  <img src={tailwindcssImg}  style={{ width: "20px"} } alt="tailwindcss" /> tailwindcss</span>
              <span  className={classes.skillIcons}>  <img src={reactImg}  style={{ width: "20px"} } alt="react" /> react</span>
              {t('About.introduction_F_project')}</p> 
              <br />
              <p data-aos="zoom-in-down">&nbsp;&nbsp;&nbsp;&nbsp;{t('About.introduction_contact')}</p> 
   
     
            </div>
          </Col>
    
        </Row>
        <Row>
          {/* <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
