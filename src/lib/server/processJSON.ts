import type { playlistJSON } from '$lib/types';

const modules: Record<string, { default: playlistJSON }> = import.meta.glob(
	'/static/playlists.json',
	{ eager: true }
);
export const fullPlaylistJSON: playlistJSON = modules['/static/playlists.json']['default'];
