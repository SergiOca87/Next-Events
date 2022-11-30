import React, { useState } from 'react';

function NewsletterSignUp() {
	const [email, setEmail] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch('/api/newsletter-sign-up', {
			method: 'POST',
			body: JSON.stringify({ email }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => console.log(data));
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="email"
				placeholder="Your Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input type="submit" value="Submit" />
		</form>
	);
}

export default NewsletterSignUp;
