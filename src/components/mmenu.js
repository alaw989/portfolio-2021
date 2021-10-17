import { MmenuStyles } from '../styles/components/_mmenu.js';
import {  useContext } from 'react';
import { opacityContext } from '../contexts/siteContext';

const MMenu = () => {
	const { opacity, setOpacity } = useContext(opacityContext);

	const changeOpacity = () => {
		if (!opacity) {
			setOpacity(true);
		} else {
			setOpacity(false);
		}
	};

	return (
		<MmenuStyles opacity={opacity}>
			<div className="menu-container" onClick={changeOpacity}>
				MENU
			</div>
		</MmenuStyles>
	);
};

export default MMenu;
