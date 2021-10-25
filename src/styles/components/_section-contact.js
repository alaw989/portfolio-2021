import styled from 'styled-components';
import { css } from 'styled-components';

export const ContactStyles = styled.div`
	display: flex;
	align-items: center;
	position: absolute;
	top: 0;
	transition: .5s all;
	width: 100%;
	height: 100vh;

	${(props) =>
		props.opacity &&
		css`
			z-index: 1;
			opacity: 0;
		`};

	.map-container {
		width: 100%;
		position: absolute;

		&.mobile {
			display: block;
			position: relative;
			margin-top: 50px;
		}
		&.desktop {
			display: none;
		}

		@media (min-width: 992px) {
			height: 100%;
			top: 0;
			width: 50%;
			&.desktop {
				display: block;
				right: 0;
			}
			&.mobile {
				display: none;
			}
		}

		.map-text {
			position: absolute;
			top: 30px;
			left: 30px;
			z-index: 1;
			color: white;
			background-color: rgba(0, 0, 0, .8);
			padding: 10px;
			text-align: left;
			font-family: 'Roboto', sans-serif;
			span {
				color: #01ff70;
			}
		}

		.map-bg {
			position: absolute;
			top: 0;
			right: 0;
			height: 50vh;
			width: 100%;
			background-size: cover;
			background-repeat: no-repeat;

			@media (min-width: 992px) {
				width: 100%;
				height: 100%;
			}
		}
	}
	.section-contact {
		color: #fff;
		height: 100%;
		width: 100%;
		position: relative;

		.form-container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			position: relative;
			z-index: 1;
			align-items: flex-start;
			height: 100%;
			@media (min-width: 992px) {
				margin-right: 50px;
			}
		}
	}
`;
