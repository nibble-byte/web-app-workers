import type { Env } from "../index";

export function handleAuthRequest(_request: Request, _env: Env): Response {
  return new Response("Auth routes are not implemented yet.", { status: 501 });
}