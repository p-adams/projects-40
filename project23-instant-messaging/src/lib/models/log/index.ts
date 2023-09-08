interface LogEvent {
  type: string; // TODO: declare enum unless made dynamic
  timestamp: string;
  description: string;
}

type LogMap = Map<string, LogEvent[]>;

export class LogCoordinator {
  #log: LogMap;
  constructor() {
    this.#log = new Map();
  }
  createLogEvent(logEvent: LogEvent) {
    const logsByType = this.#log.get(logEvent.type);
    if (logsByType) {
      this.#log.set(logEvent.type, [...logsByType, logEvent]);
      return;
    }
    this.#log.set(logEvent.type, [logEvent]);
  }

  public get logs(): IterableIterator<[string, LogEvent[]]> {
    return this.#log.entries();
  }
  public logsByType(type: string): LogEvent[] {
    return this.#log.get(type) ?? [];
  }
}
