import type { playlistJSON } from "$lib/types";
import { playlistRoutes } from "$lib/routes";
import descendingPlaylistData from "$lib/data/playlists-web-descending.json";
import ascendingPlaylistData from "$lib/data/playlists-web-ascending.json";

export const load = async ({ params, url }) => {
  const currentRoute = playlistRoutes.find(
    (route) => route.range === params.range
  );
  if (!currentRoute) {
    throw new Error("Invalid range");
  }
  const viewingOrder: string = url.searchParams.get("order") || "descending";

  let chosenData;
  if (viewingOrder === "descending") {
    chosenData = descendingPlaylistData as playlistJSON;
  } else if (viewingOrder === "ascending") {
    chosenData = ascendingPlaylistData as playlistJSON;
  }

  const [start, end] = currentRoute.range.split("-").map(Number);
  const playlists: playlistJSON = (chosenData as playlistJSON).slice(
    start - 1,
    end
  );

  return {
    playlists,
    currentPageRoute: currentRoute.range,
    viewingOrder,
  };
};
