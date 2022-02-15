import { getImage } from "../utils/getImage";
import imgResize from "../utils/imageProcessing";
import { mapOnImgs } from "../utils/originals";
import { createThumbnail } from "../utils/thumbnails";

describe("Test the functionality of sharp module: \n", () => {
  it("should successfuly generate new image ", async () => {
    await expectAsync(imgResize({ image: "galaxy", width: 200, height: 200 })).toBeResolved();
  });
  it("should return error msg (Unable to process your image !)", async () => {
    await expectAsync(imgResize({ image: "", width: 200, height: 200 })).toBeResolvedTo(
      "Unable to process your image !"
    );
  });
  it("should return error msg (Unable to process your image !)", async () => {
    await expectAsync(imgResize({ image: "", width: -55, height: -55 })).toBeResolvedTo(
      "Unable to process your image !"
    );
  });
  it("should return error msg (Expected positive integer for width but received -55 of type number)", async () => {
    await expectAsync(imgResize({ image: "galaxy", width: -55, height: 55 })).toBeRejectedWithError(
      Error,
      "Expected positive integer for width but received -55 of type number"
    );
  });
  it("should return error msg (Expected positive integer for height but received -55 of type number)", async () => {
    await expectAsync(imgResize({ image: "galaxy", width: 55, height: -55 })).toBeRejectedWithError(
      Error,
      "Expected positive integer for height but received -55 of type number"
    );
  });
});

describe("Testing the Utilities function: \n", () => {
  it("should return image name (galaxy)", async () => {
    const result = await getImage({ image: "galaxy", width: 200, height: 200 });
    expect(result).toContain("galaxy");
  });
  it("should return image name (galaxy) inside original images folder", async () => {
    const result = await mapOnImgs();
    expect(result).toContain("galaxy");
  });
  it("should return the resized image of (aerial_view_200_200.png) from inside thumbs images folder", async () => {
    const result = await createThumbnail({ image: "aerial_view", width: 200, height: 200 });
    expect(result).not.toContain("galaxy_200_200.png");
  });
});
