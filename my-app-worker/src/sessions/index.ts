import type { Env } from "../index";

export function handleSessionsRequest(_request: Request, _env: Env): Response {
  return new Response("Session routes are not implemented yet.", { status: 501 });
}