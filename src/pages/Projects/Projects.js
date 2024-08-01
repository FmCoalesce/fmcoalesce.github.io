import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import chatify from "../../assets/Projects/portfolio.png";
import onboard from "../../assets/Projects/onboard.jpg";
import onboard_m from "../../assets/Projects/onboard_m.png";
import learn from "../../assets/Projects/learn.png";
import { useTheme } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
function Projects() {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Container fluid className="project-section" id="Project"  style={{ background: theme.info.background }}>
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading" style={{color:theme.palette.foreground.default}}>
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{color:theme.palette.foreground.default}}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }} >
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Portfolio"
              description={t('Project.portfolio_desc')}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onboard}
              isBlog={false}
              title="Onboard.Workspace"
              description={t('Project.onboard_desc')}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onboard_m}
              isBlog={false}
              title="Onboard.Mobile"
              description={t('Project.onboard_m_desc')}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={learn}
              isBlog={false}
              title="Learn Management System"
              description={t('Project.onboard_m_desc')}
            />
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}


export default Projects;
