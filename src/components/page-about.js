import { PageStyles } from '../styles/components/_section-body.js';
import { TitleStyles } from '../styles/components/_section-title.js';
import { Container, Row, Col } from 'react-bootstrap';
import { opacityContext } from '../contexts/siteContext';
import { useContext } from 'react';
import FadeIn from 'react-fade-in';

const About = () => {
    
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
                                        <FadeIn transitionDuration={2000} delay={100} className="letter">A</FadeIn>
                                        <FadeIn transitionDuration={2000} delay={200} className="letter">l</FadeIn>
                                        <FadeIn transitionDuration={2000} delay={300} className="letter margin-r">l</FadeIn>
                                        <FadeIn transitionDuration={2000} delay={400} className="letter">M</FadeIn>
                                        <FadeIn transitionDuration={2000} delay={500} className="letter">e</FadeIn>
                                        <FadeIn transitionDuration={2000} delay={600} className="letter margin-r">,</FadeIn>
                                        <FadeIn transitionDuration={2000} delay={700} className="letter">B</FadeIn>
                                        <FadeIn transitionDuration={2000} delay={800} className="letter">a</FadeIn>
                                        <FadeIn transitionDuration={2000} delay={900} className="letter">b</FadeIn>
                                        <FadeIn transitionDuration={2000} delay={1000} className="letter">y</FadeIn>
                                    </h1>
								</div>
								<FadeIn delay={1000} transitionDuration={2000}>
									<p className="subtitle">
										The primary area of my interest is front-end. My passion for code has begun when
										Adobe Flash was a complete innovation, alongside with CSS 1.0 and HTML 4.01 as
										standards of the current web.
									</p>
								</FadeIn>
							</div>
						</TitleStyles>
					</Col>
				</Row>
			</Container>
		</PageStyles>
	);
};

export default About;
