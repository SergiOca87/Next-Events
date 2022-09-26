import FilteredEventsPage from '../../pages/events/[...slug]';
import EventItem from './EventItem';

export default function EventList({ items, filteredEvents }) {
	return (
		// filteredEvents?.length ?
		// 	items.filter(item => item.title.includes(filteredEvents)).map(item => <EventItem item={item}) : ''
		// items.map((item) => <EventItem item={item} />)

		filteredEvents?.length
			? items
					.filter((item) =>
						item.title.toLowerCase().includes(filteredEvents)
					)
					.map((item) => <EventItem item={item} />)
			: items.map((item) => <EventItem item={item} />)
	);
}
