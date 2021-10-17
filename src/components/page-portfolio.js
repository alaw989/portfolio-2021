import { PageStyles } from '../styles/components/_section-body.js';
import { TitleStyles } from '../styles/components/_section-title.js';
import FadeIn from 'react-fade-in';
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import { opacityContext } from '../contexts/siteContext';
import { useContext } from 'react';
import { PortfolioStyles } from "../styles/components/_section-portfolio.js";
import miami from "../img/miami.png";
import gutterhelmet from "../img/gutterhelmet.png";

const Portfolio = () => {

    const { opacity } = useContext(opacityContext);

    return ( 
        <PageStyles opacity={opacity}>
        <Container fluid>
            <Row className="justify-content-center">
                <Col xs={11}>
                    <TitleStyles internal>
                        <div className="title-container">
                            <div className="title-wrapper">
                                <h1 className="title">
                                    <FadeIn transitionDuration={2000} delay={100} className="letter">M</FadeIn>
                                    <FadeIn transitionDuration={2000} delay={200} className="letter margin-r">y</FadeIn>
                                    <FadeIn transitionDuration={2000} delay={300} className="letter ">P</FadeIn>
                                    <FadeIn transitionDuration={2000} delay={400} className="letter">o</FadeIn>
                                    <FadeIn transitionDuration={2000} delay={500} className="letter">r</FadeIn>
                                    <FadeIn transitionDuration={2000} delay={600} className="letter">t</FadeIn>
                                    <FadeIn transitionDuration={2000} delay={700} className="letter">f</FadeIn>
                                    <FadeIn transitionDuration={2000} delay={800} className="letter">o</FadeIn>
                                    <FadeIn transitionDuration={2000} delay={900} className="letter">l</FadeIn>
                                    <FadeIn transitionDuration={2000} delay={1000} className="letter">i</FadeIn>
                                    <FadeIn transitionDuration={2000} delay={1100} className="letter">o</FadeIn>
                                </h1>
                            </div>
                            <FadeIn delay={1000} transitionDuration={2000}>
                                <p className="subtitle">
                                    A small gallery of recent projects chosen by me. 
                                </p>
                            </FadeIn>
                        </div>
                    </TitleStyles>
                </Col>
                <Col xs={12} className="p-0">
                <FadeIn delay={2000} transitionDuration={2000}>
                <PortfolioStyles>
                    <div className="section-portfolio">
                        <ul className="portfolio-wrapper">
                            <li className="portfolio-block" style={ {backgroundImage: `url(${miami})`} }>

                            </li>
                            <li className="portfolio-block" style={ {backgroundImage: `url(${gutterhelmet})`} }>

                            </li>
                            <li className="portfolio-block" style={ {backgroundImage: `url(${miami})`} }>

                            </li>
                            <li className="portfolio-block" style={ {backgroundImage: `url(${gutterhelmet})`} }>

                            </li>
                            <li className="portfolio-block" style={ {backgroundImage: `url(${gutterhelmet})`} }>

                            </li>
                            <li className="portfolio-block" style={ {backgroundImage: `url(${miami})`} }>

                            </li>
                        </ul>
                    </div>
                </PortfolioStyles>
                </FadeIn>
                </Col>
            </Row>
        </Container>
    </PageStyles>
    );
}
 
export default Portfolio;