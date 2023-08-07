import { parse } from "smol-toml";
import fs from "fs";
import { join } from "path";

export interface License {
  id: string;
  name: string;
  url?: string;
}

// parse from license.toml(read file)
const licenseListFile = new URL("./license.toml", import.meta.url);
const licenseList = parse(fs.readFileSync(licenseListFile, "utf-8"));

// get license by id
export function getLicense(id: string): License {
  console.log(licenseList);
  if (!licenseList[id]) {
    return getLicense("default");
  } else if (licenseList[id]["aliasTo"]) {
    return getLicense(licenseList[id]["aliasTo"]);
  } else {
    const license: License = {
      id: id,
      name: licenseList[id]["name"],
      url: licenseList[id]["url"],
    };
    return license;
  }
}
