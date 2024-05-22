import { BaseEntity } from "../shared/base.entities";

enum TypeOrganization {
  OTHER,
  CRAETIVE_AGENCY,
  MEDIA_AGENCY,
  PRODUCER,
}

export interface Organizations extends BaseEntity{
  _id?: string;
  name: string;
  contact: ContactInfo[];
  profile?: Partial<ProfileOrganizations>;
  settings?: Object | { notify: boolean };
  branding?: BrandingInfo;
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
  type?: TypeOrganization;
}

interface BrandingInfo {
  website: string;
  logo: string;
  description: string;
}