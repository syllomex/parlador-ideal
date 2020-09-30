import { MockRepo } from "../CreatePost/CreatePost.spec";
import { UpdatePostUseCase } from "./UpdatePostUseCase";
import {
  badRequest,
  invalidParam,
  missingParam,
  unauthorized,
} from "../../errors";

describe("Test update post use case", () => {
  const useCase = new UpdatePostUseCase(new MockRepo());

  it("should throw missing content", async () => {
    const data = { id: "any_id", new_content: "", user_id: "any_id" };

    await expect(async () => {
      await useCase.execute(data);
    }).rejects.toThrow(missingParam("content"));
  });

  it("should throw content exceed max length", async () => {
    let new_content = "";
    for (let i = 0; i < 281; i++) {
      new_content += "c";
    }
    const data = { id: "any_id", new_content, user_id: "any_id" };

    await expect(async () => {
      await useCase.execute(data);
    }).rejects.toThrow(invalidParam("content exceed max length"));
  });

  it("should throw post not found", async () => {
    const data = {
      id: "unexistent_id",
      new_content: "any new content",
      user_id: "any_id",
    };

    await expect(async () => {
      await useCase.execute(data);
    }).rejects.toThrow(badRequest("post not found"));
  });

  it("should throw malformed post", async () => {
    const data = {
      id: "malformed",
      new_content: "any new content",
      user_id: "any_id",
    };

    await expect(async () => {
      await useCase.execute(data);
    }).rejects.toThrow(badRequest("malformed post"));
  });

  it("should throw not the post owner", async () => {
    const data = {
      id: "any_id",
      new_content: "any new content",
      user_id: "wrong_id",
    };

    await expect(async () => {
      await useCase.execute(data);
    }).rejects.toThrow(unauthorized("not the post owner"));
  });

  it("should update post returning the post with the new content", async () => {
    const data = {
      id: "any_id",
      new_content: "any new content",
      user_id: "any_id",
    };

    const post = await useCase.execute(data);

    expect(post).toHaveProperty("id", "any_id");
    expect(post).toHaveProperty("content", "any new content");
    expect(post).toHaveProperty("date", new Date("2020-09-29"));
    expect(post.user).toHaveProperty("id", "any_id");
    expect(post.user).toHaveProperty("name", "Any Name");
  });
});
