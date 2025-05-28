import mongoose from 'mongoose';

const friendRequestSchema = new mongoose.Schema(
    {
        sender: {
            type:mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        recipient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            requiredL: true,
        },
        status: {
            type: String,
            enum: ["Pending","accepted"],
            default: "Pending",
        },
    },
    {
        timestamps: true,
    }
)

const FriendRequest = mongoose.model("FreindRequest", friendRequestSchema);
export default FriendRequest;
