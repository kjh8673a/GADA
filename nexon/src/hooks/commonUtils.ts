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

