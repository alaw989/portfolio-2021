import styled from 'styled-components';

export const FixedStyles = styled.div`
	position: fixed;
	bottom: -5px;
	right: 0;
	color: white;
	display: none;
	z-index: 1000;
 
	@media (min-width: 768px) {
		display: block;
	}

		a.email {
			display: flex;
			flex-direction: row;
			color: #fff;
			font-family: 'Roboto Mono', sans-serif;
			position: absolute;
			right: -120px;
			bottom: 148px;
			align-items: center;
			letter-spacing: 3px;
			transition: .5s all;
            transform: rotate(90deg);
			&:hover {
				color: #36f4ff;
				margin-bottom: 5px; 
			}

			&:after {
				content: "";
				display: block;
				width: 90px;
				height: 1px;
				margin: 0px auto;
				color: white;
				margin-left: 20px; 
				position: relative;
				background-color: #fff;
			}
		}
	
`;
