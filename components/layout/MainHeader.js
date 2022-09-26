import Link from 'next/link';

export default function MainHeader() {
	return (
		<>
			<header>
				<Link href="/">Next Events</Link>
			</header>
			<nav>
				<ul>
					<li>
						<Link href="/events">All Events</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
