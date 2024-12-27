import { redirect } from "@sveltejs/kit";

export function load() {
  throw redirect(307, "/playlists/1-100?order=descending");
}
