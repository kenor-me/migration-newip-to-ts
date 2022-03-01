export interface Source {
  id: string,
  name: string
}

export interface INews {
  author: string,
  content: string,
  description: string,
  publishedAt: string,
  source: Source,
  title: string,
  url: string,
  urlToImage: string,
}

export interface NewsData {
  articles: Array<INews>,
  status: string,
  totalResults: number
}

export interface Articles {
  category: string,
  country: string,
  description: string,
  id: string,
  language: string,
  name: string,
  url: string
}

export interface SourcesData {
  sources: Array<Articles>,
  status: string
}

export interface OptionalInterface {
  [key: string]: string
}

export type CallbackType<T> = (data: T) => void;
