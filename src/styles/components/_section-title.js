import styled from 'styled-components';
import { css } from 'styled-components';

export const TitleStyles = styled.div`
	${(props) =>
		props.portfolio &&
		css`
			max-width: 1100px;
			margin: 0 auto;
		`};

	
		${(props) =>
			props.hero &&
			css`
			max-width: 1000px;
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
			`}

	
	

			.sup-title {
				font-family: 'Roboto Mono', sans-serif;
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
				line-height: 5rem;
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
					color: #858b9b;
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
						&:before {
							content: "02.";

							@media (min-width: 992px) {
								bottom: -4px;
							}
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
					line-height: 6rem;

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
						margin-right: 8px;
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
						width: 28px;
						height: 28px;

						@media (min-width: 768px) {
						width: 41px;
						height: 50px;
						}

						@media (min-width: 1100px) {
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
							left: 6px;
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
		color: #8d8d8d;
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
					color: #fff;
					letter-spacing: 0px;
				}
			`};
	}

	/* ${(props) =>
		props.hero &&
		css`
			.title-container {
				.title-wrapper {
					h1.title {
						font-size: 2.1rem;
						line-height: 3rem;
						@media (min-width: 768px) {
							font-size: 2.5rem;
							line-height: 3rem;
						}
						.letter-double {
							.double-container {
								position: relative;
								width: 28px;
								height: 36px;
								@media (min-width: 768px) {
									width: 32px;
									height: 38px;
								}
							}
						}
					}
				}
			}

			.suptitle {
				text-align: left;
				color: #fff;
				font-family: 'Roboto Mono', sans-serif;
				color: #36f4ff;
			}
		`}; */
`;
