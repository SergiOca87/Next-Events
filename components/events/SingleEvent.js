import Head from 'next/head';
import Image from 'next/image';

export default function SingleEvent({ event }) {
	return (
		<div>
			<Head>
				<title>{event.title}</title>
				<meta name="description" content={event.description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<h1>{event.title}</h1>
			</main>
		</div>
	);
}
