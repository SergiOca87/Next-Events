import Head from 'next/head';
import { useRouter } from 'next/router';
import EventItem from '../../components/events/EventItem';
import EventList from '../../components/events/EventList';
import { getFilteredEvents } from '../../dummy-data';

export default function FilteredEventsPage({ events }) {
	return (
		<div>
			<Head>
				<title>Filtered Events Page</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>Filtered Events</h1>

				{!events || events.length <= 0 ? (
					<p>Your search has no results</p>
				) : (
					<EventList items={events} />
				)}
			</main>
		</div>
	);
}

export async function getServerSideProps(context) {
	const { params } = context;

	const filteredData = params.slug;

	if (!filteredData) {
		return <p>...Loading</p>;
	}

	// Make sure URL params are numbers
	const numYear = Number(filteredData[0]);
	const numMonth = Number(filteredData[1]);

	if (isNaN(numYear) || isNaN(numMonth)) {
		return { notFound: true };
	}

	async function getFilteredEvents(year, month) {
		const allEventsQuery = `https://next-events-62c2a-default-rtdb.europe-west1.firebasedatabase.app/Events.json`;

		const response = await fetch(allEventsQuery);
		const data = await response.json();

		let filteredEvents = data.filter((event) => {
			const eventDate = new Date(event.date);
			return (
				eventDate.getFullYear() === year &&
				eventDate.getMonth() === month - 1
			);
		});

		return filteredEvents;
	}

	// Year and Month
	const filteredEvents = await getFilteredEvents(numYear, numMonth);

	return {
		props: {
			events: filteredEvents,
		},
	};
}
