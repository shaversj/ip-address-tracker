export type IPAddressInfo = {
  ip: string;
  type: string;
  continent_code: string;
  continent_name: string;
  country_code: string;
  country_name: string;
  region_code: string;
  region_name: string;
  city: string;
  zip: string;
  latitude: number;
  longitude: number;
  msa: string;
  dma: string;
  radius: number;
  ip_routing_type: string;
  connection_type: string;
  location: {
    geoname_id: number;
    capital: string;
    languages: {
      code: string;
      name: string;
      native: string;
    }[];
    country_flag: string;
    country_flag_emoji: string;
    country_flag_emoji_unicode: string;
    calling_code: string;
    is_eu: boolean;
  };
  time_zone: {
    id: string;
    current_time: string;
    gmt_offset: number;
    code: string;
    is_daylight_saving: boolean;
  };
  currency: {
    code: string;
    name: string;
    plural: string;
    symbol: string;
    symbol_native: string;
  };
  connection: {
    asn: number;
    isp: string;
    sld: string;
    tld: string;
    carrier: string;
    home: boolean;
    organization_type: string;
    isic_code: string;
    naics_code: string;
  };
  security: {
    is_proxy: boolean | null;
    proxy_type: string | null;
    is_crawler: boolean;
    crawler_name: string | null;
    crawler_type: string | null;
    is_tor: boolean;
    threat_level: string;
    threat_types: string | null;
    proxy_last_detected: string | null;
    proxy_level: string | null;
    vpn_service: string | null;
    anonymizer_status: string | null;
    hosting_facility: boolean;
  };
};

export type IPCheckResponse = {
  ip: string;
  type: string;
  continent_code: string;
  continent_name: string;
  country_code: string;
  country_name: string;
  region_code: string;
  region_name: string;
  city: string;
  zip: string;
  latitude: number;
  longitude: number;
  msa: string;
  dma: string;
  radius: number | null;
  ip_routing_type: string;
  connection_type: string;
  location: {
    geoname_id: number;
    capital: string;
    languages: {
      code: string;
      name: string;
      native: string;
    }[];
    country_flag: string;
    country_flag_emoji: string;
    country_flag_emoji_unicode: string;
    calling_code: string;
    is_eu: boolean;
  };
};
