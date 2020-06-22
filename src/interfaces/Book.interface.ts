export interface IBook {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: IVolumeInfo;
  saleInfo: ISaleInfo;
  searchInfo: ISearchInfo;
}

export interface ISearchInfo {
  textSnippet: string;
}

export interface IAccessInfo {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: IEpub;
  pdf: IPdf;
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
}

export interface IEpub {
  isAvailable: boolean;
}
export interface IPdf {
  isAvailable: boolean;
}

export interface ISaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
  listPrice: {
    amount: number;
    currencyCode: string;
  };
  retailPrice: {
    amount: number;
    currencyCode: string;
  };
  buyLink: string;
  offers: IOffers[];
}
export interface IOffers {
  finskyOfferType: number;
  listPrice: {
    amountInMicros: number;
    currencyCode: string;
  };
  retailPrice: {
    amountInMicros: number;
    currencyCode: string;
  };
}

export interface IVolumeInfo {
  title: string;
  subtitle: string;
  authors: String[];
  publisher: string;
  publishedDate: string;
  industryIdentifiers: IIndustryIdentifiers[];
  readingModes: IReadingModes;
  pageCount: number;
  printType: string;
  categories: string[];
  averageRating: number;
  ratingsCount: number;
  description: string;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: IPanelizationSummary;
  imageLinks: IImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}
export interface IImageLinks {
  smallThumbnail: string;
  thumbnail?: string;
}
export interface IPanelizationSummary {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}
export interface IIndustryIdentifiers {
  type: string;
  identifier: string;
}
export interface IReadingModes {
  text: boolean;
  image: boolean;
}
