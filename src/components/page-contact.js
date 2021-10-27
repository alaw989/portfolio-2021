import { ContactStyles } from '../styles/components/_section-contact.js';
import snazzymap from '../img/snazzy-image.png';
import { Col, Row, Container } from 'react-bootstrap';
import { TitleStyles } from '../styles/components/_section-title.js';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Form from '../components/section-form';
import { FormStyles } from '../styles/components/_forms.js';
import { useContext } from 'react';
import { opacityContext } from '../contexts/siteContext';

const Contact = () => {
	const { opacity } = useContext(opacityContext);

	return (
		<ContactStyles opacity={opacity}>
			<div className="map-container desktop">
				<div className="map-text">Austin Law<br></br> Tampa, FL<br></br><br></br><span>@</span>: alaw989@gmail.com</div>
				<div className="map-bg" style={{ backgroundImage: `url(${snazzymap})` }} />
			</div>

			<div className="section-contact">
				<Container fluid>
					<Row className="justify-content-center">
						<Col xs={11}>
							<Row>
								<Col xs={12} lg={6}>
									<div className="form-container">
										<TitleStyles internal>
											<div className="title-container">
												<div className="title-wrapper">
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
														I'm always open to new opportunities. If you have a question or request, don't hesitate to use the
														form.
													</p>
												</FadeIn>
											</div>
										</TitleStyles>
										<FormStyles>
											<Form />
										</FormStyles>
									</div>
								</Col>
								<Col xs={12} lg={6}>
									<FadeIn>
										<div className="map-container mobile">
											<div className="map-bg" style={{ backgroundImage: `url(${snazzymap})` }} />
										</div>
									</FadeIn>
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
