import styled from 'styled-components';
import { css } from 'styled-components';

export const SectionNavStyles = styled.div`
	min-height: 100vh;
	font-family: "Raleway", sans-serif;
	display: flex;
	align-items: center;
	position: absolute;
	z-index: 1;
	width: 100%;
	background-color: #000;
	opacity: 0;
	transition: .5s opacity;

	${(props) =>
		props.opacity &&
		css`
			opacity: 1;
	
			z-index: 2;
		`};

	ul {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
		margin: 0 auto;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
        margin-left: 40px; 

        @media (min-width: 768px) {
            flex-direction: row; 
        }

		li {
			color: #fff;
			list-style-type: none;
			margin: 0 10px;

            @media (min-width: 768px) {
                margin: 0 20px; 
            }
			a {
				display: flex;
				color: #fff;
				text-decoration: none;
				transition: .5s all;
				font-size: 3rem;
               
				&:hover {
					color: #01ff70;
				}

				&.active {
					color: #01ff70;
				}

                .letter {
                    font-family: 'Raleway', sans-serif;
                }
			}
		}
	}
`;
