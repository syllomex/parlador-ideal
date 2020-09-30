import { missingParam, invalidParam } from "../../errors";
import { Post } from "../../entities/Post";
import { IPostRepository } from "../../repositories/PostRepository";
import { CreatePostUseCase } from "./CreatePostUseCase";

const expected_post = {
  content: "any content",
  date: new Date("2020-09-29"),
  id: "any_id",
  user: {
    id: "any_id",
    name: "Any Name",
  },
};

export class MockRepo implements IPostRepository {
  async findById(id: string): Promise<Post | null> {
    if (id === "unexistent_id") return null;

    if (id === "malformed")
      return {
        id: "any_id",
        content: "any_content",
        date: new Date("2020-09-29"),
        user: "malformed_user",
      };

    return expected_post;
  }
  async create(post: Post): Promise<Post> {
    return expected_post;
  }
  async index(): Promise<Post[]> {
    const posts: Post[] = [expected_post];

    return posts;
  }
  async update(content: string, post_id: string): Promise<Post> {
    const post = {
      id: post_id,
      content: content,
      date: new Date("2020-09-29"),
      user: {
        name: "Any Name",
        id: "any_id",
      },
    };

    return post;
  }
  async remove(id: string): Promise<void> {}
}

describe("Test create post use case", () => {
  const usecase = new CreatePostUseCase(new MockRepo());

  it("should create a post and return it's data", async () => {
    const data = {
      content: "any content",
      user: "any_id",
    };

    const created_post = await usecase.execute(data);
    expect(created_post).toHaveProperty("id");
    expect(created_post).toHaveProperty("content", "any content");
    expect(created_post).toHaveProperty("date");
    expect(created_post).toHaveProperty("user");
    expect(created_post.user).toHaveProperty("id");
    expect(created_post.user).toHaveProperty("name");
  });

  it("should throw missing content", async () => {
    const data = {
      content: "",
      user: "any_id",
    };

    await expect(async () => {
      await usecase.execute(data);
    }).rejects.toThrow(missingParam("content"));
  });

  it("should throw missing user", async () => {
    const data = {
      content: "any content",
      user: "",
    };

    await expect(async () => {
      await usecase.execute(data);
    }).rejects.toThrow(missingParam("user"));
  });

  it("should throw invalid param when content length is greater than 280", async () => {
    let content = "";
    for (let i = 0; i < 281; i++) {
      content += "c";
    }

    const data = {
      content,
      user: "any_user",
    };

    await expect(async () => {
      await usecase.execute(data);
    }).rejects.toThrow(invalidParam("content exceed maximum length"));
  });
});
