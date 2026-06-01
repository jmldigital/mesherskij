export interface QuizNode {
  id: string;
  slug: string;
  label: string;
  type: 'start' | 'question' | 'option' | 'result';
  category: string;
  icon: string | null;
  image_url: string | null;
  video_url: string | null;
  description: string | null;
  sort_order: number;
  is_active: boolean;
  created_at: string | null;
}

export interface QuizEdge {
  id: string;
  from_node_id: string;
  to_node_id: string;
}

export interface QuizResult {
  id: string;
  node_id: string;
  video_url: string;
  poster_url: string | null;
  path_title: string;
  path_slugs: string[];
  path_hash: string;
  title: string | null;
  description: string | null;
  duration: number | null;
}

export interface QuizState {
  currentNode: QuizNode | null;
  options: QuizNode[];
  path: QuizNode[];
  isComplete: boolean;
  result: QuizResult | null;
  isLoading: boolean;
}
