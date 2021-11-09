import styled from 'styled-components';
import { css } from 'styled-components';

export const AboutStyles = styled.div`
	display: flex;
	align-items: center;
	top: 0;
	height: calc(100% - 150px);
	min-height: 1000px;
	z-index: 1;
	padding: 80px 0px;
	max-width: 900px;
	margin-left: auto;
	margin-right: auto;
	transition-delay: .5s; 
	@media (min-width: 768px) {
		padding: 100px 0;
	}

	@media (min-width: 992px) {
		min-height: 0;
	}

	${(props) =>
		props.opacity &&
		css`
			z-index: 0;
			opacity: 0;
		`};

	.image-wrapper {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 300px;
		margin: 0 auto; 
		margin-top: 3em;
		position: relative;
		margin-top: 2em;
		transition: .5s all;
		transition-delay: .5s; 
		&:hover {
			.bg-overlay {
				opacity: 0;
			}

			.image-outline {
				bottom: -1px; 
				right: 12px; 

				@media (min-width: 768px) {
					bottom: -5px;
					right: -17px;
				}
				@media (min-width: 992px) {
					bottom: 75px;
					right: -20px;
				}
			}
		}
		.image-container {
			width: 250px;
			height: 250px;
			background-size: 160%;
			background-position: center;
			background-repeat: no-repeat;
			max-width: 300px;
			position: relative;
			z-index: 2;
			transition: .5s all;
			border-radius: 5px;
			z-index: 0;
			position: relative;
			&:hover {
				filter: grayscale(0);
				.bg-overlay {
					opacity: 0;
				}
			}

			@media (min-width: 768px) {
				width: 40vw;
				height: 40vw;
				max-height: 400px;
			}
			.bg-overlay {
				position: absolute;

				width: 100%;
				height: 100%;
				background-color: rgba(54, 244, 255, 1);
				mix-blend-mode: multiply;
				opacity: 1;
				transition: .5s all;
				border-radius: 5px;
				z-index: 1;
			}
		}
		.image-outline {
			width: 250px;
			height: 250px;
			max-width: 300px;
			position: absolute;
			border: 2px solid #36f4ff;
			border-radius: 5px;
			bottom: -6px;
			right: 3px;
			z-index: -1;
			transition: .5s all;
			@media (min-width: 768px) {
				width: 40vw;
				height: 40vw;
				max-height: 400px;
				bottom: -10px;
				right: -21px;
			}
			@media (min-width: 992px) {
				bottom: 65px;
				right: -29px; 
			}
		}
	}

	.title-container {
		.subtitle {
			color: #a5a0a0;
			a {
				color: #ff4136;
				transition: .5s all;
				font-weight: 700;
				&:hover {
					color: #36f4ff;
				}
			}
		}

		ul.skills-list {
			display: grid;
			grid-template-columns: repeat(2, minmax(140px, 200px));
			gap: 0px 10px;
			padding: 0px;
			margin: 20px 0px 0px;
			overflow: hidden;
			list-style: none;
			li {
				font-family: 'Roboto Mono', sans-serif;
				font-size: 13px;
				margin-bottom: 5px;
				color: #fff;
				display: flex;
				justify-content: flex-start;
				padding-left: 12px;
				position: relative;
				color: #a5a0a0;
				&:before {
					content: "▹";
					position: absolute;
					left: -2px;
					color: #36f4ff;
					font-size: 12px;
					line-height: 12px;
					top: 2px;
				}
			}
		}
	}
`;
