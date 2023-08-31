import { EntryService } from "../services/entry";
import initIdentity from "../services/initIdentity";
import { nanoid } from "nanoid";

const STORIES: App.StoryData[] = [
  {
    id: nanoid(),
    title: "Adventure in the Amazon",
    img: "amazon.jpg",
    description:
      "Join us on an exciting journey through the Amazon rainforest.",
  },
  {
    id: nanoid(),
    title: "Mystery in Paris",
    img: "paris.jpg",
    description: "Uncover the secrets of the City of Light.",
  },
  {
    id: nanoid(),
    title: "The Haunted Mansion",
    img: "mansion.jpg",
    description: "Are you brave enough to spend a night in this eerie mansion?",
  },
  {
    id: nanoid(),
    title: "Lost in Space",
    img: "space.jpg",
    description:
      "Experience the vastness of space in this thrilling adventure.",
  },
  {
    id: nanoid(),
    title: "Pirate's Treasure",
    img: "pirate.jpg",
    description: "Join a crew of pirates in search of buried treasure.",
  },
  {
    id: nanoid(),
    title: "Time Traveler's Dilemma",
    img: "timetravel.jpg",
    // No description for this story.
  },
];

export function load() {
  const storyService = new EntryService();
  const user = initIdentity.getUser();
  let entryList = null;
  if (user?.username) {
    user!.entryListId = storyService.createEntryList();
    entryList = storyService.getEntryList(user?.entryListId!);
    for (const story of STORIES) {
      entryList?.addEntry(story);
    }
  }
  return {
    entryData: {
      stories: entryList?.getEntries() ?? [],
      user: {
        username: user?.username,
      },
    },
  };
}
