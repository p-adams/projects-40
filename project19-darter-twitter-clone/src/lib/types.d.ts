namespace Lib {
  interface DialogEvent {
    cancel: { show: boolean };
    confirm: { show: boolean };
  }

  interface Dart {
    feedId: string;
    username: string;
    text: string;
    date: Date;
  }

  interface Feeds {
    [feedId: string]: Dart[];
  }

  interface Me {
    feedId: string;
  }
}
