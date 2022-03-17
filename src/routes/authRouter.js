import { Router } from "express";
import { login } from "../controllers/authController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import loginSchema from "../schemas/loginSchema.js";

const authRouter = Router();
authRouter.post('/login', validateSchemaMiddleware(loginSchema), login);
export default authRouter;