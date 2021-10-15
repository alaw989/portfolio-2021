import { SectionNavStyles } from '../styles/components/_section-nav.js';
import { Route, NavLink, HashRouter } from 'react-router-dom';

const SectionNav = () => {
	return (
		<SectionNavStyles>
            <HashRouter>
			<ul>
				<li><NavLink exact to="/"> Home </NavLink></li>
				<li><NavLink to="/about">About</NavLink></li>
				<li><NavLink to="/contact">Contact</NavLink></li>
			</ul>
            </HashRouter>

		</SectionNavStyles>
	);
};

export default SectionNav;
