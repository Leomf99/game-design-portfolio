export type Project = {
  slug: string;
  title: string;
  overview: string;
  contributions: Array<{
    text: string;
    details?: string[];
  }>;
  video: string;
  images: string[];
  details: {
    studio: string;
    genre: string;
    platform: string;
    developmentDuration: string;
    engine: string;
  };
};
