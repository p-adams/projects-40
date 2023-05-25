import { data } from "$lib/surveyData";
import { nanoid } from "nanoid";

export function load({ params, cookies }) {
  cookies.set("userID", nanoid(), { path: "/" });
  return { surveyData: data, userID: cookies.get("userID") };
}
