export interface Video {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  thumbnail: string;
  views: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  iconName: "users" | "heart" | "building2" | "trendingUp" | "treePine";
  count: number;
}
