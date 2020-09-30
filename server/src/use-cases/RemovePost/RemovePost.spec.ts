import { badRequest, unauthorized } from "../../errors";
import { MockRepo } from "../CreatePost/CreatePost.spec";
import { RemovePostUseCase } from "./RemovePostUseCase";

describe("Test remove post use case", () => {
  const useCase = new RemovePostUseCase(new MockRepo());

  it("should throw post not found", async () => {
    const data = { id: "unexistent_id", user_id: "any_id" };
    await expect(async () => {
      await useCase.execute(data);
    }).rejects.toThrow(badRequest("post not found"));
  });

  it("should throw malformed post", async () => {
    const data = { id: "malformed", user_id: "any_id" };
    await expect(async () => {
      await useCase.execute(data);
    }).rejects.toThrow(badRequest("malformed post"));
  });

  it("should throw not the post owner", async () => {
    const data = { id: "any_id", user_id: "wrong_user_id" };
    await expect(async () => {
      await useCase.execute(data);
    }).rejects.toThrow(unauthorized("not the post owner"));
  });

  it("should remove a post without throw any error", async () => {
    const data = { id: "any_id", user_id: "any_id" };
    expect(await useCase.execute(data));
  });
});
