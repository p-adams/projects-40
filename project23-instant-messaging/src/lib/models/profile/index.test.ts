import { beforeEach, describe, expect, it } from "vitest";
import { Profile } from ".";
import { flintstonesCharacter } from "./MOCK_DATA";

describe("#profile", () => {
  let profile: Profile;

  beforeEach(() => {
    profile = new Profile("1yCCsBqwn2xaJqsXZrfki", flintstonesCharacter);
  });
  it("should create new profile", () => {
    expect(profile.id).toBe("fred_flintstone#1yCCsBqwn2xaJqsXZrfki");
  });
});
