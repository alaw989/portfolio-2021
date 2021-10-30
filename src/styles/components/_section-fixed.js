import styled from 'styled-components';
import css from 'styled-components';

export const FixedStyles = styled.div`
	position: fixed;
	bottom: 0;
	right: 0;
	color: white;
	display: none;
	z-index: 1000;

    
	${(props) => props.socials && css`
        left: 0;
    `};

	@media (min-width: 768px) {
		display: block;
	}



	.fixed-bar {
		a.email {
			display: flex;
			flex-direction: row;
			color: #fff;
			font-family: 'Roboto Mono', sans-serif;
			transform: rotate(90deg);
			position: absolute;
			right: -50px;
			bottom: 185px;
			align-items: center;
			letter-spacing: 3px;
			transition: .5s all;

			&:hover {
				color: #36f4ff;
			}

			&:after {
				content: "";
				display: block;
				width: 1px;
				height: 90px;
				margin: 0px auto;
				color: white;
				transform: rotate(90deg);
				left: 103px;
				position: relative;
				background-color: #fff;
			}
		}
	}
`;
