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
}

interface StatusOrganizations {
  actived: boolean;
  deleted: boolean;
  notificated: boolean;
}

export type AuthToken = {
  accessToken: string;
  type: string;
};