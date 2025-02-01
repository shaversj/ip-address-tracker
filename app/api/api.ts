export async function fetchCurrentIPAddress() {
  return await fetch(`https://api.ipify.org?format=json`).then((res) => res.json());
}

export async function fetchGeoLocation(ipAddress: string) {
  return await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_IP_API_KEY}&ipAddress=${ipAddress}`).then((res) => res.json());
}
