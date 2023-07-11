export class Entry {
  #id: string;
  #title: string;
  #description: string;

  constructor(id: string, title: string, description: string = "") {
    this.#id = id;
    this.#title = title;
    this.#description = description;
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
}
