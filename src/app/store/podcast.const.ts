import { LoadingState, TransmissionState } from './podcast-store.model';
import * as moment from 'moment';

export const MOCK_POD_CAST_INFO = {
  wrapperType: '',
  kind: '',
  artistId: 0,
  collectionId: 0,
  trackId: 0,
  artistName: '',
  collectionName: '',
  trackName: '',
  collectionCensoredName: '',
  trackCensoredName: '',
  artistViewUrl: '',
  collectionViewUrl: '',
  feedUrl: '',
  trackViewUrl: '',
  artworkUrl30: '',
  artworkUrl60: '',
  artworkUrl100: '',
  artworkUrl600: '',
  collectionPrice: 0,
  trackPrice: 0,
  collectionHdPrice: 0,
  releaseDate: '',
  collectionExplicitness: '',
  trackExplicitness: '',
  trackCount: 0,
  trackTimeMillis: 0,
  country: '',
  currency: '',
  primaryGenreName: '',
  contentAdvisoryRating: '',
  genreIds: [],
  genres: [],
};

export const PODCAST_INTIAL_STATE = {
  data: {
    author: {
      name: {
        label: '',
      },
      uri: {
        label: '',
      },
    },
    updated: {
      label: '',
    },
    rights: {
      label: '',
    },
    title: {
      label: '',
    },
    icon: {
      label: '',
    },
    id: {
      label: '',
    },
    link: [],
    entry: [],
  },
  currentPodCast: {
    info: MOCK_POD_CAST_INFO,
    tracks: [],
  },
  currentTrack: {
    artworkUrl160: '',
    artworkUrl600: '',
    episodeFileExtension: '',
    episodeContentType: '',
    feedUrl: '',
    closedCaptioning: '',
    collectionId: 0,
    collectionName: '',
    genres: [],
    episodeGuid: '',
    description: '',
    artistIds: [],
    trackId: 0,
    trackName: '',
    releaseDate: '',
    shortDescription: '',
    previewUrl: '',
    episodeUrl: '',
    contentAdvisoryRating: '',
    trackViewUrl: '',
    collectionViewUrl: '',
    artworkUrl60: '',
    artistViewUrl: '',
    trackTimeMillis: 0,
    country: '',
    kind: '',
    wrapperType: '',
  },
  callState: LoadingState.INIT,
  transmissionState: TransmissionState.INACTIVE,
};

export const COMPARE_DATES = (baseDate: string): boolean => {
  const currentDate = moment(baseDate);
  const dateToCompare = moment(baseDate).add(24, 'hours');
  const timeDifference = dateToCompare.diff(currentDate);
  /**
   * console.log('DATES => ', {
    currentDate,
    dateToCompare,
    timeDifference,
    pass24Hours: timeDifference > 24 * 60 * 60 * 1000,
  });
   */
  return timeDifference > 24 * 60 * 60 * 1000;
};
