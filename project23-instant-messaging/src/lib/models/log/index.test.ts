import { beforeEach, describe, expect, it } from "vitest";
import { LogCoordinator } from ".";

describe("#Log", () => {
  let logger: LogCoordinator;
  beforeEach(() => {
    logger = new LogCoordinator();
  });
  it("logs a new event type", () => {
    logger.createLogEvent({
      type: "UPDATE_PROFILE",
      description: "changed profile picture",
      timestamp: "9/8/2023, 12:06:30 AM",
    });
    const updateProfileLog = logger.logsByType("UPDATE_PROFILE");
    expect(updateProfileLog?.[0]).toStrictEqual({
      type: "UPDATE_PROFILE",
      description: "changed profile picture",
      timestamp: "9/8/2023, 12:06:30 AM",
    });
  });
  it("logs an event to existing type", () => {
    logger.createLogEvent({
      type: "UPDATE_PROFILE",
      description: "changed profile picture",
      timestamp: "9/8/2023, 12:06:30 AM",
    });
    logger.createLogEvent({
      type: "UPDATE_PROFILE",
      description: "changed display name",
      timestamp: "9/8/2023, 12:07:30 AM",
    });
    const updateProfileLog = logger.logsByType("UPDATE_PROFILE");
    expect(updateProfileLog?.[1]).toStrictEqual({
      type: "UPDATE_PROFILE",
      description: "changed display name",
      timestamp: "9/8/2023, 12:07:30 AM",
    });
  });
});
