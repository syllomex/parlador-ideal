import { MockRepo } from "../CreatePost/CreatePost.spec";
import { IndexPostsUseCase } from "./IndexPostsUseCase";

describe("Test posts index use case", () => {
  const useCase = new IndexPostsUseCase(new MockRepo());

  it("should return a posts array", async () => {
    const posts = await useCase.execute();

    const expected_post = {
      content: "any content",
      date: new Date("2020-09-29"),
      id: "any_id",
      user: {
        id: "any_id",
        name: "Any Name",
      },
    };

    expect(posts).toEqual([expected_post]);
  });
});
