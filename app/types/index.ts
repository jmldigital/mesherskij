export interface Scenario {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  image_path: string | null;
  icon_name: string | null;
  ambient_audio_path: string | null;
  order_index: number | null;
  active: boolean | null;
  created_at: string | null;
}

export interface Video {
  id: string;
  scenario_id: string | null;
  title: string | null;
  subtitle: string | null;
  storage_path: string;
  thumbnail_path: string | null;
  duration_sec: number | null;
  highlights: string[] | null;
  order_index: number | null;
  active: boolean | null;
  created_at: string | null;
}

export interface Photo {
  id: string;
  scenario_id: string | null;
  title: string | null;
  subtitle: string | null;
  storage_path: string;
  order_index: number | null;
  active: boolean | null;
  created_at: string | null;
}
