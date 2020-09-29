require("dotenv").config();
import { connect, disconnect } from "../../database";
import { Users } from "../../database/models/Users";
import { Post } from "../../entities/Post";
import { User } from "../../entities/User";
import { PostMongoRepository } from "../../repositories/implementations/PostMongoRepository";
import { UserMongoRepository } from "../../repositories/implementations/UserMongoRepository";

describe("Name of the group", () => {
  it("should connect to mongo cloud database", async () => {
    const response = await connect();
    expect(response).toBeUndefined();
  });

  const userRepo = new UserMongoRepository();
  const postRepo = new PostMongoRepository();

  // it is necessary to create a user before testing posts
  const user = new User({
    name: "Any Name",
    email: "any_email@mail.com",
    password: "any_password",
  });

  const post = new Post({
    content: "any content",
    date: new Date(),
    user: user.id,
  });

  const expected_response = {
    id: post.id,
    content: post.content,
    date: post.date,
    user: {
      id: user.id,
      name: user.name,
    },
  };

  it("create a user for posts tests", async () => {
    await userRepo.create(user);
  });

  it("check if a post instance was created", async () => {
    expect(post).toHaveProperty("id");
    expect(post).toHaveProperty("content");
    expect(post).toHaveProperty("date");
    expect(post).toHaveProperty("user");
    expect(post.user).toEqual(user.id);
  });

  it("should insert post on database returning the created post", async () => {
    const created_post = await postRepo.create(post);

    expect(created_post).toEqual(expected_response);
  });

  it("should return the created post", async () => {
    const created_post = await postRepo.findById(post.id);
    expect(created_post).toEqual(expected_response);
  });

  it("should return null when post not found", async () => {
    const created_post = await postRepo.findById("any unexistent id");
    expect(created_post).toBeNull();
  });

  it("should return a posts array", async () => {
    const posts = await postRepo.index();

    expect(posts).toEqual(
      expect.arrayContaining([expect.objectContaining(expected_response)])
    );
  });

  it("should update created post content", async () => {
    const new_content = "any new content";

    const updated_post = await postRepo.update(new_content, post.id);

    expect(updated_post).toEqual({
      ...expected_response,
      content: new_content,
    });
  });

  it("should throw when try to update post without content", async () => {
    const new_content = "";

    expect(async () => {
      await postRepo.update(new_content, post.id);
    }).rejects.toThrow();
  });

  it("should delete created post", async () => {
    await postRepo.remove(post.id);
  });

  it("delete created user", async () => {
    await Users.findByIdAndRemove(user.id);
  });

  disconnect();
});
