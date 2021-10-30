import { SectionNavStyles } from '../styles/components/_section-nav.js';
import { NavLink, HashRouter } from 'react-router-dom';
import { opacityContext } from '../contexts/siteContext';
import { useContext } from 'react';
import FadeIn from 'react-fade-in';

const SectionNav = () => {
	const { opacity, setOpacity } = useContext(opacityContext);

	const changeOpacity = () => {
		setOpacity(false);
	};

	return (
		<SectionNavStyles opacity={opacity}>
			{/* <HashRouter> */}
            {opacity &&
				<ul>
                    <li onClick={changeOpacity}>
                        {/* <NavLink exact to="/"> */}
                            <FadeIn transitionDuration={1000} delay={100} className="letter">H</FadeIn>
                            <FadeIn transitionDuration={1000} delay={200} className="letter">o</FadeIn>
                            <FadeIn transitionDuration={1000} delay={300} className="letter">m</FadeIn>
                            <FadeIn transitionDuration={1000} delay={400} className="letter">e</FadeIn>
                        {/* </NavLink> */}
                    </li>
                    <li onClick={changeOpacity}>
                        {/* <NavLink to="/about"> */}
                            <FadeIn transitionDuration={1000} delay={100} className="letter">A</FadeIn>
                            <FadeIn transitionDuration={1000} delay={200} className="letter">b</FadeIn>
                            <FadeIn transitionDuration={1000} delay={300} className="letter">o</FadeIn>
                            <FadeIn transitionDuration={1000} delay={400} className="letter">u</FadeIn>
                            <FadeIn transitionDuration={1000} delay={500} className="letter">t</FadeIn>
                        {/* </NavLink> */}
                    </li>
					<li onClick={changeOpacity}>
                        {/* <NavLink to="/portfolio"> */}
                            <FadeIn transitionDuration={1000} delay={100} className="letter">W</FadeIn>
                            <FadeIn transitionDuration={1000} delay={200} className="letter">o</FadeIn>
                            <FadeIn transitionDuration={1000} delay={300} className="letter">r</FadeIn>
                            <FadeIn transitionDuration={1000} delay={400} className="letter">k</FadeIn>
                        {/* </NavLink> */}
					</li>
					<li onClick={changeOpacity}>
                        {/* <NavLink to="/contact"> */}
                            <FadeIn transitionDuration={1000} delay={100} className="letter">C</FadeIn>
                            <FadeIn transitionDuration={1000} delay={200} className="letter">o</FadeIn>
                            <FadeIn transitionDuration={1000} delay={300} className="letter">n</FadeIn>
                            <FadeIn transitionDuration={1000} delay={400} className="letter">t</FadeIn>
                            <FadeIn transitionDuration={1000} delay={500} className="letter">a</FadeIn>
                            <FadeIn transitionDuration={1000} delay={600} className="letter">c</FadeIn>
                            <FadeIn transitionDuration={1000} delay={700} className="letter">t</FadeIn>
                        {/* </NavLink> */}
					</li>
				</ul>
                  }
			{/* </HashRouter> */}
		</SectionNavStyles>
	);
};

export default SectionNav;
