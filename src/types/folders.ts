import { BaseEntity } from "src/shared/base.entities";


export interface Folder extends BaseEntity {
  _id?: string;
  name: string;
  path?: string;
  ancestors?: string[];
  parentId?: string;
  type: TypeFolder;
  organizationId: string;
  level?: number;
  hasChildren?: boolean;
}

type TypeFolder = 'root' | 'folder' | 'file';