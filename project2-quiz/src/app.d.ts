// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Error {}
  // interface Locals {}
  // interface PageData {}
  // interface Platform {}
  interface Quiz {
    name: string;
    questions: Array<Question>;
    keywords?: string[];
  }
  interface Question {
    id: number | string;
    title: string;
    answer: string;
    hint: string | null;
    selected: string;
    choices: Array<{ label: string; value: string }>;
  }
}
