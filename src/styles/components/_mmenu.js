import styled from 'styled-components';

export const MmenuStyles = styled.div`

	right: 25px;
	top: 25px;
	z-index: 3;
    cursor: pointer; 

	.menu-container {
		color: #fff;
        font-family: 'Roboto', sans-serif;
        letter-spacing: 3px;
        transition: .5s all;
        font-size: .8rem;
        text-transform: uppercase;
        &:hover {
            color: #36F4FF;
        }
	}
`;
