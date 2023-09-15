import { beforeEach, describe, expect, it } from "vitest";
import { Profile } from ".";

describe("#profile", () => {
  let profile: Profile;
  beforeEach(() => {
    profile = new Profile("1yCCsBqwn2xaJqsXZrfki");
  });
  it("should create new profile", () => {
    expect(profile.id).toBe("id: 1yCCsBqwn2xaJqsXZrfki");
  });
});
