import type { Quiz } from "src/types";

export const csvToJSON = (csvString: string): Quiz[] => {
  const rows = csvString.split("\r\n");
  return rows.slice(1).map((rowString) => {
    const row = rowString.split(",");
    const quiz: Quiz = {
      image: row[0],
      answer: row[1]
    };
    return quiz;
  });
};

export const preloadImage = (url: string):void => {
  const img = new Image();
  img.src = url;
};
