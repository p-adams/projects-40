import { nanoid } from "nanoid";

export const data: Array<Lib.SurveyCategory> = [
  { id: nanoid(), name: "Demographics" },

  { id: nanoid(), name: "Content" },
  // example content categories { id: nanoid(), name: "Video" },
  // { id: nanoid(), name: "Photography" },
  // { id: nanoid(), name: "Social Media" },
  { id: nanoid(), name: "Products" },
];
