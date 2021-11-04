import styled from 'styled-components';
import { css } from 'styled-components';

export const AboutStyles = styled.div`
	display: flex;
	align-items: center;
	top: 0;
	height: calc(100% - 150px);
	min-height: 1000px;
	z-index: 1;
	padding: 80px 0px;
	max-width: 900px;
	margin-left: auto;
	margin-right: auto;

	@media (min-width: 768px) {
		padding: 100px 0;
	}

	@media (min-width: 992px) {
		min-height: 0;
	}

	${(props) =>
		props.opacity &&
		css`
			z-index: 0;
			opacity: 0;
		`};

	.title-container {
		.subtitle {
			a {
				color: #ff4136;
				transition: .5s all;
				font-weight: 700;
				&:hover {
					color: #36f4ff;
				}
			}
		}

		ul.skills-list {
			display: grid;
			grid-template-columns: repeat(2, minmax(140px, 200px));
			gap: 0px 10px;
			padding: 0px;
			margin: 20px 0px 0px;
			overflow: hidden;
			list-style: none;
			li {
				font-family: 'Roboto Mono', sans-serif;
				font-size: 13px;
				margin-bottom: 5px; 
				color: #fff;
				display: flex;
				justify-content: flex-start;
				padding-left: 12px;
				position: relative;
				&:before {
					content: "▹";
					position: absolute;
					left: -2px;
					color: #36f4ff;
					font-size: 12px;
					line-height: 12px;
					top: 2px;
				}
			}
		}
	}
`;
