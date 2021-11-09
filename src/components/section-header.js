import { MmenuStyles } from '../styles/components/_mmenu.js';
import { useContext, useState, useEffect } from 'react';
import { opacityContext } from '../contexts/siteContext';
import { HeaderStyles } from '../styles/components/_section-header.js';
import FadeIn from 'react-fade-in';
import resume from '../img/resume.pdf';

const Header = ({ scroll, top }) => {
	const { opacity, setOpacity } = useContext(opacityContext);
	const [ menu, setMenu ] = useState('Menu');

	const changeOpacity = () => {
		if (!opacity) {
			setOpacity(true);
		} else {
			setOpacity(false);
		}
	};

	const changeOpacity2 = () => {
		if (opacity) {
			setOpacity(false);
		} else {
			setOpacity(false);
		}
	};

	useEffect(
		() => {
			opacity ? setMenu('Close') : setMenu('Menu');
		},
		[ opacity ]
	);

	return (
		<HeaderStyles scroll={scroll} top={top}>
			<FadeIn transitionDuration={1000} delay={100}>
				<a
					href="#top"
					className="logo"
					onClick={() => {
						changeOpacity2();
					}}
				>
					<div className="text">
						<div className="r">A</div>
						<div className="g">A</div>
						<div className="b">A</div>
					</div>
				</a>
			</FadeIn>{' '}
			<FadeIn transitionDuration={1000} delay={400}>
				<div className="right-container">
					<a href={resume} target="_blank" rel="noreferrer" className="resume-button">
						Resume
					</a>

					<MmenuStyles opacity={opacity}>
						<div
							className="menu-container"
							onClick={() => {
								changeOpacity();
							}}
						>
							{menu}
						</div>
					</MmenuStyles>
				</div>{' '}
			</FadeIn>
		</HeaderStyles>
	);
};

export default Header;
