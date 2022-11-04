import SingleEvent from '../../components/events/SingleEvent';

export default function EventDetail({ event }) {
	if (!event) {
		return <p>Event not found</p>;
	}

	return <SingleEvent event={event} />;
}

export async function getStaticProps(context) {
	const eventId = context.params.eventId;
	// The filtering for events is done in the query directly
	const singleEventQuery = `https://next-events-62c2a-default-rtdb.europe-west1.firebasedatabase.app/Events/${eventId}.json`;

	const response = await fetch(singleEventQuery);
	const data = await response.json();

	// const events = [];

	// // Firebase returns data as an Object, spread into an Array
	// for (const key in data) {
	// 	events.push({
	// 		id: key,
	// 		...data[key],
	// 	});
	// }

	return {
		props: {
			event: data,
		},
	};
}

export async function getStaticPaths() {
	const allEventsQuery =
		'https://next-events-62c2a-default-rtdb.europe-west1.firebasedatabase.app/Events.json';

	const response = await fetch(allEventsQuery);
	const data = await response.json();

	const events = [];

	// Firebase returns data as an Object, spread into an Array
	//TODO: This is repeated, extract to a utils file?
	for (const key in data) {
		events.push({
			id: key,
			...data[key],
		});
	}

	console.log(events);

	const paths = events.map((event) => ({
		params: { eventId: event.id },
	}));

	return { paths: paths, fallback: false };
}
