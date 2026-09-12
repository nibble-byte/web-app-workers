import { handleAuthRequest } from "./auth";
import { handleUsersRequest } from "./users";
import { handleSessionsRequest } from "./sessions";

export interface Env {
  // D1 binding will be added later as: DB: D1Database
}

function routeRequest(request: Request, env: Env): Response | Promise<Response> {
  const url = new URL(request.url);
  const { pathname } = url;

  if (request.method === "GET" && pathname === "/health") {
    return new Response("OK", {
      status: 200,
      headers: {
        "content-type": "text/plain; charset=utf-8"
      }
    });
  }

  if (pathname.startsWith("/auth")) {
    return handleAuthRequest(request, env);
  }

  if (pathname.startsWith("/users")) {
    return handleUsersRequest(request, env);
  }

  if (pathname.startsWith("/sessions")) {
    return handleSessionsRequest(request, env);
  }

  return new Response("Not Found", { status: 404 });
}

export default {
  fetch(request, env): Response | Promise<Response> {
    return routeRequest(request, env);
  }
} satisfies ExportedHandler<Env>;