import { nanoid } from "nanoid";
import { EntryService } from "./entry";

export const STORIES: App.StoryData[] = [
  {
    id: nanoid(),
    title: "Adventure in the Amazon",
    img: "/static/images/palms.jpg",
    description:
      "Join us on an exciting journey through the Amazon rainforest.",
  },
  {
    id: nanoid(),
    title: "Mystery in Paris",
    img: "/static/images/palms.jpg",
    description: "Uncover the secrets of the City of Light.",
  },
  {
    id: nanoid(),
    title: "The Haunted Mansion",
    img: "/static/images/palms.jpg",
    description: "Are you brave enough to spend a night in this eerie mansion?",
  },
  {
    id: nanoid(),
    title: "Lost in Space",
    img: "/static/images/palms.jpg",
    description:
      "Experience the vastness of space in this thrilling adventure.",
  },
  {
    id: nanoid(),
    title: "Pirate's Treasure",
    img: "/static/images/palms.jpg",
    description: "Join a crew of pirates in search of buried treasure.",
  },
  {
    id: nanoid(),
    title: "Time Traveler's Dilemma",
    img: "/static/images/palms.jpg",
    // No description for this story.
  },
];

export const entryListInstance = new EntryService();
