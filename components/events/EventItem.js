import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/Button';

export default function EventItem({ item }) {
	const { id, title, date, image, location, slug } = item;

	const readableDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	const formattedAddress = location.replace(', ', '\n');

	return (
		<li key={id} id={id}>
			<Image
				src={`/${image}`}
				layout="responsive"
				width="500"
				height="300"
				alt={title}
			/>
			<div>
				<h2>{title}</h2>
			</div>
			<div>
				<time>{readableDate}</time>
			</div>
			<div>
				<address>{formattedAddress}</address>
			</div>
			<div>
				<Button link={`/events/${id}`}>Event Details</Button>
			</div>
		</li>
	);
}
