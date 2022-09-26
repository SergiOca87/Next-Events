import Link from 'next/link';
import React from 'react';

function Button({ link, children, onClick }) {
	if (link) {
		return (
			<Link href={link}>
				{/* Anchor inside for styling purposes */}
				<a>{children}</a>
			</Link>
		);
	}

	return <button onClick={onClick}>{children}</button>;
}

export default Button;
