import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.error("Stream API key or Secret is missing");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async function (userData) {
  try {
    await streamClient.upsertUser([userData]);
    return userData;
  } catch (error) {
    console.log("Error in upsertStream", error);
  }
};

export const generateStreamToken = (userId) => {};
