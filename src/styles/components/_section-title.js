import styled from 'styled-components';
import { css } from 'styled-components';

export const TitleStyles = styled.div`

	.title-container {
	
		position: relative;

		@media (min-width: 992px) {
			max-width: 630px;
		}

		.title-wrapper {
			position: relative;
			&:before {
				content: '<h1>';
				font-family: 'La Belle Aurore', cursive;
				color: #515152;
				font-size: 1rem;
				position: absolute;
				left: -10px;
				top: -5px;
			}

			&:after {
				content: '</h1>';
				font-family: 'La Belle Aurore', cursive;
				color: #515152;
				font-size: 1rem;
				position: absolute;
				left: -10px;
				bottom: 10px;
			}
			h1.title {
				color: #fff;
				text-align: left;
				font-size: 3.5rem;
				line-height: 3.5rem;
				position: relative;
				width: 100%;
				white-space: nowrap;
                font-family: 'Roboto', sans-serif;
                font-weight: 700;
          
				overflow: hidden;
				letter-spacing: -4px;
				padding: 30px 0;

				@media (min-width: 900px) {
					font-size: 5rem;
					line-height: 5rem;
					max-width: 630px;
				}

				@media (min-width: 1100px) {
					font-size: 5.3rem;
					line-height: 5rem;
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
						color: #36F4FF;
					}

					&.margin-r {
						margin-right: 15px;
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
                        width: 41px;
                        height: 47px;

						@media (min-width: 900px) {
							width: 55px;
							height: 68px;
						}

                        @media (min-width: 1100px) {
						    width: 56px;
                            height: 70px;
						}
						.letter-1 {
							color: #36F4FF;
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
						color: #36F4FF;
					}
				`};
		}
	}

	.subtitle {
		color: #8d8d8d;
		text-align: left;
		position: relative;
		letter-spacing: 3px;
		font-size: .9rem;
		margin-top: 20px;
        font-family: 'Raleway', sans-serif;
		@media (min-width: 900px) {
			font-size: 1.1rem;
		}

		${(props) =>
			props.internal &&
			css`
				& {
					color: #fff;
					letter-spacing: 0px;
				}
			`};

		&:before {
			content: '<p>';
			font-family: 'La Belle Aurore', cursive;
			color: #515152;
			font-size: 1rem;
			position: absolute;
			left: -10px;
			top: -25px;
		}

		&:after {
			content: '</p>';
			font-family: 'La Belle Aurore', cursive;
			color: #515152;
			font-size: 1rem;
			position: absolute;
			bottom: -30px;
			left: -10px;

			@media (min-width: 1100px) {
				left: -10px;
			}
		}
	}
	


    
`;
