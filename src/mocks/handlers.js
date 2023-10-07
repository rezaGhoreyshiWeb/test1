import { rest } from "msw";

const userResponseHandler = async (req, res, ctx) => {
  const response = await fetch("https://fakestoreapi.com/users");
  const users = await response.json();
  return res(ctx.status(200), ctx.json(users));
};

export const handlers = [rest.get("/api/users", userResponseHandler)];
