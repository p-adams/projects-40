namespace Lib {
  interface DialogEvent {
    cancel: { show: boolean };
    confirm: { show: boolean };
  }
  interface Dart {
    username: string;
    text: string;
    date: Date;
  }
}
