import { Configuration, OpenAIApi } from "openai";

export const messageDalle = (req, res) => {
  res.status(200).json({ msg: "Hello from Dall-e" });
};
