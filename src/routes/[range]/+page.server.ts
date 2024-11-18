import type { EntryGenerator } from './$types';
import type { playlistJSON } from '$lib/types';
import { formatBasePlaylists } from '$lib/functions';
import { routeEntries } from '$lib/routes';

export const entries: EntryGenerator = () => {
	return [
		{ range: '101-200' },
		{ range: '201-300' },
		{ range: '301-400' },
		{ range: '401-500' },
		{ range: '501-600' },
		{ range: '601-700' },
		{ range: '701-800' },
		{ range: '801-826' }
	];
};

export const load = async ({ params }) => {
	const { fullPlaylistJSON } = await import('$lib/server/processJSON');

	let playlists: playlistJSON = formatBasePlaylists(fullPlaylistJSON);

	const currentEntry = routeEntries.find((entry) => entry.range === params.range);
	if (!currentEntry) {
		throw new Error('Invalid range');
	}

	const [start, end] = currentEntry.range.split('-').map(Number);

	playlists = playlists.slice(start - 1, end);

	return {
		playlists,
		currentPageRoute: currentEntry.range
	};
};
