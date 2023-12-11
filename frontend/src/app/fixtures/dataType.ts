export type MCMovie = {
  _id: string;
  title: string;
  genre: string;
  director: string;
  release_year: number;
  rating: number;
  summary: string;
  rated: string;
  image: string;
  country: string;
  duration: number;
  trailer_link: string;
  cast: {
    name: string;
    role: string;
    character_name: string;
    image: string;
  }[];
};
