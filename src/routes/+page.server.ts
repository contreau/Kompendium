import type { playlistJSON } from '$lib/types';
import { formatBasePlaylists } from '$lib/functions';

// TODO: add a jump to top button after x amount of scrolling

export const load = async () => {
	const { fullPlaylistJSON } = await import('$lib/server/processJSON');
	let playlists: playlistJSON = formatBasePlaylists(fullPlaylistJSON);
	playlists = playlists.slice(0, 100);

	return {
		playlists
	};
};
