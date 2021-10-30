import styled from 'styled-components';
import { css } from 'styled-components';

export const ContactStyles = styled.div`
	display: flex;
	align-items: center;
	top: 0;
	transition: .5s all;
	width: 100%;
	position: relative;
	padding: 80px 0; 
	margin-bottom: 50px; 
	max-width: 600px; 
	margin-left: auto; 
	margin-right: auto; 

	@media (min-width: 768px) {
		padding: 100px 0; 
		margin-bottom: 100px; 
	}

	${(props) =>
		props.opacity &&
		css`
			z-index: 1;
			opacity: 0;
		`};

		h1.title {
			justify-content: center;
		}
		h1.title:after {
			display: none !important; 
		}

	/* .map-container {
		width: 100%;
		position: absolute;
		height: 400px;
		&.mobile {
			display: block;
			position: relative;
			margin-top: 50px;
		}
		&.desktop {
			display: none;
		}

		@media (min-width: 992px) {
			height: 100%;
			top: 0;
			width: 50%;
			&.desktop {
				display: block;
				right: 0;
			}
			&.mobile {
				display: none;
			}
		}

		.map-text {
			position: absolute;
			top: 30px;
			left: 30px;
			z-index: 1;
			color: white;
			background-color: rgba(0, 0, 0, .8);
			padding: 10px;
			text-align: left;
			font-family: 'Roboto', sans-serif;
			span {
				color: #36F4FF;
			}
		}

		.map-bg {
			position: absolute;
			top: 0;
			right: 0;
			height: 100%;
			width: 100%;
			background-size: cover;
			background-repeat: no-repeat;

			@media (min-width: 992px) {
				width: 100%;
				height: 100%;
			}
		}
	} */
	.section-contact {
		color: #fff;
		height: 100%;
		width: 100%;
		position: relative;

		.form-container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			position: relative;
			z-index: 1;
			align-items: center;
			height: 100%;
		
		}

		.contact-button {
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
			background-color: #1d1d1d;
            &:hover {
                color: #000;
                background-color: #36F4FF;
            }
		}
	}
`;
