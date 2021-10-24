import { ContactStyles } from '../styles/components/_section-contact.js';
import snazzymap from '../img/snazzy-image.png';
import { Col, Row, Container } from 'react-bootstrap';
import { TitleStyles } from '../styles/components/_section-title.js';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Form from '../components/section-form';
import { FormStyles } from '../styles/components/_forms.js';

const Contact = () => {
	return (
		<ContactStyles>
			<div className="section-contact">
            <FadeIn>
				<div className="map-container">
					<div className="map-bg" style={{ backgroundImage: `url(${snazzymap})` }} />
				</div>
                </FadeIn>
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
															transitionDuration={2000}
															delay={100}
															className="letter"
														>
															C
														</FadeIn>
														<FadeIn
															transitionDuration={2000}
															delay={200}
															className="letter"
														>
															o
														</FadeIn>
														<FadeIn
															transitionDuration={2000}
															delay={300}
															className="letter "
														>
															n
														</FadeIn>
														<FadeIn
															transitionDuration={2000}
															delay={400}
															className="letter"
														>
															t
														</FadeIn>
														<FadeIn
															transitionDuration={2000}
															delay={500}
															className="letter"
														>
															a
														</FadeIn>
														<FadeIn
															transitionDuration={2000}
															delay={600}
															className="letter "
														>
															c
														</FadeIn>
														<FadeIn
															transitionDuration={2000}
															delay={700}
															className="letter margin-r"
														>
															t
														</FadeIn>
														<FadeIn
															transitionDuration={2000}
															delay={800}
															className="letter"
														>
															M
														</FadeIn>
														<FadeIn
															transitionDuration={2000}
															delay={900}
															className="letter"
														>
															e
														</FadeIn>
													</h1>
												</div>
												<FadeIn delay={1000} transitionDuration={2000}>
													<p className="subtitle">
														If you have a question or request, don't hesitate to use the
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
							</Row>
						</Col>
					</Row>
				</Container>
			</div>
		</ContactStyles>
	);
};

export default Contact;
