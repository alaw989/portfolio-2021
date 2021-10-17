import { PageStyles } from '../styles/components/_section-body.js';
import { TitleStyles } from '../styles/components/_section-title.js';
import FadeIn from 'react-fade-in';
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import Slider from 'react-slick';
import { opacityContext } from '../contexts/siteContext';
import { useContext, useRef, useState } from 'react';
import { PortfolioStyles } from '../styles/components/_section-portfolio.js';
import miami from '../img/miami.png';
import gutterhelmet from '../img/gutterhelmet.png';

const Portfolio = () => {
	const { opacity } = useContext(opacityContext);

	var settings = {
		dots: false,
		arrows: false,
		infinite: false
	};

	const customSlider = useRef();
	const [ color, setColor ] = useState(0);
	console.log(color);

	return (
		<PageStyles opacity={opacity}>
			<Container fluid>
				<Row className="justify-content-center">
					<Col xs={11}>
						<TitleStyles internal>
							<div className="title-container">
								<div className="title-wrapper">
									<h1 className="title">
										<FadeIn transitionDuration={2000} delay={100} className="letter">
											M
										</FadeIn>
										<FadeIn transitionDuration={2000} delay={200} className="letter margin-r">
											y
										</FadeIn>
										<FadeIn transitionDuration={2000} delay={300} className="letter ">
											P
										</FadeIn>
										<FadeIn transitionDuration={2000} delay={400} className="letter">
											o
										</FadeIn>
										<FadeIn transitionDuration={2000} delay={500} className="letter">
											r
										</FadeIn>
										<FadeIn transitionDuration={2000} delay={600} className="letter">
											t
										</FadeIn>
										<FadeIn transitionDuration={2000} delay={700} className="letter">
											f
										</FadeIn>
										<FadeIn transitionDuration={2000} delay={800} className="letter">
											o
										</FadeIn>
										<FadeIn transitionDuration={2000} delay={900} className="letter">
											l
										</FadeIn>
										<FadeIn transitionDuration={2000} delay={1000} className="letter">
											i
										</FadeIn>
										<FadeIn transitionDuration={2000} delay={1100} className="letter">
											o
										</FadeIn>
									</h1>
								</div>
								<FadeIn delay={1000} transitionDuration={2000}>
									<p className="subtitle">A small gallery of recent projects chosen by me.</p>
								</FadeIn>
							</div>
						</TitleStyles>
					</Col>
					<Col xs={12} className="p-0">
						<FadeIn delay={1500} transitionDuration={2000}>
							<ul className="nav-container">
								<li
									className={color === 0 ? 'highlighted' : ''}
									onClick={() => {
										customSlider.current.slickGoTo(0);
										setColor(0);
									}}
								>
									Wordpress Custom Builds
								</li>|
								<li
									className={color === 1 ? 'highlighted' : ''}
									onClick={() => {
										customSlider.current.slickGoTo(1);
										setColor(1);
									}}
								>
									React
								</li>
							</ul>
						</FadeIn>
						<Slider ref={customSlider} {...settings}>
							<div className="slide">
								<FadeIn delay={2000} transitionDuration={2000}>
									<PortfolioStyles>
										<div className="section-portfolio">
											<div className="big-text">Work</div>
											<ul className="portfolio-wrapper">
												<li className="project-block">
													{' '}
													<div
														className="bg-image"
														style={{ backgroundImage: `url(${miami})` }}
													>
														{' '}
													</div>
													<div className="bg-overlay" />
													<div className="hover-container">
														View <br />Project
													</div>
													<div className="project-title">Miami Water & Air</div>
												</li>
												<li className="project-block">
													{' '}
													<div
														className="bg-image"
														style={{ backgroundImage: `url(${gutterhelmet})` }}
													/>
													<div className="bg-overlay" />
													<div className="hover-container">
														View <br />Project
													</div>
													<div className="project-title">Gutter Helmet of North Florida</div>
												</li>
												<li className="project-block">
													{' '}
													<div
														className="bg-image"
														style={{ backgroundImage: `url(${miami})` }}
													>
														{' '}
													</div>
													<div className="bg-overlay" />
													<div className="hover-container">
														View <br />Project
													</div>
													<div className="project-title">Miami Water & Air</div>
												</li>
												<li className="project-block">
													{' '}
													<div
														className="bg-image"
														style={{ backgroundImage: `url(${gutterhelmet})` }}
													>
														{' '}
													</div>
													<div className="bg-overlay" />
													<div className="hover-container">
														View <br />Project
													</div>
													<div className="project-title">Miami Water & Air</div>
												</li>
												<li className="project-block">
													<div
														className="bg-image"
														style={{ backgroundImage: `url(${gutterhelmet})` }}
													>
														{' '}
													</div>
													<div className="bg-overlay" />
													<div className="hover-container">
														{' '}
														View <br />Project{' '}
													</div>
													<div className="project-title">Miami Water & Air</div>
												</li>
												<li className="project-block">
													<div
														className="bg-image"
														style={{ backgroundImage: `url(${miami})` }}
													>
														{' '}
													</div>
													<div className="bg-overlay" />
													<div className="hover-container">
														View <br />Project
													</div>
													<div className="project-title">Miami Water & Air</div>
												</li>
											</ul>
										</div>
									</PortfolioStyles>
								</FadeIn>
							</div>
							<div className="slide">
								{' '}
								<FadeIn delay={2000} transitionDuration={2000}>
									<PortfolioStyles>
										<div className="section-portfolio">
											<div className="big-text">Work</div>
											<ul className="portfolio-wrapper">
												<li className="project-block">
													<div
														className="bg-image"
														style={{ backgroundImage: `url(${gutterhelmet})` }}
													>
														{' '}
													</div>
													<div className="bg-overlay" />
													<div className="hover-container">
														{' '}
														View <br />Project{' '}
													</div>
													<div className="project-title">Miami Water & Air</div>
												</li>
												<li className="project-block">
													<div
														className="bg-image"
														style={{ backgroundImage: `url(${miami})` }}
													>
														{' '}
													</div>
													<div className="bg-overlay" />
													<div className="hover-container">
														View <br />Project
													</div>
													<div className="project-title">Miami Water & Air</div>
												</li>
											</ul>
										</div>
									</PortfolioStyles>
								</FadeIn>
							</div>
						</Slider>
					</Col>
				</Row>
			</Container>
		</PageStyles>
	);
};

export default Portfolio;