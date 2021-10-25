import styled from 'styled-components';
import { css } from 'styled-components';

export const PortfolioStyles = styled.div`
	width: 100%;
	position: absolute; 
	top: 0; 
	overflow: hidden;
	z-index: 1; 
	transition: .5s all; 
	
	${(props) =>
		props.opacity &&
		css`
			z-index: 1;
			opacity: 0;
		`};

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

	.section-portfolio {
		width: 100%;
	
		margin-top: 3em;
		position: relative;
		position: relative;

		ul.portfolio-wrapper {
			display: flex;
			flex-wrap: wrap;
			/* height: 40vw; */
			/* max-height: 800px; */
			padding: 0;
			justify-content: center;

			li.project-block {
				display: flex;
				justify-content: center;
				align-items: center;
				list-style-type: none;
				/* width: 33.33%; */
				width: 47%;
				padding: 5vw 0;
				overflow: hidden;
				position: relative;
				cursor: pointer;
				transform: scale(1);
				transition: .5s all;
				border-radius: 15px;
				margin: 5px;
				/* @media (min-width: 768px) {
					width: 33.33%;
				} */

				&:hover {
					.hover-container {
						opacity: 1;
						transform: scale(1);
					}
					.project-title {
						opacity: 0;
						transform: scale(0);
					}
					.bg-overlay {
						background: rgba(0, 0, 0, 0);
					}
					.bg-image {
						transform: scale(1.1);
					}
				}

				.bg-image {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background-size: cover;
					background-repeat: no-repeat;
					background-position: 0px 0px;
					transform: scale(1);
					transition: .5s all;
				}

				.bg-overlay {
					position: absolute;
					width: 100%;
					height: 100%;
					background: rgba(0, 0, 0, .5);
					z-index: 1;
					transition: .5s all;
				}

				.project-title {
					text-transform: uppercase;
					color: #fff;
					z-index: 3;
					position: absolute;
					letter-spacing: 2px;
					font-weight: 300;
					font-family: 'Roboto', sans-serif;
					transform: scale(1);
					transition: .5s all;
					background: rgba(0, 0, 0, .6);
					padding: 5px 10px 3px 10px;
					max-width: 80%;
				}

				.hover-container {
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 50%;
					color: #000;
					font-family: 'Roboto', sans-serif;
					font-weight: 500;
					text-transform: uppercase;
					z-index: 1;
					width: 100px;
					height: 100px;
					max-width: 100px;
					max-height: 100px;
					background-color: #01ff70;
					font-size: .7rem;
					letter-spacing: 4px;
					opacity: 0;
					transition: .5s all;
					transform: scale(0);
				}
			}
		}
	}
`;
