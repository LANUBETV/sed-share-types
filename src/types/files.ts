export interface Files {
  id?: string;
  name: string;
  path: string;
  size?: number;
  standard?: number;
  format?: string;
  width?: number;
  height?: number;
  duration?: number;
  frameRate?: number;
  bitRate?: number;
  codec?: string;
  aspectRatio?: string;
  audioChannels?: number;
  sampleRate?: number;
  extension?: string;
  status?: StatusFiles;
  filename: string;
}

export interface StatusFiles {
  approved: number;
  playable: boolean;
  downloaded: boolean;
  deleted?: boolean;
}