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
  destinations?: Destinations[];
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

interface Destinations {
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
  sended: boolean;
  downloaded: boolean;
  deleted: boolean;
  marked: boolean;
  file: boolean;
  approved: boolean;
  durationAlert: boolean;
}