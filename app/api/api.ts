export async function fetchCurrentIPAddress() {
  return await fetch(`https://ipwho.is/`);
}

export async function fetchGeoLocation(ipAddress: string) {
  return await fetch(`https://ipwho.is/${ipAddress}`);
}
