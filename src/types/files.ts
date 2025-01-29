import { BaseEntity } from '../shared/base.entities';

export interface Files extends BaseEntity {
  _id: string;
  name: string;
  filename: string;
  organizationId: string;
  path: string;
  status?: StatusFiles;
  metadata?: Metadata;
  extension?: string;
}

interface Metadata {
  size?: number;
  format?: string;
  width?: number;
  height?: number;
  duration?: number;
  frames?: number;
  frameRate?: number;
  sampleRate?: number;
}

export interface StatusFiles {
  approved?: number;
  playable: boolean;
  downloaded?: boolean;
  deleted?: boolean;
}
