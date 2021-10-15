import styled from 'styled-components';

export const SectionNavStyles = styled.div`
	padding: 3em 0;
	font-family: "Raleway", sans-serif;
	ul {
		display: flex;
		justify-content: center;
		padding: 0;
		margin: 0 auto;
		li {
			color: #fff;
			list-style-type: none;
			margin: 0 10px;
			a {
				color: #fff;
				text-decoration: none;
				transition: .5s all;
				&:hover {
					color: red;
				}

				&.active {
					color: red;
				}
			}
		}
	}
`;
