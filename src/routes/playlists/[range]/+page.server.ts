import type { playlistJSON } from "$lib/types";
import { playlistRoutes } from "$lib/routes";
import playlistData from "$lib/data/playlists-web-descending.json";

export const load = async ({ params }) => {
  const currentRoute = playlistRoutes.find(
    (route) => route.range === params.range
  );
  if (!currentRoute) {
    throw new Error("Invalid range");
  }

  const [start, end] = currentRoute.range.split("-").map(Number);
  const playlists: playlistJSON = (playlistData as playlistJSON).slice(
    start - 1,
    end
  );

  return {
    playlists,
    currentPageRoute: currentRoute.range,
  };
};
