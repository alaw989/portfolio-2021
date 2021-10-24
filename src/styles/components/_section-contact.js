import styled from 'styled-components';

export const ContactStyles = styled.div`
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
				height: 100vh;
				margin-left: calc(1.5rem * -.5);
				margin-right: calc(1.5rem * -.5);
			}
		}

		.map-container {
			width: 100%;
			position: absolute;

			background-size: contain;

			@media (min-width: 992px) {
				height: 100vh;
			}
			.map-bg {
				position: absolute;
				top: 0;
				right: 0;
				height: 100%;
				width: 50%;
				background-size: cover;
				background-repeat: no-repeat;
			}
		}
	}
`;
