export const voidStrToCamelCase = (voidStr: string) => {
  return voidStr.split(" ").join("_");
};

export const convertObjToSnakeCaseObj: any = (obj: any) => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => convertObjToSnakeCaseObj(item));
  }

  const snakeCaseObj: { [key: string]: any } = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const snakeCaseKey = key.replace(/\s+/g, "_").toLowerCase();
      snakeCaseObj[snakeCaseKey] = convertObjToSnakeCaseObj(obj[key]);
    }
  }

  return snakeCaseObj;
};

export const extractInfoFromUrl = (url: string) => {
  const arr = url.split("/");
  if (arr.includes("party")) return "party";

  if (arr[1]) {
    return arr[1].toLowerCase();
  } else {
    return "";
  }
};

