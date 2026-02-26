export interface TraceResult {
  anilist: number;
  at: number;
  duration: number;
  episode: number | null;
  filename: string;
  from: number;
  image: string;
  similarity: number;
  to: number;
  video?: string;
}

export interface TraceResponse {
  frameCount: number;
  error: string;
  result: TraceResult[];
}
