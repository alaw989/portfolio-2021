import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';


const Form = () => {
	return (
		<FadeIn transitionDuration={2000} delay={1500} className="letter ">
	
			<form>
				<div className="form-row">
					<input placeholder="Name" type="text" name="name" />
					<input placeholder="Email" type="text" name="email" />
				</div>
				<input placeholder="Subject" type="text" name="name" />
				<div className="form-row">
					<textarea placeholder="Message" />
				</div>
				<div className="form-row">
					{' '}
					<input type="submit" value="Send a Message" />
				</div>
			</form>
		</FadeIn>
	);
};

export default Form;
