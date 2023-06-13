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
    name: "Accommodations",
    surveyQuestionGroups: [
      {
        id: "Accommodations-satisfaction",
        name: "Satisfaction",
        description:
          "How would you rate the accommodations provided by Stone Age Adventures Extreme Excursions?",

        options: [
          { label: "Excellent", value: "excellent" },
          { label: "Good", value: "good" },
          { label: "Average", value: "average" },
          { label: "Poor", value: "poor" },
        ],
      },
      {
        id: "Accommodations-experience",
        name: "Accommodation and Attractions",
        description:
          "Did you find the Stone Age-themed accommodations and attractions to be a fantastically fun and unique experience?",

        options: [
          { label: "Yes, absolutely!", value: "yes_x" },
          { label: "Yes, to some extend", value: "yes" },
          { label: "Neutral", value: "neutral" },
          { label: "Not really", value: "no" },
          { label: "No, not at all", value: "no_x" },
        ],
      },
    ],
  },
  {
    id: nanoid(),
    name: "Food",
    surveyQuestionGroups: [
      {
        id: "Food-satisfaction",
        name: "Variety and Quality of Food",
        description:
          "How satisfied were you with the variety and quality of food options available at Stone Age Adventures Extreme Excursions?",
        options: [
          { label: "Very satisfied", value: "very_satisfied" },
          { label: "Satisfied", value: "satisfied" },
          { label: "Neutral", value: "neutral" },
          { label: "Dissatisfied", value: "dissatisfied" },
          { label: "Very Dissatisfied", value: "very_dissatisfied" },
        ],
      },
      {
        id: "Food-restaurants",
        name: "Restaurants",
        description:
          "Which Stone Age-themed restaurant or food outlet did you enjoy the most for its unique culinary experience?",
        options: [
          { label: "The Bronto Burger Bar", value: "bronto" },
          { label: "The Caveman's Cave Grill", value: "cave" },
          { label: "The Pterodactyl Pizza Parlor", value: "pizza" },
          { label: "The Sabertooth Snack Shack", value: "snack" },
          { label: "Other", value: "other", specifyText: "" },
        ],
      },
    ],
  },
  {
    id: nanoid(),
    name: "Attractions",
    surveyQuestionGroups: [
      {
        id: "Attractions-general",
        name: "Stone Age Attractions ",
        description:
          "Which wild and wacky Stone Age attraction did you enjoy the most during your visit? (Please select all that apply)",
        allowMultiple: true,
        options: [
          { label: "Fred's Dino Safari Expedition", value: "expedition" },
          {
            label: "Wilma's Rock 'n' Roll Roller Coaster Chaos",
            value: "coaster",
          },
          { label: "Barney's Prehistoric Bowling Bonanza", value: "bowling" },
          { label: "Pebbles' Radical Raptor Raceway", value: "race" },
          { label: "Other", value: "other", specifyText: "" },
        ],
      },
      {
        id: "Attractions-amenities",
        name: "Amenities",
        description:
          "Which of the following quirky amenities at Stone Age Adventures Extreme Excursions did you find most appealing?",
        allowMultiple: true,
        options: [
          { label: "Caveman-style cave pool", value: "pool" },
          { label: "Flintstone family-themed treehouses", value: "treehouse" },
          { label: "T-Rex feeding frenzy exhibit", value: "exhibit" },
          {
            label: "Rock 'n' Roll Diner with a prehistoric twist",
            value: "twist",
          },
          { label: "None of the above", value: "other", specifyText: "" },
        ],
      },
    ],
  },
  {
    id: nanoid(),
    name: "General",
    surveyQuestionGroups: [
      {
        id: "General-recommend",
        name: "Recommendations",
        description:
          "How likely are you to recommend Stone Age Adventures Extreme Excursions to a friend or family member?",

        options: [
          { label: "Absolutely, they'd love it!", value: "yes_x" },
          { label: "Likely", value: "yes" },
          { label: "Neutral", value: "neutral" },
          { label: "Unlikely", value: "no" },
          { label: "No way, it's too wild for them!", value: "no_x" },
        ],
      },
    ],
  },
];
