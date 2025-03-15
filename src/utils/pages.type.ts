import { BannerProps } from "./home.type";

export interface PagesProps{
    objects: ItemPageProps[];
}

export interface ItemPageProps{
    slug: string;
    title: string;
    type: string;
    metadata: {
      banner: BannerProps;
      button: {
        title: string;
        url: string;
      },
      description: {
        title: string;
        text: string; 
        banner: BannerProps;
        button_active: boolean;
        button_title: string;
        button_url: string;
      }
  }
}