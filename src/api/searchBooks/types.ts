export interface ISearchBookInputs {
  filter: filter;
  langRestrict: string; // Too much types
  maxResults: number;
  orderBy: orderBy;
  printType: printType;
  projection: projection;
  q: string;
}

type filter = 'partial' | 'full' | 'free-ebooks' | 'paid-ebooks' | 'ebooks';
type orderBy = 'relevance' | 'newest';
type printType = 'all' | 'books' | 'magazines';
type projection = 'full' | 'lite';
