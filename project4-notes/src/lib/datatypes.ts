export enum MenuModes {
  create = "create",
  read = "read",
  update = "update",
  delete = "delete",
}

export interface Note {
  id: number;
  body: string;
}
