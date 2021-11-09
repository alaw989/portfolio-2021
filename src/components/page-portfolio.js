import { TitleStyles } from '../styles/components/_section-title.js';
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import Slider from 'react-slick';
import { opacityContext } from '../contexts/siteContext';
import { useContext, useRef, useState } from 'react';
import { PortfolioStyles } from '../styles/components/_section-portfolio.js';
import { PortfolioNavStyles } from '../styles/components/_section-portfolio-nav.js';
import miami from '../img/miami.png';
import gutterhelmet from '../img/gutterhelmet.png';
import cqm from '../img/cqm.png';
import pond from '../img/pond.png';
import dave from '../img/dave.png';
import beewindow from '../img/beewindow.png';
import movieapp from '../img/movieapp.png';
import apex from '../img/apex.png';

const Portfolio = (view) => {
	const { opacity } = useContext(opacityContext);

	var settings = {
		dots: false,
		arrows: false,
		infinite: false,
		adaptiveHeight: true
	};

	const customSlider = useRef();
	const [ color, setColor ] = useState(0);

	return (
		<PortfolioStyles opacity={opacity} style={{ opacity: view.view ? 1 : 0 }}>
			<Container fluid>
				<Row className="justify-content-center">
					<Col xs={11} md={10} lg={9}>
						<TitleStyles portfolio>
							<div className="title-container" id="portfolio">
								<div className="title-wrapper">
									<h1 className="title">My Portfolio</h1>
								</div>
							</div>
						</TitleStyles>

						<PortfolioNavStyles opacity={opacity}>
							<ul className="nav-container">
								<li
									className={color === 0 ? 'highlighted' : ''}
									onClick={() => {
										customSlider.current.slickGoTo(0);
										setColor(0);
									}}
								>
									Wordpress Custom Builds
								</li>
								<li
									className={color === 1 ? 'highlighted' : ''}
									onClick={() => {
										customSlider.current.slickGoTo(1);
										setColor(1);
									}}
								>
									React Apps
								</li>
							</ul>
						</PortfolioNavStyles>

						<div className="slide-wrapper">
							<div className="slide-container">
								{/* <FadeIn delay={1000} transitionDuration={1000}>
									{' '}
									<div className="big-text">Work</div>
								</FadeIn> */}
								<Slider ref={customSlider} {...settings}>
									<div className="slide">
										<div className="section-portfolio">
											<ul className="portfolio-wrapper">
												<a href="http://miamiwaterandair.com" target="_blank" rel="noreferrer">
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
												</a>
												<a
													href="https://gutterhelmetofnorthflorida.com/"
													target="_blank"
													rel="noreferrer"
												>
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
														<div className="project-title">
															Gutter Helmet of North Florida
														</div>
													</li>
												</a>
												<a href="https://cqm-inc.com/" target="_blank" rel="noreferrer">
													<li className="project-block">
														{' '}
														<div
															className="bg-image"
															style={{ backgroundImage: `url(${cqm})` }}
														>
															{' '}
														</div>
														<div className="bg-overlay" />
														<div className="hover-container">
															View <br />Project
														</div>
														<div className="project-title">CQM Inc.</div>
													</li>
												</a>
												<a
													href="https://daveyoho22030.dev14.sociusinc.com/"
													target="_blank"
													rel="noreferrer"
												>
													<li className="project-block">
														{' '}
														<div
															className="bg-image"
															style={{ backgroundImage: `url(${dave})` }}
														>
															{' '}
														</div>
														<div className="bg-overlay" />
														<div className="hover-container">
															View <br />Project
														</div>
														<div className="project-title">Dave Yoho & Associates</div>
													</li>
												</a>
												<a
													href="http://pondroofing22031.dev14.sociusinc.com/"
													target="_blank"
													rel="noreferrer"
												>
													<li className="project-block">
														<div
															className="bg-image"
															style={{ backgroundImage: `url(${pond})` }}
														>
															{' '}
														</div>
														<div className="bg-overlay" />
														<div className="hover-container">
															{' '}
															View <br />Project{' '}
														</div>
														<div className="project-title">Pond Roofing</div>
													</li>
												</a>
												<a href="https://beewindow.com" target="_blank" rel="noreferrer">
													<li className="project-block">
														<div
															className="bg-image"
															style={{ backgroundImage: `url(${beewindow})` }}
														>
															{' '}
														</div>
														<div className="bg-overlay" />
														<div className="hover-container">
															View <br />Project
														</div>
														<div className="project-title">Bee Window</div>
													</li>
												</a>
											</ul>
										</div>
									</div>
									<div className="slide">
										{' '}
										<div className="section-portfolio">
											<ul className="portfolio-wrapper">
												<a
													href="https://evening-bayou-68505.herokuapp.com/"
													target="_blank"
													rel="noreferrer"
												>
													<li className="project-block">
														<div
															className="bg-image"
															style={{ backgroundImage: `url(${movieapp})` }}
														>
															{' '}
														</div>
														<div className="bg-overlay" />
														<div className="hover-container">
															{' '}
															View <br />Project{' '}
														</div>
														<div className="project-title">Movie App</div>
													</li>
												</a>
												<a
													href="https://apextrackerapp.herokuapp.com/"
													target="_blank"
													rel="noreferrer"
												>
													<li className="project-block">
														<div
															className="bg-image"
															style={{ backgroundImage: `url(${apex})` }}
														>
															{' '}
														</div>
														<div className="bg-overlay" />
														<div className="hover-container">
															View <br />Project
														</div>
														<div className="project-title">Apex Tracker</div>
													</li>
												</a>
											</ul>
										</div>
									</div>
								</Slider>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</PortfolioStyles>
	);
};

export default Portfolio;
