import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/EventList';

export default function Home() {
	const featuredEvents = getFeaturedEvents();

	return (
		<div className={styles.container}>
			<Head>
				<title>NextJs Events</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>Homepage</h1>

				<EventList items={featuredEvents} />
			</main>
		</div>
	);
}
