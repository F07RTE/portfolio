import orchestrator from "tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
});

describe("GET /api/v1/migration", () => {
  describe("Anonymous user", () => {
    test("Retrieving pending migrations", async () => {
      var response = await fetch("http://localhost:3000/api/v1/migrations");
      expect(response.status).toBe(200);

      var responseBody = await response.json();

      expect(Array.isArray(responseBody)).toBe(true);
      expect(responseBody.length).toBeGreaterThan(0);
    });
  });
});
