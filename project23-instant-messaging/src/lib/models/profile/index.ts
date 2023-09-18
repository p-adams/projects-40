export class Profile implements App.Profile {
  #id: string;
  #token: string;
  #image?: File;
  #about?: App.About;
  #timeline: App.TimelineItem[] = [];
  #messages: Array<{ name: string; message: string; timestamp: string }> = [];

  constructor(token: string, profileData?: App.Profile) {
    this.#id = `${profileData?.id}#${profileData?.token}`;
    this.#token = token;

    if (profileData) {
      this.#image = profileData.image;
      this.#about = profileData.about;
      this.#timeline = profileData.timeline;
      this.#messages = profileData.messages;
    }
  }

  public get id(): string {
    return this.#id;
  }

  public get token(): string {
    return this.#token;
  }

  public get image(): File | undefined {
    return this.#image;
  }

  public get about(): App.About | undefined {
    return this.#about;
  }

  public get timeline(): App.TimelineItem[] | [] {
    return this.#timeline;
  }

  public get messages():
    | Array<{ name: string; message: string; timestamp: string }>
    | [] {
    return this.#messages;
  }

  public updateProfileData(profileData: App.Profile): void {
    if (profileData.image) {
      this.#image = profileData.image;
    }
    if (profileData.about) {
      this.#about = profileData.about;
    }
    if (profileData.timeline) {
      this.#timeline = profileData.timeline;
    }
    if (profileData.messages) {
      this.#messages = profileData.messages;
    }
  }
}
