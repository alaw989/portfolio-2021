import styled from "styled-components";

export const DevLogoStyles = styled.div`

height: 100%;
    display: flex;
    align-items: center;

.logo-container {
    display: flex; 
    flex-wrap: wrap; 
    justify-content: flex-start;
    margin-top: 3em;

    @media (min-width: 992px) {
        justify-content: center; 
        margin-top: 0; 
    }
    svg {
        margin-right: 20px;
        margin-bottom: 20px;
        width: 15vw;
        max-width: 100px;
    }
}


`;