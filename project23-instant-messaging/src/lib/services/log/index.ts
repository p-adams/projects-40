import { LogCoordinator } from "$lib/models/log";

export class LogService {
  #logger: LogCoordinator;

  constructor() {
    this.#logger = new LogCoordinator();
  }

  create(event: App.LogEvent) {
    this.#logger.createLogEvent(event);
  }

  getLogsByType(type: string): App.LogEvent[] {
    return this.#logger.logsByType(type);
  }

  getLogEntries(): IterableIterator<[string, App.LogEvent[]]> {
    return this.#logger.logs;
  }
}
