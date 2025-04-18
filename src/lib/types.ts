export type playlistJSON = Array<Playlist>;

interface Playlist {
  name: string;
  dateCreated: string;
  description: string | undefined;
  url: string;
  trackCount: number;
  tracks?: Array<Tracks>;
}

export interface Tracks {
  name: string;
  artists: Array<string>;
  album: string;
  url: string;
  dateAdded: string;
}

export type RouteParams = {
  range: string;
};

export interface routeDetails {
  range: string;
  lastPageRoute: string | null;
  nextPageRoute: string | null;
}
