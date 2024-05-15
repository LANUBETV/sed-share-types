import { BaseEntity } from "../shared/base.entities";

export interface Organizations extends BaseEntity{
  _id?: string;
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  logo: string;
  settings: Object;
  profile: Partial<ProfileOrganizations>;
}


interface ProfileOrganizations {
  ruc: string;
  socialReason: string;
  commercialName: string;
  businessLine: string;
  businessSector: string;
  city: string;
}