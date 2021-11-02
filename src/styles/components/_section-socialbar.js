import styled from 'styled-components';

export const SocialBarStyles = styled.div`
	position: fixed;
	bottom: 0;
	left: -5px;
	color: white;
	display: none;
	z-index: 1000;

	&:after {
		content: "";
		display: block;
		width: 90px;
		height: 1px;
		margin: 0px auto;
		color: white;
		transform: rotate(90deg);
		bottom: 45px;
		position: relative;
		background-color: #fff;
		transform: rotate(90deg);
	}

	@media (min-width: 768px) {
		display: block;
	}

	.icon-container {
		display: flex;
		flex-direction: column;
		margin-bottom: 110px;
		a {
			color: #fff;
            margin-bottom: 25px; 
			svg {
                width: 20px;
				g {
					fill: white;
				}
			}
		}
	}
`;
