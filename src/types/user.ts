export interface User extends BaseEntity {
  name?: string;
  lastname?: string;
  email: string;
  password: string;
  roleId?: string;
}