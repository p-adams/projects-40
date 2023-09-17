import { beforeEach, describe, expect, it } from "vitest";
import { ProfileService } from ".";
import { flintstonesCharacter } from "$lib/models/profile/MOCK_DATA";

describe("#ProfileService", () => {
  let profileService: ProfileService;
  let profileId = "profileId";
  beforeEach(() => {
    profileService = new ProfileService();
    profileService.createProfile(profileId, flintstonesCharacter);
  });

  it("creates initial profile", () => {
    expect(profileService.getProfileById(profileId)?.about?.name).toBe(
      "Fred Flintstone"
    );
  });

  it("updates existing profile", () => {
    const updatedProfileData: App.Profile = {
      ...flintstonesCharacter,
      about: {
        ...flintstonesCharacter.about,
        name: "Fred W Flintstone",
      } as App.About,
    };
    const userProfile = profileService.getProfileById(profileId);
    userProfile?.updateProfileData(updatedProfileData);
    expect(userProfile?.about?.name).toBe("Fred W Flintstone");
  });

  it("Deletes profile", () => {
    profileService.deleteProfile(profileId);
    expect(profileService.getProfileById(profileId)).toBe(undefined);
  });
});
