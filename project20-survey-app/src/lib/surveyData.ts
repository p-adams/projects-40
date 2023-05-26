import { nanoid } from "nanoid";

export const data: Lib.SurveyCategories = [
  {
    id: nanoid(),
    name: "Demographics",
    description:
      "Gender, age, ethnicity, location, education, maritial status, and stance",
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
      {
        id: "Demographics-stance",
        name: "Stance",
        description: "Choose Stance",
        options: [
          { label: "Goofy", value: "goofy" },
          { label: "Regular", value: "Regular" },
          { label: "Both", value: "both" },
        ],
      },
    ],
  },

  {
    id: nanoid(),
    name: "Content",
    surveyQuestionGroups: [
      {
        id: "Content-publication",
        name: "Publication",
        description: "Choose Publications",
        allowMultiple: true,
        options: [
          { label: "Thrasher", value: "thrasher" },
          { label: "Transworld Skateboarding", value: "transworld" },
          { label: "Jenkem", value: "jenkem" },
          { label: "Free Skate Magazine", value: "free_skate_mag" },
          { label: "Other", value: "other" },
        ],
      },
      {
        id: "Content-video",
        name: "Video",
        description: "Choose Video",
        allowMultiple: true,
        options: [
          { label: "Thrasher", value: "thrasher" },
          { label: "Transworld Skateboarding", value: "transworld" },
          { label: "Jenkem", value: "jenkem" },
          { label: "Free Skate Magazine", value: "free_skate_mag" },
          { label: "Other", value: "other" },
        ],
      },
      {
        id: "Content-social",
        name: "Social",
        description: "Choose Social Media",
        allowMultiple: true,
        options: [
          { label: "Slap Forum", value: "slap" },
          { label: "YouTube", value: "youtube" },
          { label: "Instagram", value: "instagram" },
          { label: "TikTok", value: "tiktok" },
          { label: "Twitter", value: "twitter" },
          { label: "Reddit", value: "reddit" },
          { label: "Other", value: "other" },
        ],
      },
    ],
  },
  // example content categories { id: nanoid(), name: "Video" },
  // { id: nanoid(), name: "Photography" },
  // { id: nanoid(), name: "Social Media" },
  { id: nanoid(), name: "Products", surveyQuestionGroups: [] },
];
