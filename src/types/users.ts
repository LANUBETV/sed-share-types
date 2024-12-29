import { BaseEntity } from '../shared/base.entities';
import { Organizations } from './organizations';

export interface Users extends BaseEntity {
  _id?: string;
  organizations?: UsersOrganizations[];
  archivedOrganizations?: UsersOrganizations[];
  name: string;
  email: string;
  password?: string;
  passwordHash?: string;
  timezone?: string;
  isSuperAdmin?: boolean;

  /**
   * Compares the provided password with the stored hashed password.
   * @param password - The password to compare.
   * @param passwordHash - The stored hashed password.
   * @returns A promise that resolves to a boolean indicating if the passwords match.
   */
  checkPasswordHash?(
    password: string,
    passwordHash: string
  ): Promise<boolean>;

  /**
   * Sets the password by hashing it.
   * @param password - The password to hash.
   * @returns A promise that resolves to the hashed password.
   */
  setPassword?(password: string): Promise<string>;

  /**
   * Converts the user entity to a Data Transfer Object (DTO).
   * @returns A UserDTO object.
   */
  toDTO?(): UserDTO;
}

interface UserDTO extends Omit<Users, 'password'> {}

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
      name: string;
      code: string;
      value: boolean;
    };
    create?: {
      name: string;
      code: string;
      value: boolean;
    };
    edit?: {
      name: string;
      code: string;
      value: boolean;
    };
    delete?: {
      name: string;
      code: string;
      value: boolean;
    };
    send?: {
      name: string;
      code: string;
      value: boolean;
    };
    download?: {
      name: string;
      code: string;
      value: boolean;
    };
    approve?: {
      name: string;
      code: string;
      value: boolean;
    };
  };
  isAdmin: {
    name: string;
    code: string;
    value: boolean;
  };
  view?: {
    name: string;
    code: string;
    value: boolean;
  };
  create?: {
    name: string;
    code: string;
    value: boolean;
  };
  edit?: {
    name: string;
    code: string;
    value: boolean;
  };
  delete?: {
    name: string;
    code: string;
    value: boolean;
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
