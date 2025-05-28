import { generateStreamToken } from "../lib/stream";

export async function getStreamToken(req, res) {
    try {
        const token = generateStreamToken(req.user.id);
        res.status(200).json({ token });

    } catch (error) {
        console.log("Error in getStreamToken :", error);
        res.status(500).json({ message: "internal Server Error" });
    }
}