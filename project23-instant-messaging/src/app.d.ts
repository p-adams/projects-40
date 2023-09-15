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
      image: File;
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

    interface Profile {
      id: string;
      token: string; // TBD
      image?: File;
      about?: About;
      timeline?: any; // TBD
      messages?: Array<{ name: string; message: string; timestamp: string }>;
    }
  }
}

export {};
