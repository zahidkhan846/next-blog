import { hash } from "bcryptjs";

export const encryptString = async (string) => {
  const hashedString = await hash(string, 12);
  return hashedString;
};
