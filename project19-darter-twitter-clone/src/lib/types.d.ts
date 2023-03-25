namespace Lib {
  interface DialogEvent {
    cancel: { show: boolean };
    confirm: { show: boolean };
  }
}
