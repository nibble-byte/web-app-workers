import type { Env } from "../index";

export function handleUsersRequest(_request: Request, _env: Env): Response {
  return new Response("User routes are not implemented yet.", { status: 501 });
}