import { MmenuStyles } from '../styles/components/_mmenu.js';
import { useContext, useState, useEffect } from 'react';
import { opacityContext } from '../contexts/siteContext';
import { HeaderStyles } from '../styles/components/_section-header.js';
import { NavLink, HashRouter } from 'react-router-dom';

const Header = () => {
	const { opacity, setOpacity } = useContext(opacityContext);
	const [ menu, setMenu ] = useState('Menu');
	console.log(opacity);
	const changeOpacity = () => {
		if (!opacity) {
			setOpacity(true);
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
		<HeaderStyles>
			<div className="logo">
				<HashRouter>
					{' '}
					<NavLink exact to="/">
						<div className="text">
							<div className="r">A</div>
							<div className="g">A</div>
							<div className="b">A</div>
						</div>
					</NavLink>
				</HashRouter>
			</div>
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
		</HeaderStyles>
	);
};

export default Header;
