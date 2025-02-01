export async function fetchCurrentIPAddress() {
  return await fetch(`http://ip-api.com/json`);
}

export async function fetchGeoLocation(ipAddress: string) {
  return await fetch(`http://ip-api.com/json/${ipAddress}`);
}
