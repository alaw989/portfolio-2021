import styled from 'styled-components';
import { css } from 'styled-components';

export const SectionNavStyles = styled.div`
	min-height: 100vh;
	font-family: "Raleway", sans-serif;
	display: flex;
	align-items: center;
	position: fixed;
	z-index: 1;
	width: 100%;
	background-color: #000;
	opacity: 0;
	transition: .5s opacity;
	top: 0;
	pointer-events: none;

	${(props) =>
		props.opacity &&
		css`
			opacity: 1;
			position: fixed;
			z-index: 2;
			pointer-events: auto;
		`};

	ul {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
		margin: 0 auto;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		margin-left: 40px;

		@media (min-width: 768px) {
			flex-direction: row;
		}

		li {
			color: #fff;
			list-style-type: none;

			@media (min-width: 768px) {
				margin: 0 20px;
			}

			&:about {
				
			}
			a {
				display: flex;
				color: #fff !important;
				text-decoration: none;
				transition: .5s all;
				font-size: 3rem;

				&:hover {
					color: #36f4ff !important;
				}

				&.active {
					color: #36f4ff;
				}

				.letter {
					font-family: 'Raleway', sans-serif;
				}
			}
		}

		.resume-container {
			margin-top: 20px;
			a.resume-button {
				margin-right: 10px;
				border: 1px solid #36f4ff;
				background-color: #000;
				padding: 8px 15px;
				color: #36f4ff;
				font-family: 'Roboto Mono', sans-serif;
				letter-spacing: 2px;
				transition: .5s all;
				border-radius: 4px;
				background-color: transparent;
				font-size: 1rem;

				@media (min-width: 768px) {
					display: none;
				}
				&:hover {
					color: #000;
					background-color: #36f4ff;
				}
			}
		}
	}
`;
