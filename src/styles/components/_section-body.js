import styled from 'styled-components';
import { css } from 'styled-components';

export const PageStyles = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	position: absolute;
	width: 100%;
	top: 0;
	z-index: 2;
	opacity: 1;

	${(props) =>
		props.opacity &&
		css`
			z-index: 1;
			opacity: 0;
		`};
`;
