interface SearchResult {
  page: string;
  results: {
    adult?: boolean;
    backdrop_path?: string;
    id?: number;
    name?: string;
    title?: string;
    original_name?: string;
    original_title?: string;
    overview?: string;
    poster_path?: string;
    media_type?: string;
    popularity?: string;
    first_air_date?: string;
    origin_country?: string[];
  }[]
}