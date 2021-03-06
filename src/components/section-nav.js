import { SectionNavStyles } from '../styles/components/_section-nav.js';
import { opacityContext } from '../contexts/siteContext';
import { useContext } from 'react';
import FadeIn from 'react-fade-in';
import resume from '../img/resume.pdf';

const SectionNav = () => {
	const { opacity, setOpacity } = useContext(opacityContext);

	const changeOpacity = () => {
		setOpacity(false);
	};

	return (
		<SectionNavStyles opacity={opacity}>
			{opacity && (
				<ul>
					<li onClick={changeOpacity} className="about">
						<a href="#about">
							<FadeIn transitionDuration={1000} delay={100} className="letter">
								A
							</FadeIn>
							<FadeIn transitionDuration={1000} delay={200} className="letter">
								b
							</FadeIn>
							<FadeIn transitionDuration={1000} delay={300} className="letter">
								o
							</FadeIn>
							<FadeIn transitionDuration={1000} delay={400} className="letter">
								u
							</FadeIn>
							<FadeIn transitionDuration={1000} delay={500} className="letter">
								t
							</FadeIn>
						</a>
					</li>
					<li onClick={changeOpacity}>
						<a href="#portfolio">
							<FadeIn transitionDuration={1000} delay={100} className="letter">
								W
							</FadeIn>
							<FadeIn transitionDuration={1000} delay={200} className="letter">
								o
							</FadeIn>
							<FadeIn transitionDuration={1000} delay={300} className="letter">
								r
							</FadeIn>
							<FadeIn transitionDuration={1000} delay={400} className="letter">
								k
							</FadeIn>
						</a>
					</li>
					<li onClick={changeOpacity}>
						<a href="#contact">
							<FadeIn transitionDuration={1000} delay={100} className="letter">
								C
							</FadeIn>
							<FadeIn transitionDuration={1000} delay={200} className="letter">
								o
							</FadeIn>
							<FadeIn transitionDuration={1000} delay={300} className="letter">
								n
							</FadeIn>
							<FadeIn transitionDuration={1000} delay={400} className="letter">
								t
							</FadeIn>
							<FadeIn transitionDuration={1000} delay={500} className="letter">
								a
							</FadeIn>
							<FadeIn transitionDuration={1000} delay={600} className="letter">
								c
							</FadeIn>
							<FadeIn transitionDuration={1000} delay={700} className="letter">
								t
							</FadeIn>
						</a>
					</li>
					<FadeIn transitionDuration={1000} delay={100} className="resume-container">
						<a href={resume} target="_blank" rel="noreferrer" class="resume-button">
							Resume
						</a>
					</FadeIn>
				</ul>
			)}
		</SectionNavStyles>
	);
};

export default SectionNav;
