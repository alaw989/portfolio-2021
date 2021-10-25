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

	.austin-bg {
		position: absolute;
		width: 100%;
		height: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		z-index: -9;
		opacity: .09;
		background-color: #1d1d1d;
		background-position: 25%;

		@media (min-width: 768px) {
			background-position: 20%;
			background-size: 150%;
		}
		@media (min-width: 1200px) {
			background-size: 120%;
			background-position: -40%;
		}
		@media (min-width: 1500px) {
			background-size: 90%;
			background-position: 200%;
		}
	}



	${(props) =>
		props.opacity &&
		css`
			z-index: 1;
			opacity: 0;
		`};
`;
