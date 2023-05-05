import { nanoid } from "nanoid";

export const data: Array<Lib.SurveyCategory> = [
  { id: nanoid(), name: "Personal Information" },
  { id: nanoid(), name: "Video" },
  { id: nanoid(), name: "Photography" },
  { id: nanoid(), name: "Social Media" },
];
