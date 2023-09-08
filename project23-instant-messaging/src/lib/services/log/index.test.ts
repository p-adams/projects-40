import { beforeEach, describe, expect, it } from "vitest";
import { LogService } from ".";

describe("#LogService", () => {
  let logService: LogService;
  beforeEach(() => {
    logService = new LogService();
  });
  it("adds new event type", () => {
    logService.create({
      type: "MESSAGE",
      description: "sent message to @foo",
      timestamp: "9/8/2023, 12:19:15 AM",
    });

    expect(logService.getLogsByType("MESSAGE")[0].description).toBe(
      "sent message to @foo"
    );
  });
});
