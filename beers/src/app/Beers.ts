export interface Beer {
  id?: number;
  name: string;
  description: string;
  image_url: string;
  tagline: string;
  first_brewed: Date;
  brewers_tips: string;
  food_pairing?: string;
}
