export interface NewsType {
  title: string;
  press: string;
  image: string;
  url: string;
  writedAt: string;
}

export interface NewsType {
  data: {
    title: string;
    press: string;
    image: string;
    url: string;
    writedAt: string;
  }[];
}
