import styled from 'styled-components';


export const MmenuStyles = styled.div`
	position: absolute;
	right: 25px;
	top: 25px;
	z-index: 3;
    cursor: pointer; 

	.menu-container {
		color: #fff;
        font-family: 'Roboto', sans-serif;
        letter-spacing: 3px;
        transition: .5s all;
        &:hover {
            color: #01ff70;
        }
	}
`;
