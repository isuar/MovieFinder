import { readBody, getMethod } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return {
    message: body,
  };
});
