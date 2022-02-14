import imgResize from "../utils/imageProcessing";
import { getImage, mapOnImgs } from "../utils/originalImgs";
import { getThumbImg } from "../utils/thumbsImgs";

describe("Test the functionality of sharp module: \n", () => {
  it("should successfuly generate new image ", async () => {
    await expectAsync(imgResize({ image: "galaxy", width: 200, height: 200 })).toBeResolved();
  });
  it("should return error (Input file is missing)", async () => {
    await expectAsync(imgResize({ image: "", width: 200, height: 200 })).toBeRejectedWithError(
      Error,
      "Input file is missing"
    );
  });
  it("should reject the operation", async () => {
    await expectAsync(imgResize({ image: "", width: 0, height: 0 })).toBeRejected();
  });
});

describe("Testing the Utilities function: \n", () => {
  it("should return image name (galaxy)", async () => {
    const result = await getImage("galaxy");
    expect(result).toContain("galaxy");
  });
  it("should return image name (galaxy) inside original images folder", async () => {
    const result = await mapOnImgs();
    expect(result).toContain("galaxy");
  });
  it("should return the resized image of (aerial_view_200_200.png) from inside thumbs images folder", async () => {
    const result = await getThumbImg("aerial_view", 200, 200);
    expect(result).not.toContain("galaxy_200_200.png");
  });
});
