import { licenseMap } from "./licenseList";

export function getLicense(id: string) {
  const license = licenseMap[id];
  if (license) {
    if ("aliasTo" in license) {
      return getLicense(license.aliasTo);
    } else {
      return license;
    }
  } else {
    return getLicense("default");
  }
}
