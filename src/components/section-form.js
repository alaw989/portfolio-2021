import React from 'react';

const Form = () => {
	return (
		<form>
			<div className="form-row">
				<input placeholder="Name" type="text" name="name" />
				<input placeholder="Email" type="text" name="email" />
			</div>
			<div className="form-row">
				<input placeholder="Subject" type="text" name="name" />
			</div>
			<div className="form-row">
				<textarea placeholder="Message" />
			</div>

			<input type="submit" value="Submit" />
		</form>
	);
};

export default Form;
