export class LogCoordinator {
  #log: App.LogMap;
  constructor() {
    this.#log = new Map();
  }
  createLogEvent(logEvent: App.LogEvent) {
    const logsByType = this.#log.get(logEvent.type);
    if (logsByType) {
      this.#log.set(logEvent.type, [...logsByType, logEvent]);
      return;
    }
    this.#log.set(logEvent.type, [logEvent]);
  }

  public get logs(): IterableIterator<[string, App.LogEvent[]]> {
    return this.#log.entries();
  }

  public logsByType(type: string): App.LogEvent[] {
    return this.#log.get(type) ?? [];
  }
}
