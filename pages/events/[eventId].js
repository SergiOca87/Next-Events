import { useRouter } from 'next/router';
import SingleEvent from '../../components/events/SingleEvent';
import { getEventById } from '../../dummy-data';

export default function EventDetail() {
	const router = useRouter();
	const eventId = router.query.eventId;
	const event = getEventById(eventId);

	if (!event) {
		return <p>Event not found</p>;
	}

	return <SingleEvent event={event} />;
}
