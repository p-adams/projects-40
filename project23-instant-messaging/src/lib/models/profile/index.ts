export class Profile implements App.Profile {
  #id: string;
  #token: string;
  constructor(token: string) {
    this.#id = `id: ${token}`;
    this.#token = token;
  }

  public get id(): string {
    return this.#id;
  }

  public get token(): string {
    return this.#token;
  }
}
