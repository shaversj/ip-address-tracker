export async function fetchCurrentIPAddress() {
  return await fetch("https://api.myip.com");
}

export async function fetchGeoLocation(ipAddress: string) {
  return await fetch(`https://api.ipapi.com/api/${ipAddress}?access_key=${import.meta.env.VITE_KEY}`);
}
