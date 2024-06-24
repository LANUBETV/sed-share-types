import { BaseEntity } from "../shared/base.entities";
import { Organizations } from "./organizations";

export interface Users extends BaseEntity {
  _id?: string;
  organizations?: UsersOrganizations[];
  archivedOrganizations?: UsersOrganizations[];
  name: string;
  email: string;
  password?: string;
  timezone?: string;
  isSuperAdmin?:| boolean;
}

interface UsersOrganizations {
  _id: string;
  organizationId: string;
  role: number;
  status?: Partial<StatusOrganizations>;
  settings?: Organizations['settings'];
  profile?: Object;
  folderPermissions?: Record<string, PermissionsByFolder>;
}

interface PermissionsByFolder {
  post: {
    view: {
      name: string,
      code: string,
      value: boolean
    };
    create?: {
      name: string,
      code: string,
      value: boolean
    };
    edit?: {
      name: string,
      code: string,
      value: boolean
    };
    delete?: {
      name: string,
      code: string,
      value: boolean
    };
    send?: {
      name: string,
      code: string,
      value: boolean
    };
    download?: {
      name: string,
      code: string,
      value: boolean
    };
    approve?: {
      name: string,
      code: string,
      value: boolean
    };
  }
  isAdmin: {
    name: string,
    code: string,
    value: boolean
  };
  view?: {
    name: string,
    code: string,
    value: boolean
  };
  create?: {
    name: string,
    code: string,
    value: boolean
  };
  edit?: {
    name: string,
    code: string,
    value: boolean
  };
  delete?: {
    name: string,
    code: string,
    value: boolean
  };
}

interface StatusOrganizations {
  actived: boolean;
  deleted: boolean;
  notify: boolean;
}

export type AuthToken = {
  accessToken: string;
  type: string;
};