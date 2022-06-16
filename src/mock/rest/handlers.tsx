import { rest } from "msw";
import responses from "./data";

export const handlers = [
  rest.get("/todos", (req, res, ctx) => {
    console.log("params", req.params);
    return res(ctx.status(200), ctx.json(responses.todoList));
  }),
];
