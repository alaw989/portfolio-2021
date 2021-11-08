import styled from 'styled-components';
import { css } from 'styled-components';

export const TitleStyles = styled.div`
	${(props) =>
		props.portfolio &&
		css`
			max-width: 1100px;
			margin: 0 auto;
			.subtitle {
				text-align: left;
			}
		`};

	${(props) =>
		props.hero &&
		css`
			max-width: 1000px;
			margin: 0 auto;
			.subtitle {
				text-align: left;
				max-width: 540px;
			}
		`};

	${(props) =>
		props.contact &&
		css`
			h1.title {
				text-align: center !important;
				font-size: 2.7rem !important;
			}

			.subtitle {
				text-align: center;
				max-width: 100%;
			}
		`};

	${(props) =>
		props.about &&
		css`
			.subtitle {
				text-align: left;
			}
		`} .sup-title {
		font-family: 'Roboto Mono', sans-serif;
		color: #36f4ff;
		&:before {
			content: "03.";
			position: relative;
			font-family: 'Roboto Mono', sans-serif;
			color: #36f4ff;

			font-weight: 600;
			margin-right: 10px;

			@media (min-width: 992px) {
			}
		}
	}

	.suptitle {
		text-align: left;
		color: #fff;
		font-family: 'Roboto Mono', sans-serif;
		color: #36f4ff;
	}

	h1.title {
		color: #fff;
		text-align: left;
		font-size: 1.7rem;
		line-height: 3rem;
		position: relative;
		width: 100%;
		white-space: nowrap;
		font-family: 'Roboto', sans-serif;
		font-weight: 700;
		overflow: hidden;
		letter-spacing: 0px;

		&.home {
			font-size: 2rem;
			line-height: 2.2rem;
			white-space: normal;
			@media (min-width: 768px) {
				font-size: 3.5rem;
				line-height: 4rem;
			}

			@media (min-width: 1200px) {
				font-size: 4.5rem;
				line-height: 5rem;
			}
		}

		&.lower {
			color: #8d8d8d;
		}

		${(props) =>
			props.internal &&
			css`
				& {
					display: flex;
					align-items: center;
				}

				&:before {
					position: relative;
					font-family: 'Roboto Mono', sans-serif;
					color: #36f4ff;
					font-size: 1.3rem;
					font-weight: 600;
					margin-right: 10px;

					@media (min-width: 992px) {
						bottom: -4px;
					}
				}
			`};

		${(props) =>
			props.about &&
			css`
				&:before {
					content: "01.";

					@media (min-width: 992px) {
						bottom: -4px;
					}
				}
			`};

		${(props) =>
			props.portfolio &&
			css`
				display: flex;
				align-items: center;
				line-height: 2rem;
				&:before {
					content: "02.";
					font-family: 'Roboto Mono', sans-serif;
					font-size: 1.3rem;
					font-weight: 600;
					margin-right: 10px;
					color: #36f4ff;
					position: relative;
					@media (min-width: 992px) {
						bottom: -4px;
					}
				}
				&:after {
					content: "";
					display: block;
					position: relative;
					top: -5px;
					width: 300px;
					height: 1px;
					margin-left: 20px;
					background-color: #292929;
					margin-top: 8px;
				}
			`};

		&:not(.home):after {
			content: "";
			display: block;
			position: relative;
			top: -5px;
			width: 300px;
			height: 1px;
			margin-left: 20px;
			background-color: #292929;
			margin-top: 8px;
		}

		@media (min-width: 1100px) {
			font-size: 2.1rem;

			${(props) =>
				props.hero &&
				css`
					& {
						font-size: 5.3rem;
					}
				`};
		}

		@keyframes rubberBand {
			from {
				transform: scale3d(1, 1, 1);
			}

			30% {
				transform: scale3d(1.25, 0.75, 1);
			}

			40% {
				transform: scale3d(0.75, 1.25, 1);
			}

			50% {
				transform: scale3d(1.15, 0.85, 1);
			}

			65% {
				transform: scale3d(0.95, 1.05, 1);
			}

			75% {
				transform: scale3d(1.05, 0.95, 1);
			}

			to {
				transform: scale3d(1, 1, 1);
			}
		}

		.letter {
			display: inline-block;
			transition: .5s all;

			&:hover {
				color: #36f4ff;
			}

			&.margin-r {
				margin-right: 7px;

				@media (min-width: 768px) {
					margin-right: 15px; 
				}
			}
			&:not(.double) {
				div {
					display: inline-block;
					animation-duration: 1s;
					animation-fill-mode: both;
					animation-iteration-count: 1;
					transition: .5s all;

					&:hover {
						-webkit-animation-name: rubberBand;
						animation-name: rubberBand;
					}
				}
			}

			.double-container {
				position: relative;
				width: 25px;
				height: 28px;
				@media (min-width: 768px) {
					width: 28px;
				}
				@media (min-width: 768px) {
					width: 41px;
					height: 50px;
				}

				@media (min-width: 1192px) {
					width: 53px;
					height: 65px;
				}
				.letter-1 {
					color: #36f4ff;
					position: absolute;
				}
				.letter-2 {
					color: #ff4136;
					position: absolute;
					left: 4px;
					@media (min-width: 768px) {
						left: 6px;
					}
				}
			}
		}
	}

	${(props) =>
		props.internal &&
		css`
			h1.title {
				color: #fff;
			}
		`};

	.subtitle {
		color: #a5a0a0;
		position: relative;
		letter-spacing: .5px;
		font-size: 1rem;
		margin-top: 1rem;
		font-family: 'Raleway', sans-serif;

		@media (min-width: 900px) {
			font-size: 1rem;
		}

		${(props) =>
			props.internal &&
			css`
				& {
					color: #a5a0a0;
					letter-spacing: 0px;
				}
			`};
	}
`;
