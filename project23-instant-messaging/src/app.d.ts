// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
    interface LogEvent {
      type: string; // TODO: declare enum unless made dynamic
      timestamp: string;
      description: string;
    }

    type LogMap = Map<string, LogEvent[]>;

    interface About {
      name: string;
      location: string;
      contact?: {
        email?: string;
        phone?: string;
        website?: string;
      };
      address?: {
        street: string;
        state: string;
        country: string;
        zip: number;
      };
    }

    interface TimelineItem {
      profile?: Pick<Profile, "id" | "image">;
      content: {
        text: string;
        media?: File;
      };
      timestamp: string;
      interactions?: any; // TBD: count of likes/comments/shares/re-shares
      engagement_options?: any; // TBD: actons to likes/comments/shares/re-shares/bookmark/flag/report
      target?: {
        visibility: any; // public/private
        location: string; // where post is made
        tags: Pick<Profile, "id" | "image">[]; // profiles mentioned/included in post
      };
    }

    interface Profile {
      id: string;
      token: string;
      image?: File;
      about?: About;
      timeline: TimelineItem[];
      messages:
        | Array<{ name: string; message: string; timestamp: string }>
        | [];
    }
  }
}

export {};
