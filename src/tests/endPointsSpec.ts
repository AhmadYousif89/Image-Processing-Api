import supertest from "supertest";
import app from "..";

const appEndPoint = supertest(app);

describe("Testing our application end points:_ \n", () => {
  it("gets the home page endpoint with status code 200", async () => {
    const response = await appEndPoint.get("/");
    expect(response.statusCode).toEqual(200);
  });
  it("should test the end point api/images with status code 200 ", async () => {
    const response = await appEndPoint.get("/api/images");
    expect(response.statusCode).toEqual(200);
  });
  it("should get /api/images?image=aerial_view with status code 200 ", async () => {
    const response = await appEndPoint.get("/api/images?image=aerial_view");
    expect(response.statusCode).toEqual(200);
  });
  it("should get /api/images?image=aerial_view&width=200&height=200 with status code 200 ", async () => {
    const response = await appEndPoint.get("/api/images?image=aerial_view&width=200&height=200");
    expect(response.statusCode).toEqual(200);
  });
});
