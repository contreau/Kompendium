import type { playlistJSON } from "$lib/types";

const modules: Record<string, { default: playlistJSON }> = import.meta.glob(
  "/static/playlists-fmt.json",
  { eager: true }
);
export const fullPlaylistJSON: playlistJSON =
  modules["/static/playlists-fmt.json"]["default"];
