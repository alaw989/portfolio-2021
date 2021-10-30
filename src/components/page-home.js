import { PageStyles } from '../styles/components/_section-body.js';
import { TitleStyles } from '../styles/components/_section-title.js';
import FadeIn from 'react-fade-in';
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import { opacityContext } from '../contexts/siteContext';
import { useContext } from 'react';
import pluto from '../img/pluto.png';

const Home = () => {

    const { opacity } = useContext(opacityContext);
  
	return (
		<PageStyles opacity={opacity}>
            <div className="austin-bg" style={{ backgroundImage: `linear-gradient(to left, transparent, #1d1d1d), url(${pluto})` }}></div>
			<Container fluid>
				<Row className="justify-content-center">
					<Col xs={11} md={10} lg={9}>
                        <TitleStyles hero>
                        <div className="title-container">
                                <div className="title-wrapper">
                                    <h1 className="title">
                                    <FadeIn transitionDuration={500} delay={100} className="letter">H</FadeIn>
                                    <FadeIn transitionDuration={500} delay={200} className="letter">i</FadeIn>
                                    <FadeIn transitionDuration={500} delay={300} className="letter">,</FadeIn><br />
                                    <FadeIn transitionDuration={500} delay={400} className="letter">I</FadeIn>
                                    <FadeIn transitionDuration={500} delay={500} className="letter">'</FadeIn>
                                    <FadeIn transitionDuration={500} delay={600} className="letter margin-r">m </FadeIn>
                                    <FadeIn transitionDuration={500} delay={700} className="letter double">
                                    <div className="double-container">
                                        <div className="letter-1">A</div>
                                        <div className="letter-2">A</div>
                                    </div>
                                    </FadeIn>
                                    <FadeIn transitionDuration={500} delay={800} className="letter">u</FadeIn>
                                    <FadeIn transitionDuration={500} delay={900} className="letter">s</FadeIn>
                                    <FadeIn transitionDuration={500} delay={1000} className="letter">t</FadeIn>
                                    <FadeIn transitionDuration={500} delay={1100} className="letter">i</FadeIn>
                                    <FadeIn transitionDuration={500} delay={1200} className="letter">n</FadeIn> 
                                    <FadeIn transitionDuration={500} delay={1300} className="letter">,</FadeIn><br />
                                    <FadeIn transitionDuration={500} delay={1400} className="letter">w</FadeIn>
                                    <FadeIn transitionDuration={500} delay={1500} className="letter">e</FadeIn>
                                    <FadeIn transitionDuration={500} delay={1600} className="letter margin-r">b </FadeIn>
                                    <FadeIn transitionDuration={500} delay={1700} className="letter">d</FadeIn>
                                    <FadeIn transitionDuration={500} delay={1800} className="letter">e</FadeIn>
                                    <FadeIn transitionDuration={500} delay={1900} className="letter">v</FadeIn>
                                    <FadeIn transitionDuration={500} delay={2000} className="letter">e</FadeIn>
                                    <FadeIn transitionDuration={500} delay={2100} className="letter">l</FadeIn>
                                    <FadeIn transitionDuration={500} delay={2200} className="letter">o</FadeIn>
                                    <FadeIn transitionDuration={500} delay={2300} className="letter">p</FadeIn>
                                    <FadeIn transitionDuration={500} delay={2400} className="letter">e</FadeIn>
                                    <FadeIn transitionDuration={500} delay={2500} className="letter">r</FadeIn>
                                    <FadeIn transitionDuration={500} delay={2600} className="letter">.</FadeIn>
                                    </h1>
                                </div>
                                <FadeIn delay={500} transitionDuration={500}>
								<p className="subtitle">Front End Developer / Wordpress Expert</p>
                               </FadeIn>
                        </div>
                        </TitleStyles>
					</Col>
				</Row>
			</Container>
		</PageStyles>
	);
};

export default Home;
