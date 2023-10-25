import { TrackType } from '../types/podcast.type';

export interface PodCastTrackInfo {
  podCast: PodCastDetail;
  track: Track;
}

export interface PodCastDetailResult {
  resultCount: number;
  results: TrackType[];
}

export interface PodCastDetail {
  info: PodCastInfo;
  tracks: Track[];
}

export interface Track {
  artworkUrl160: string;
  artworkUrl600: string;
  episodeFileExtension: string;
  episodeContentType: string;
  feedUrl: string;
  closedCaptioning: string;
  collectionId: number;
  collectionName: string;
  genres: TrackGenre[];
  episodeGuid: string;
  description: string;
  artistIds: number[];
  trackId: number;
  trackName: string;
  releaseDate: string;
  shortDescription: string;
  previewUrl: string;
  episodeUrl: string;
  contentAdvisoryRating: string;
  trackViewUrl: string;
  collectionViewUrl: string;
  artworkUrl60: string;
  artistViewUrl: string;
  trackTimeMillis: number;
  country: string;
  kind: string;
  wrapperType: string;
}

export interface PodCastInfo {
  wrapperType: string;
  kind: string;
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  artworkUrl600: string;
  collectionPrice: number;
  trackPrice: number;
  collectionHdPrice: number;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness: string;
  trackCount: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  contentAdvisoryRating: string;
  genreIds: string[];
  genres: string[];
  summary?: string;
}

export interface TrackGenre {
  name: string;
  id: string;
}
