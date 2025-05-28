import express from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';
import { aceeptFriendRequest, getFriendRequests, getMyFriends, getOutgoingFriendReqs, getRecommendedUser, sendFriendsRequest } from '../controllers/user.controller';

const router = express.Router();

router.use(protectRoute);

router.get("/",getRecommendedUser);
router.get("/friends",getMyFriends);
router.post("/friends-request/:id",sendFriendsRequest);
router.put("/friends-request/:id/accept",aceeptFriendRequest);
router.get("/friend-requests",getFriendRequests);
router.get("/outgoing-friend-requests",getOutgoingFriendReqs);

export default router;
