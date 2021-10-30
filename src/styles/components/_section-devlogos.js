import styled from 'styled-components';

export const DevLogoStyles = styled.div`
	height: 100%;
	display: flex;
	align-items: center;

	.logo-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		margin-top: 3em;

		@media (min-width: 992px) {
			justify-content: center;
			margin-top: 0;
		}

		svg {
			margin: 5px;
			margin-bottom: 20px;
			width: 11vw;
			max-width: 100px;

			@media (min-width: 992px) {
				width: 5vw;
			}
		}

		@keyframes App-logo-spin {
			from {
				transform: rotate(0deg);
			}
			to {
				transform: rotate(360deg);
			}
		}

		.logo.react {
			svg {
				animation: App-logo-spin infinite 20s linear;
			}
		}
	}
`;
