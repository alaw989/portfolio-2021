import styled from 'styled-components';

export const HeaderStyles = styled.div`
	position: fixed;
	width: 100%;
	padding: 0px 20px;

	justify-content: space-between;
	align-items: center;
	height: 75px;
	z-index: 3;
	transition: all .5s;
	
	@media (max-width: 992px) {
		display: ${(props) => (props.scroll ? 'flex' : 'none')};
	}

	@media (min-width: 992px) {
		transform: ${(props) => (props.scroll ? 'translateY(0px)' : 'translateY(-75px)')};
		display: flex;
	}

	backdrop-filter: ${(props) => (props.top ? 'blur(0px);' : 'blur(10px);')};

	@media (min-width: 768px) {
		padding: 0px 40px; 
	}

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
		@media (min-width: 992px) {
			animation: giggle 1s ease infinite;
		}
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

	.right-container {
		display: flex;
		align-items: center;
		a {
			margin-right: 10px;
			border: 1px solid #36f4ff;
			border-radius: 0;
			background-color: #000;
			padding: 5px 10px;
			color: #36f4ff;
			font-family: 'Roboto Mono', sans-serif;
			letter-spacing: 2px;
			transition: .5s all;
			border-radius: 5px;
			background-color: transparent;
			font-size: .8rem;
			display: none; 
			@media (min-width: 768px) {
				display: block;
			}
			&:hover {
				color: #000;
				background-color: #36f4ff;
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
