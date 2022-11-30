// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
	if (req.method === 'POST') {
		console.log('we got a post request', req.body);
		const email = req.body.email;

		// While we have validation on the frontend input, the validation here should be the most important one.
		if (!email || !email.includes('@')) {
			return;
		}

		// If we get here, the email is valid
		res.status(201).json({ message: 'Thank you for signing up!' });
		console.log(email);
	}
}
