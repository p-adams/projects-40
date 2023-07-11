export class User {
  #username!: string;
  #password!: string;
  #entryListId!: string;

  public set username(v: string) {
    this.#username = v;
  }

  public get username(): string {
    return this.#username;
  }

  public set password(v: string) {
    this.#password = v;
  }

  public get password(): string {
    return this.#password;
  }

  public get entryListId(): string {
    return this.#entryListId;
  }

  public set entryListId(v: string) {
    this.#entryListId = v;
  }
}
