import { describe, it, expect } from "vitest";
import { EntryService } from "./entry";
import { User } from "../data/user";

describe("EntryService", () => {
  it("initializes EntryService and links entryListId to User", () => {
    const entryListService = new EntryService();
    const user = new User();
    user.username = "john123";
    user.password = "password123";
    user.entryListId = entryListService.createEntryList();
    const userEntryList = entryListService.getEntryList(user.entryListId);
    expect(userEntryList?.getEntries()).toStrictEqual([]);
  });
  it("adds entries to EntryService", () => {
    const STORIES: App.StoryData[] = [
      {
        id: "1",
        title: "Adventure in the Amazon",
        img: "amazon.jpg",
        description:
          "Join us on an exciting journey through the Amazon rainforest.",
      },
      {
        id: "2",
        title: "Mystery in Paris",
        img: "paris.jpg",
        description: "Uncover the secrets of the City of Light.",
      },
    ];
    const entryListService = new EntryService();
    const user = new User();
    user.username = "john123";
    user.password = "password123";
    user.entryListId = entryListService.createEntryList();
    const userEntryList = entryListService.getEntryList(user.entryListId);
    for (const story of STORIES) {
      userEntryList?.addEntry(story);
    }
    expect(userEntryList?.getEntries()).toStrictEqual([
      {
        id: "1",
        title: "Adventure in the Amazon",
        img: "amazon.jpg",
        description:
          "Join us on an exciting journey through the Amazon rainforest.",
      },
      {
        id: "2",
        title: "Mystery in Paris",
        img: "paris.jpg",
        description: "Uncover the secrets of the City of Light.",
      },
    ]);
  });
});
