import { beforeEach, describe, expect, it } from "vitest";
import { ProfileService } from ".";
import { flintstonesCharacter } from "$lib/models/profile/MOCK_DATA";

describe("#ProfileService", () => {
  let profileService: ProfileService;

  beforeEach(() => {
    profileService = new ProfileService();
    profileService.createProfile("1yCCsBqwn2xaJqsXZrfki", flintstonesCharacter);
  });

  it("creates initial profile", () => {
    expect(
      profileService.getProfileById("1yCCsBqwn2xaJqsXZrfki")?.about?.name
    ).toBe("Fred Flintstone");
  });

  it("updates existing profile", () => {
    const updatedProfileData: App.Profile = {
      ...flintstonesCharacter,
      about: {
        ...flintstonesCharacter.about,
        name: "Fred W Flintstone",
      } as App.About,
    };
    const userProfile = profileService.getProfileById("1yCCsBqwn2xaJqsXZrfki");
    userProfile?.updateProfileData(updatedProfileData);
    expect(userProfile?.about?.name).toBe("Fred W Flintstone");
  });

  it("Deletes profile", () => {
    profileService.deleteProfile("1yCCsBqwn2xaJqsXZrfki");
    expect(profileService.getProfileById("1yCCsBqwn2xaJqsXZrfki")).toBe(
      undefined
    );
  });
});
