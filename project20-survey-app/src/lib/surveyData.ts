import { nanoid } from "nanoid";

export const data: Lib.SurveyCategories = [
  {
    id: nanoid(),
    name: "Demographics",
    description:
      "Gender, age, ethnicity, location, education, maritial status, and stance",
    surveyQuestionGroups: [
      {
        id: `Demographics-gender#${nanoid()}`,
        name: "Gender",
        description: "Choose gender",
        options: [
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
          { label: "Other", value: "other" },
        ],
      },
      {
        id: `Demographics-age#${nanoid()}`,
        name: "Age",
        description: "Choose age",
        options: [],
      },
      {
        id: `Demographics-ethnicity#${nanoid()}`,
        name: "Ethnicity",
        description: "Choose Ethnicity",
        allowMultiple: true,
        options: [],
      },
      {
        id: `Demographics-location#${nanoid()}`,
        name: "Location",
        description: "Choose Location",
        options: [],
      },
      {
        id: `Demographics-education#${nanoid()}`,
        name: "Education",
        description: "Choose Education",
        options: [],
      },
      {
        id: `Demographics-maritial-status#${nanoid()}`,
        name: "Maritial Status",
        description: "Choose Maritial Status",
        options: [],
      },
      {
        id: `Demographics-stance#${nanoid()}`,
        name: "Stance",
        description: "Choose Stance",
        options: [],
      },
    ],
  },

  { id: nanoid(), name: "Content", surveyQuestionGroups: [] },
  // example content categories { id: nanoid(), name: "Video" },
  // { id: nanoid(), name: "Photography" },
  // { id: nanoid(), name: "Social Media" },
  { id: nanoid(), name: "Products", surveyQuestionGroups: [] },
];
