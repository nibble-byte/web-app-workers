export interface Env {
  // D1 binding will be added later as: DB: D1Database
}

function routeRequest(request: Request): Response {
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

  return new Response("Not Found", { status: 404 });
}

export default {
  fetch(request): Response {
    return routeRequest(request);
  }
} satisfies ExportedHandler<Env>;