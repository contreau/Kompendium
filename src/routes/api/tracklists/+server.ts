import type { playlistJSON } from "$lib/types";
import { json } from "@sveltejs/kit";

// data
import ascendingPlaylists from "$lib/data/playlists-web-ascending.json";
import descendingPlaylists from "$lib/data/playlists-web-descending.json";

export const GET = ({ url }) => {
  const id: number = Number(url.searchParams.get("id"));
  const order: string = url.searchParams.get("order") || "descending";

  if (order === "descending") {
    const playlists = descendingPlaylists as playlistJSON;
    return json(playlists[id].tracks);
  }
  if (order === "ascending") {
    const playlists = ascendingPlaylists as playlistJSON;
    return json(playlists[id].tracks);
  }
};
