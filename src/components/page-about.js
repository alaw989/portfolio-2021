import { AboutStyles } from '../styles/components/_section-about.js';
import { TitleStyles } from '../styles/components/_section-title.js';
import { Container, Row, Col } from 'react-bootstrap';
import { opacityContext } from '../contexts/siteContext';
import { useContext, useState } from 'react';
import austin from '../img/austin.jpg';

import { InView } from 'react-intersection-observer';

const About = () => {
	const { opacity } = useContext(opacityContext);

	const [ aboutInView, setAboutInView ] = useState();

	return (
		<AboutStyles opacity={opacity}>
			<Container fluid>
				<Row className="justify-content-center">
					<Col xs={11} md={10} lg={12}>
						<Row>
							<Col xs={12} lg={6}>
								<InView onChange={setAboutInView} triggerOnce={true}>
									<TitleStyles internal about style={{ opacity: aboutInView ? 1 : 0 }}>
										<div className="title-container" id="about">
											<div className="title-wrapper">
												<h1 className="title">About Me</h1>
											</div>
											<p className="subtitle">
												My passion for code started as a youngster, tinkering with HTML on
												Geocities pages. That same passion wasn't reignited until 2016 when I
												began working as an IT support specialist working alongside a team of
												web developers.
												<br />
												<br />
												Fast forward to today, and now I create successful responsive websites
												that are fast, easy to use, and built with best practices. The main area
												of my expertise is front-end development, building small
												and medium web apps, features, animations, and coding interactive
												layouts.
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
										</div>
									</TitleStyles>
								</InView>
							</Col>
							<Col xs={12} lg={6}>
								<div className="image-wrapper" style={{ opacity: aboutInView ? 1 : 0 }}>
									<div className="image-container" style={{ backgroundImage: `url(${austin})` }}>
										<div className="bg-overlay" />
									</div>
									<div className="image-outline" />
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
