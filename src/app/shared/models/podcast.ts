import { PodCastDetail } from './podcast-detail';

export interface PodCastFeed {
  author: PodCastAuthor;
  updated: {
    label: string;
  };
  rights: {
    label: string;
  };
  title: {
    label: string;
  };
  icon: {
    label: string;
  };
  link: PodCastLink[];
  id: {
    label: string;
  };
  entry: PodCastEntry[];
}

export interface PodCastResult {
  feed: PodCastFeed;
}

export interface PodCastAuthor {
  name: {
    label: string;
  };
  uri: {
    label: string;
  };
}

export interface PodCastLink {
  attributes: {
    rel: string;
    type: string;
    href: string;
  };
}

export interface PodCastImage {
  label: string;
  attributes: {
    height: string;
  };
}

export interface PodCastEntry {
  'im:name': {
    label: string;
  };
  'im:image': PodCastImage[];
  summary: {
    label: string;
  };
  'im:price': {
    label: string;
    attributes: {
      amount: string;
      currency: string;
    };
  };
  'im:contentType': {
    attributes: {
      term: string;
      label: string;
    };
  };
  rights: {
    label: string;
  };
  title: {
    label: string;
  };
  link: {
    attributes: {
      rel: string;
      type: string;
      href: string;
    };
  };
  id: {
    label: string;
    attributes: {
      'im:id': string;
    };
  };
  'im:artist': {
    label: string;
    attributes: {
      href: string;
    };
  };
  category: {
    attributes: {
      'im:id': string;
      term: string;
      scheme: string;
      label: string;
    };
  };
  'im:releaseDate': {
    label: string;
    attributes: {
      label: string;
    };
  };
  detail?: PodCastDetail;
}
