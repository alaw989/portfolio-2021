import styled from 'styled-components';

export const FormStyles = styled.div`
	margin-top: 50px;
    width: 100%; 

	form {

        .form-row {
            display: flex; 
            justify-content: space-between;
            input:not([type=submit]) {
                max-width: 49%;
            }
        }
   
	
		input:not([type=submit]),
		textarea {
			width: 100%;
            margin-bottom: 10px; 
            background: #2b2b2b;
            border: none;
            padding: 10px 0 10px 15px;
            font-family: 'Roboto', sans-serif;
            border-radius: 5px; 
            transition: .5s all;

            &:hover {
                box-shadow: 0 0 0 1px #36F4FF;
            }


            &:focus {
                box-shadow: 0 0 0 2px #36F4FF;;
            }
		}

        input[type=submit] {
            border: 1px solid #36F4FF;
            border-radius: 0; 
            background-color: #000;
            padding: 10px 20px; 
            color: #36F4FF;
            font-family: 'Roboto', sans-serif;
            letter-spacing: 2px;
            margin-top: 20px; 
            transition: .5s all;
            border-radius: 5px; 
            &:hover {
                color: #000;
                background-color: #36F4FF;
            }
        }
	}
`;
