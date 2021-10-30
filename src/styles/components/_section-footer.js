import styled from 'styled-components';

export const FooterStyles = styled.div`
	height: 50px;

	.react-text {
		display: flex;
		justify-content: center;
        align-items: center;
		color: #3e3c3c;
		font-size: .9rem;
		span {
			width: 20px;
            margin-left: 5px; 
            animation: App-logo-spin infinite 20s linear;
		}
	}


    @keyframes App-logo-spin {
			from {
				transform: rotate(0deg);
			}
			to {
				transform: rotate(360deg);
			}
		}
`;
