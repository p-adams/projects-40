import { LogCoordinator } from "$lib/models/log";
import { LogService } from ".";
const logCoordinator = LogCoordinator.getInstance();
export const logInstance = new LogService(logCoordinator);
