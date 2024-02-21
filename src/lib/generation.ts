import crypto from "crypto";

export function genRadRoom() {
  let randString = crypto.randomBytes(3).toString("hex");
  randString = randString.toUpperCase();
  return randString;
}
