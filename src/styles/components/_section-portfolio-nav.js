import styled from 'styled-components';
import { css } from 'styled-components';

export const PortfolioNavStyles = styled.div`
	transition: .5s all;

	${(props) =>
		props.opacity &&
		css`
			z-index: 1;
			opacity: 0;
		`};
	ul.nav-container {
		color: #fff;
		display: flex;
		justify-content: center;
		padding: 0;
		margin-bottom: 0;
		margin-top: 30px;
		cursor: pointer;
		position: relative;
		z-index: 3;

		li {
			list-style-type: none;
			color: #fff;
			margin: 0 10px;
			font-family: 'Roboto', sans-serif;
			cursor: pointer;
			font-weight: 500;
			letter-spacing: 2px;
			transition: .5s all;
			padding: 10px;
			&:hover {
				color: #ff4136;
			}

			&.highlighted {
				color: #ff4136;
				background-color: rgba(0, 0, 0, 0.3);
				padding: 10px 15px;
                border-radius: 5px; 
			}
		}
	}
`;
