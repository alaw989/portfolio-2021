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
		opacity: .06;
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

	ul.nav-container {
		color: #fff;
		display: flex;
		justify-content: center;
		padding: 0;
		margin-bottom: 0;
		margin-top: 30px;
		cursor: pointer;
		position: relative;
		z-index: 3;
		li {
			list-style-type: none;
			color: #fff;
			margin: 0 10px;
			font-family: 'Roboto', sans-serif;
			cursor: pointer;
			font-weight: 500;
			letter-spacing: 2px;
			transition: .5s all;

			&:hover {
				color: #ff4136;
			}

			&.highlighted {
				color: #ff4136;
			}
		}
	}

	.slide-container {
		position: relative; 
		.big-text {
			position: absolute;
			font-size: 10rem;
			top: 0;
			right: 0;
			font-weight: 700;
			letter-spacing: -7px;
			color: rgba(255, 255, 255, .05);
			z-index: 0;
			top: -100px;
			@media (min-width: 992px) {
				font-size: 20rem;
				right: -80px;
				top: -250px;
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
