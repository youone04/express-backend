import express from "express";
import { getMatkuliah } from "../../controller/matakuliah/MatakuliahController.js";

const routerMatakuliah = express.Router();

routerMatakuliah.get('/matakuliah' ,getMatkuliah)


export default routerMatakuliah;