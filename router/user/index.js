import express from "express";
import { createUser,getUser, updateUser, deleteUser } from "../../controller/user/UserController.js";
import { VerifyToken } from "../../middleware/verifyToken.js";

const routerUser = express.Router();

routerUser.get('/user' ,VerifyToken(['user']), getUser)
routerUser.post('/user' ,createUser )
routerUser.put('/user/:email' ,VerifyToken(['admin' ,'superadmin']), updateUser )
routerUser.delete('/user/:email' ,VerifyToken(['admin' ,'superadmin']), deleteUser )

export default routerUser;