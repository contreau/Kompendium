import type { routeDetails } from "./types";

export const playlistRoutes: Array<routeDetails> = [
  { range: "", lastPageRoute: null, nextPageRoute: "1-100" },
  { range: "1-100", lastPageRoute: "/", nextPageRoute: "101-200" },
  { range: "101-200", lastPageRoute: "1-100", nextPageRoute: "201-300" },
  { range: "201-300", lastPageRoute: "101-200", nextPageRoute: "301-400" },
  { range: "301-400", lastPageRoute: "201-300", nextPageRoute: "401-500" },
  { range: "401-500", lastPageRoute: "301-400", nextPageRoute: "501-600" },
  { range: "501-600", lastPageRoute: "401-500", nextPageRoute: "601-700" },
  { range: "601-700", lastPageRoute: "501-600", nextPageRoute: "701-800" },
  { range: "701-800", lastPageRoute: "601-700", nextPageRoute: "801-826" },
  { range: "801-826", lastPageRoute: "701-800", nextPageRoute: null },
];
