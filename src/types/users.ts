import { BaseEntity } from "../shared/base.entities";
import { Organizations } from "./organizations";

export interface Users extends BaseEntity {
  _id?: string;
  organizations?: Organizations[];
  name: string;
  email: string;
  password?: string;
  timezone?: string;
}

export type AuthToken = {
  accessToken: string;
  type: string;
};