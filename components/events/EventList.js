import EventItem from './EventItem';

export default function EventList({ items }) {
	return (
		<ul>
			{items.length && items.map((item) => <EventItem item={item} />)}
		</ul>
	);
}
