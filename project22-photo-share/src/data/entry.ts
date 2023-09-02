export interface EntryData {
  id: string;
  title: string;
  description?: string;
  img: File;
}

export class Entry implements EntryData {
  #id: string;
  #title: string;
  #description: string;
  #img: File;

  constructor(id: string, title: string, description: string = "", img: File) {
    this.#id = id;
    this.#title = title;
    this.#description = description;
    this.#img = img;
  }

  get id(): string {
    return this.#id;
  }

  get title(): string {
    return this.#title;
  }

  get description(): string {
    return this.#description;
  }

  set description(value: string) {
    this.#description = value;
  }

  public get img(): File {
    return this.#img;
  }

  public set img(v: File) {
    this.#img = v;
  }
}
