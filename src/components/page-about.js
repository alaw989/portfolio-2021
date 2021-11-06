import { AboutStyles } from '../styles/components/_section-about.js';
import { TitleStyles } from '../styles/components/_section-title.js';
import { Container, Row, Col } from 'react-bootstrap';
import { opacityContext } from '../contexts/siteContext';
import { useContext } from 'react';
import FadeIn from 'react-fade-in';
import austin from '../img/austin.jpg';

const About = () => {
	const { opacity } = useContext(opacityContext);

	return (
		<AboutStyles opacity={opacity}>
			<Container fluid>
				<Row className="justify-content-center">
					<Col xs={11} md={10} lg={12}>
						<Row>
							<Col xs={12} lg={6}>
								<TitleStyles internal about>
									<div className="title-container" id="about">
										<div className="title-wrapper">
											<h1 className="title">About Me</h1>
										</div>
										<FadeIn delay={1000} transitionDuration={1000}>
											<p className="subtitle">
												The primary area of my interest is front-end. My passion for code
												started as a youngster, tinkering with HTML on geocities pages. That
												same passion was reignited when I accepted a job as an IT support
												specialist working alongside a team of web developers in 2017. Been
												honing my craft ever since.<br />
												<br />
												I create successful responsive websites that are fast, easy to use, and
												built with best practices. The main area of my expertise is front-end
												development, HTML (JSX), CSS, JS, building small and medium web apps,
												features, animations, and coding interactive layouts.
												<br />
												<br />
												What I enjoy doing the most though is interacting with and manipulating
												data through APIs. I would love to work on more data driven websites and
												applications. <br /> <br />
												Here are a few technologies I've been working with recently:
											</p>
											<ul className="skills-list">
												<li>JavaScript (ES6+)</li>
												<li>React</li>
												<li>GraphQL</li>
												<li>Wordpress</li>
												<li>Styled Components</li>
												<li>Gatsby</li>
											</ul>
										</FadeIn>
									</div>
								</TitleStyles>
							</Col>
							<Col xs={12} lg={6}>
								<div className="image-wrapper">
									<div className="image-container" style={{ backgroundImage: `url(${austin})` }} >
										<div className="bg-overlay">
											
										</div>
									</div>
									<div className="image-outline"></div>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</AboutStyles>
	);
};

export default About;
