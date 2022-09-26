import { useRef } from 'react';
import Button from '../ui/Button';

export default function EventFilter({
	filteredEvents,
	setFilteredEvents,
	onFormSubmit,
}) {
	// Using ref since we onoly care about this value once, on form submit
	const yearInputRef = useRef();
	const monthInputRef = useRef();

	function handleSubmit(e) {
		e.preventDefault();

		const filteredMonth = monthInputRef.current.value;
		const filteredYear = yearInputRef.current.value;

		onFormSubmit(filteredMonth, filteredYear);
	}

	return (
		<>
			<form>
				<p>Filter by post title</p>
				<input
					type="text"
					value={filteredEvents}
					onChange={(e) => setFilteredEvents(e.target.value)}
				></input>
			</form>
			<form onSubmit={handleSubmit}>
				<p>Filter by date</p>
				<label htmlFor="year">Year</label>
				<select id="year" ref={yearInputRef}>
					<option value="2021">2021</option>
					<option value="2022">2022</option>
				</select>

				<label htmlFor="month">Month</label>
				<select id="month" ref={monthInputRef}>
					<option value="1">January</option>
					<option value="2">February</option>
					<option value="3">March</option>
					<option value="4">April</option>
					<option value="5">May</option>
					<option value="6">June</option>
					<option value="7">July</option>
					<option value="8">August</option>
					<option value="9">September</option>
					<option value="10">October</option>
					<option value="11">November</option>
					<option value="12">December</option>
				</select>

				<Button>Filter</Button>
			</form>
		</>
	);
}
