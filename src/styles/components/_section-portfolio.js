import styled from 'styled-components';

export const PortfolioStyles = styled.div`
	width: 100%;
	height: 40vw;
	margin-top: 5em;
	.section-portfolio {
		width: 100%;
		height: 40vw;
		ul.portfolio-wrapper {
			display: flex;
			flex-wrap: wrap;
            height: 40vw;
			padding: 0;
			li.portfolio-block {
                list-style-type: none;
				width: 33.33%;
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center;

                @media (min-width: 768px) {
                    width: 25%; 
                }
			}
		}
	}
`;
