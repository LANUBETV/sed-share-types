import { BaseEntity } from "../shared/base.entities";
import { StatusFiles } from "./files";

export interface Posts extends BaseEntity {
  _id?: string;
  createdBy: string;
  folderId?: string;
  organizationId: string;
  metadata: PostsMetadata
  invoiceId?: string;
  parentId?: string;
  type: string;
  status: Partial<StatusPosts>;
  destinations?: PostDestinations[];
  files?: FilesDestionations[];
  historic?: Historic[];
}

interface Historic {
  _id?: string;
  dateTime: Date;
  user: { id: string; name: string };
  description: string;
  fileId?: string;
}

export interface PostsMetadata {
  title: string;
  duration: string;
  tags?: string[];
  announcer?: string | null;
  organization?: { name: string; id: string };
  responsable?: string | null;
  version?: string | null;
  product?: string | null;
  orderPattern?: string | null;
  city?: string | null;
  comment?: string | null;
}

export interface PostDestinations {
  id: string;
  name?: string;
  status?: Number;
  quality?: string;
  postId?: string ;
  fileId?: string;
}

interface FilesDestionations extends BaseEntity {
  id: string;
  status: StatusFiles;
  version: number;
  name: string;
  path: string;
  filename: string;
}

interface StatusPosts {
  completed: boolean;
  destination: boolean;
  sended: number;
  downloaded: boolean;
  deleted: boolean;
  marked: boolean;
  file: boolean;
  approved: boolean;
  durationAlert: boolean;
}

export enum PostStatus {
  DRAFT,
  PENDING,
  APPROVED,
  REJECTED,
  SENT,
  DELETED,
  RECEPTED,
}

export const PostStatusLabels: { [key in PostStatus]: string } = {
  [PostStatus.DRAFT]: 'Borrador',
  [PostStatus.PENDING]: 'Pendiente',
  [PostStatus.APPROVED]: 'Aprobado',
  [PostStatus.REJECTED]: 'Rechazado',
  [PostStatus.SENT]: 'Enviado',
  [PostStatus.DELETED]: 'Eliminado',
  [PostStatus.RECEPTED]: 'Recibido',
};