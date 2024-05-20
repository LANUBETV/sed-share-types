import { BaseEntity } from "../shared/base.entities";

export interface Organizations extends BaseEntity{
  _id?: string;
  name: string;
  contact: ContactInfo[];
  profile?: Partial<ProfileOrganizations>;
  settings?: Object;
  branding?: BrandingInfo;
}

interface ContactInfo {
  phone: string;
  email: string;
  description: string;
  title: string;
  name: string;
}

interface ProfileOrganizations {
  address: string;
  ruc: string;
  socialReason: string;
  commercialName: string;
  businessLine: string;
  businessSector: string;
  city: string;
}

interface BrandingInfo {
  website: string;
  logo: string;
  description: string;
}