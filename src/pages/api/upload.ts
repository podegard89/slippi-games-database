import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, redirect }) => {
  const data = await request.formData();
  console.log(data);
  return redirect("/dashboard");
};
