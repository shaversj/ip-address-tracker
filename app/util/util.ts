export function isValidIPAddress(ip: string) {
  const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return regex.test(ip);
}

export function isValidDomain(domain: string) {
  const regex = /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/;
  return regex.test(domain);
}

export function getOffsetFromUTC(timeZone: string): string {
  const date = new Date();
  const utcDate = new Date(date.toLocaleString("en-US", { timeZone: "UTC" }));
  const targetDate = new Date(date.toLocaleString("en-US", { timeZone }));

  const offset = (targetDate.getTime() - utcDate.getTime()) / (1000 * 60 * 60);
  const hours = Math.floor(Math.abs(offset));
  const minutes = Math.abs((offset % 1) * 60);

  const sign = offset >= 0 ? "+" : "-";
  return `${sign}${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}
