import styled from 'styled-components';

export const HeaderStyles = styled.div`
	position: relative;
	
	
	padding: 20px 20px; 
	display: flex;
    justify-content: space-between;
    align-items: center;
	
	.logo {
	
		left: 25px;
		top: 25px;
		height: 50px;
		width: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		.text,
		.text > * {
			position: absolute;
		
			
			transform: translate(-50%, -50%);
			z-index: 3;
			font-family: 'Roboto', sans-serif;
			font-weight: 700;
			cursor: pointer;
		}
		.text {
			> * {
				font-size: 50px;
				animation: giggle 1s ease infinite;
				mix-blend-mode: difference;
			}
			.r {
				color: #f00;
				left: -0.5px;
			}
			.g {
				color: #0f0;
				animation-delay: -0.67s;
			}
			.b {
				color: #00f;
				animation-delay: -0.33s;
				left: 0.5px;
			}
		}
	}

	@keyframes giggle {
		0%,
		100% {
			transform: translate(-50%, -50%) translateY(-2px);
		}
		50% {
			transform: translate(-50%, -50%) translateY(2px);
		}
	}
	@keyframes lines {
		0% {
			background-position: 0px 0px;
		}
		100% {
			background-position: 0px 25px;
		}
	}
`;
