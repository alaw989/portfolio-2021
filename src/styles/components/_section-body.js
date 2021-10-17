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
	overflow: hidden;
	transition: .5s all;

	ul.nav-container {
		color: #fff;
		display: flex;
		justify-content: center;
		padding: 0;
		margin-bottom: 0;
		margin-top: 30px;
		cursor: pointer;
		position: relative;
		z-index:3;
		li {
			list-style-type: none;
			color: #fff;
			margin: 0 10px;
			font-family: 'Roboto', sans-serif;
			cursor: pointer;
			font-weight: 500;
			letter-spacing: 1px;
			transition: .5s all;

			&:hover {
				color: #ff4136;
			}

			&.highlighted {
				color: #ff4136;
			}
		}
	}

	${(props) =>
		props.opacity &&
		css`
			z-index: 1;
			opacity: 0;
		`};
`;
