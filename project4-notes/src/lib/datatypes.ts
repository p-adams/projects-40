export enum MenuModes {
  create = "create",
  read = "read",
  update = "update",
  delete = "delete",
}

export interface Note {
  id: string | number;
  body: string;
}
