export interface EntryData {
  id: string;
  title: string;
  description?: string;
  img: string;
}

export class Entry implements EntryData {
  #id: string;
  #title: string;
  #description: string;
  #img: string;

  constructor(
    id: string,
    title: string,
    description: string = "",
    img: string
  ) {
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

  public get img(): string {
    return this.#img;
  }

  public set img(v: string) {
    this.#img = v;
  }
}
