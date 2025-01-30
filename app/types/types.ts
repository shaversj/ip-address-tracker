interface Location {
  country: string; // Two letters country code from ISO 3166
  region: string; // Region
  timezone: string; // Timezone in the format "+10:00"
}

interface AS {
  asn: number; // Autonomous System Number
  name: string; // Autonomous System Name
  route: string; // Autonomous System Route
  domain: string; // Autonomous System Website's URL
  type: "Cable/DSL/ISP" | "Content" | "Educational/Research" | "Enterprise" | "Non-Profit" | "Not Disclosed" | "NSP" | "Route Server" | ""; // Autonomous System type
}

export interface IPAddressInfo {
  ip: string; // Requested or resolved IP address
  location: Location; // Location information
  as?: AS; // Autonomous System, optional
  isp: string; // Internet Service Provider
  domains?: string[]; // Array of domains associated with the IP, optional
}
