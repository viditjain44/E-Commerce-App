import { Router } from "express";

import registerUsercontrollers from "../controllers/user.controller.js";
const userRouter = Router()
userRouter.post('/register',registerUsercontrollers)
export default userRouter;