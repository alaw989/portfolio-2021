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
			<div
				className="austin-bg"
				id="home"
				style={{ backgroundImage: `linear-gradient(to left, transparent, #1d1d1d), url(${pluto})` }}
			/>
			<Container fluid>
				<Row className="justify-content-center">
					<Col xs={11} md={10} lg={10}>
						<TitleStyles hero>
							<FadeIn transitionDuration={500} delay={600}>
								<p className="suptitle">Hi, my name is</p>
							</FadeIn>
							<h1 className="title home">
								<FadeIn transitionDuration={500} delay={700} className="letter double">
									<div className="double-container">
										<div className="letter-1">A</div>
										<div className="letter-2">A</div>
									</div>
								</FadeIn>
								<FadeIn transitionDuration={500} delay={800} className="letter">
									u
								</FadeIn>
								<FadeIn transitionDuration={500} delay={900} className="letter">
									s
								</FadeIn>
								<FadeIn transitionDuration={500} delay={1000} className="letter">
									t
								</FadeIn>
								<FadeIn transitionDuration={500} delay={1100} className="letter">
									i
								</FadeIn>
								<FadeIn transitionDuration={500} delay={1200} className="letter margin-r">
									n
								</FadeIn>
								<FadeIn transitionDuration={500} delay={1300} className="letter">
									L
								</FadeIn>
								<FadeIn transitionDuration={500} delay={1400} className="letter">
									a
								</FadeIn>
								<FadeIn transitionDuration={500} delay={1500} className="letter">
									w
								</FadeIn>
								<br />
							</h1>
							<FadeIn transitionDuration={500} delay={1600}>
								<h1 className="title home lower">I write code for the web.</h1>
							</FadeIn>
							<FadeIn delay={500} transitionDuration={500}>
								<FadeIn transitionDuration={500} delay={1700}>
									<p className="subtitle">
										I'm a frontend developer specializing in building web applications with modern
										technologies.{' '}
									</p>
								</FadeIn>
							</FadeIn>
						</TitleStyles>
					</Col>
				</Row>
			</Container>
		</PageStyles>
	);
};

export default Home;
