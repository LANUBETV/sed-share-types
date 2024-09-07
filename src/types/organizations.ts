import { BaseEntity } from '../shared/base.entities';

enum TypeOrganization {
  PERSONAL,
  CRAETIVE_AGENCY,
  MEDIA_AGENCY,
  PRODUCER,
  CHANNEL,
}

export interface Organizations extends BaseEntity {
  _id?: string;
  name: string;
  contact: ContactInfo[];
  profile?: Partial<ProfileOrganizations>;
  settings?: OrganizationSettings;
  branding?: BrandingInfo;
  type: TypeOrganization;
}

interface OrganizationSettings {
  notify: boolean;
  technicalConfig?: OrganizationTechnicalConfig[];
  transfer?: Partial<TransferInfo>[];
  channels?: string[];
}

interface TransferInfo {
  type: string;
  host: string;
  user: string;
  password: string;
  uri?: string;
}

interface OrganizationTechnicalConfig {
  format: string;
  quality?: string;
  resolution: {
    width: number;
    height: number;
  };
  audio: number;
  region?: boolean;
  observations?: string;
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
