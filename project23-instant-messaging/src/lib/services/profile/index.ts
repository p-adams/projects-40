import { Profile } from "$lib/models/profile";

export class ProfileService {
  private profiles: Map<string, Profile> = new Map();

  // Create a new user profile
  public createProfile(profileId: string, profileData: App.Profile): void {
    const profile = new Profile(profileId, profileData);
    this.profiles.set(profileId, profile);
  }

  // Get a user's profile by ID
  public getProfileById(profileId: string): Profile | undefined {
    return this.profiles.get(profileId);
  }

  // Update a user's profile data
  public updateProfile(profileId: string, profileData: App.Profile): void {
    const existingProfile = this.profiles.get(profileId);
    if (existingProfile) {
      existingProfile.updateProfileData(profileData);
    }
  }

  // Delete a user's profile
  public deleteProfile(profileId: string): void {
    this.profiles.delete(profileId);
  }
}
