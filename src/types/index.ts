export interface Blog {
  _id: string;
  category: string;
  name: string;
  image: string;
  title: string;
  content: string;
  isPublished: boolean;
  views?: number;
  likes?: number;
}

export interface Product {
  _id: string;
  name: string;
  title: string;
  content: string;
  image: string;
  technologies: string[];
  liveDemoLink: string;
  repoLinkClient: string;
  repoLinkServer: string;
}

export interface Contact {
  _id: string;
  email: string;
  name: string;
  message: string;
}
