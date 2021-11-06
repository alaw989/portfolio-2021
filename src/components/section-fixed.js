import { FixedStyles } from '../styles/components/_section-fixed';
import FadeIn from 'react-fade-in';

const Fixed = () => {
	return (
		<FixedStyles>
			<FadeIn transitionDuration={1000} delay={700}>
				<a className="email" href="mailto:alaw989@gmail.com">
					alaw989@gmail.com
				</a>
			</FadeIn>
		</FixedStyles>
	);
};

export default Fixed;
