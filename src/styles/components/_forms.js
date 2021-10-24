import styled from 'styled-components';

export const FormStyles = styled.div`
	margin-top: 50px;
    width: 100%; 

	form {

		@media (min-width: 992px) {
            margin-right: 50px; 
        }
		input:not([type=submit]),
		textarea {
			width: 100%;
            margin-bottom: 10px; 
            background: #2b2b2b;
            border: none;
            padding: 10px 0 10px 15px;
            font-family: 'Roboto', sans-serif;
		}
	}
`;
