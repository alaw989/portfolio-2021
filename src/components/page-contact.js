import { ContactStyles } from '../styles/components/_section-contact.js';
import { Col, Row, Container } from 'react-bootstrap';
import { TitleStyles } from '../styles/components/_section-title.js';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useContext } from 'react';
import { opacityContext } from '../contexts/siteContext';

const Contact = (view) => {
	const { opacity } = useContext(opacityContext);



	return (
		<ContactStyles opacity={opacity} style={{opacity: view.view ? 1 : 0}}>
			<div className="section-contact" id="contact">
				<Container fluid>
					<Row className="justify-content-center">
						<Col xs={11}>
							<Row>
								<Col xs={12} lg={12}>
									<div className="form-container">
										<TitleStyles internal contact>
											<div className="title-container">
												<div className="title-wrapper">
													<div className="sup-title">What's Next?</div>
													<h1 className="title">
														<FadeIn
															transitionDuration={1000}
															delay={100}
															className="letter"
														>
															C
														</FadeIn>
														<FadeIn
															transitionDuration={1000}
															delay={200}
															className="letter"
														>
															o
														</FadeIn>
														<FadeIn
															transitionDuration={1000}
															delay={300}
															className="letter "
														>
															n
														</FadeIn>
														<FadeIn
															transitionDuration={1000}
															delay={400}
															className="letter"
														>
															t
														</FadeIn>
														<FadeIn
															transitionDuration={1000}
															delay={500}
															className="letter"
														>
															a
														</FadeIn>
														<FadeIn
															transitionDuration={1000}
															delay={600}
															className="letter "
														>
															c
														</FadeIn>
														<FadeIn
															transitionDuration={1000}
															delay={700}
															className="letter margin-r"
														>
															t
														</FadeIn>
														<FadeIn
															transitionDuration={1000}
															delay={800}
															className="letter"
														>
															M
														</FadeIn>
														<FadeIn
															transitionDuration={1000}
															delay={900}
															className="letter"
														>
															e
														</FadeIn>
													</h1>
												</div>
												<FadeIn delay={1000} transitionDuration={1000}>
													<p className="subtitle">
														I'm currently open to any new opportunities. Whether you have a
														question or just want to say hi, I’ll try my best to get back to
														you!
													</p>
												</FadeIn>
											</div>
										</TitleStyles>
										<a className="contact-button" href="mailto:alaw989@gmail.com">
											Say Hello
										</a>
									</div>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</div>
		</ContactStyles>
	);
};

export default Contact;
