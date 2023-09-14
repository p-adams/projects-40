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

    interface Profile {
      id: string;
      name: string;
      token: string; // TBD
      timeline?: any; // TBD
      messages?: Array<{ name: string; message: string; timestamp: string }>;
    }
  }
}

export {};
