import { nanoid } from "nanoid";

export const data: Lib.SurveyCategories = [
  {
    id: nanoid(),
    name: "Demographics",
    description: "Gender, age, ethnicity, location,  maritial status",
    surveyQuestionGroups: [
      {
        id: "Demographics-gender",
        name: "Gender",
        description: "Choose gender",
        options: [
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
          { label: "Other", value: "other" },
        ],
      },
      {
        id: "Demographics-age",
        name: "Age",
        description: "Choose age",
        options: [
          { label: "Under 18", value: "under_18" },
          { label: "18-24 years old", value: "18_24" },
          { label: "25-34 years old", value: "25_34" },
          { label: "35-44 years old", value: "35_44" },
          { label: "45-54 years old", value: "45_54" },
          { label: "Over 55", value: "over_55" },
        ],
      },
      {
        id: "Demographics-ethnicity",
        name: "Ethnicity",
        description: "Choose Ethnicity",
        allowMultiple: true,
        options: [
          { label: "White / Caucasian", value: "white_caucasian" },
          { label: "Hispanic / Latino", value: "hispanic_latino" },
          {
            label: "Black / African American",
            value: "black_african_american",
          },
          {
            label: "Native American / American Indian",
            value: "native_american_american_indian",
          },
          {
            label: "Asian / Pacific Islander",
            value: "asian_pacific_islander",
          },
          { label: "Other", value: "other" },
        ],
      },
      {
        id: "Demographics-location",
        name: "Location",
        description: "Choose Location",
        options: [
          { label: "North America", value: "north_america" },
          { label: "Central America", value: "central_america" },
          { label: "Europe", value: "europe" },
          { label: "Africa", value: "africa" },
          { label: "Asia", value: "asia" },
          { label: "Australia", value: "australia" },
          { label: "Caribbean Islands", value: "caribbean_islands" },
          { label: "Pacific Islands", value: "pacific_islands" },
          { label: "Other", value: "other" },
        ],
      },
    ],
  },

  {
    id: nanoid(),
    name: "Lodging",
    surveyQuestionGroups: [
      {
        id: "",
        name: "",
        description: "",
        allowMultiple: true,
        options: [
          { label: "", value: "" },

          { label: "Other", value: "other" },
        ],
      },
    ],
  },
  {
    id: nanoid(),
    name: "Food",
    surveyQuestionGroups: [
      {
        id: "",
        name: "",
        description: "",
        allowMultiple: true,
        options: [
          { label: "", value: "" },

          { label: "Other", value: "other" },
        ],
      },
    ],
  },
  {
    id: nanoid(),
    name: "Attractions",
    surveyQuestionGroups: [
      {
        id: "",
        name: "",
        description: "",
        allowMultiple: true,
        options: [
          { label: "", value: "" },

          { label: "Other", value: "other" },
        ],
      },
    ],
  },
];
