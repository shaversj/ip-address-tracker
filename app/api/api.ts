export async function fetchCurrentIPAddress() {
  return await fetch(`https://api.ipapi.com/api/check?access_key=${import.meta.env.API_KEY}`);
}

export async function fetchGeoLocation(ipAddress: string) {
  return await fetch(`https://api.ipapi.com/api/${ipAddress}?access_key=${import.meta.env.API_KEY}`);
}
