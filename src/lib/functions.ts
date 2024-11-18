import { decodeHTML } from 'entities';
import type { playlistJSON } from '$lib/types';

function formatDate(dateString: string): string {
	const months: Record<string, string> = {
		'01': 'January',
		'02': 'February',
		'03': 'March',
		'04': 'April',
		'05': 'May',
		'06': 'June',
		'07': 'July',
		'08': 'August',
		'09': 'September',
		'10': 'October',
		'11': 'November',
		'12': 'December'
	};
	const dateComponents = dateString.split('-');
	let day = dateComponents[1];
	if (day[0] === '0') {
		day = day[1];
	}
	return `${months[dateComponents[0]]} ${day}, ${dateComponents[2]}`;
}

export function formatBasePlaylists(playlists: playlistJSON) {
	return playlists.map((pl) => {
		pl['name'] = decodeHTML(pl['name']);
		// pl['dateCreated'] = formatDate(pl['dateCreated']);
		return pl;
	});
}
