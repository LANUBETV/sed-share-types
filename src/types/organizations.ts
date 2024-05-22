import { BaseEntity } from "../shared/base.entities";

enum TypeOrganization {
  PERSONAL,
  CRAETIVE_AGENCY,
  MEDIA_AGENCY,
  PRODUCER,
  CHANNEL,
}

export interface Organizations extends BaseEntity{
  _id?: string;
  name: string;
  contact: ContactInfo[];
  profile?: Partial<ProfileOrganizations>;
  settings?: Object;
  branding?: BrandingInfo;
  type: TypeOrganization;
}

interface ContactInfo {
  phone?: string;
  email?: string;
  description?: string;
  title?: string;
  name: string;
  address?: string;
  city?: string;
  type: 'contact' | 'billing' | 'shipping' | 'legal' | 'other';
}

interface ProfileOrganizations {
  ruc: string;
  socialReason: string;
  commercialName: string;
  businessLine?: string;
  businessSector?: string;
  city?: string;
  country?: string;
  type?: number;
}

interface BrandingInfo {
  website: string;
  logo: string;
  description: string;
}