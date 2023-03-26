import express from "express";
import { getMahasiswa2 } from "../../controller/mahasiswa/Mahasiswa2Controller.js";
import { createMahaiswa, deleteMahasiswa } from "../../controller/mahasiswa/MahasiswaController.js";
import { VerifyToken } from "../../middleware/verifyToken.js";
const routerMahasiswa = express.Router();

routerMahasiswa.get('/mahasiswa2' ,getMahasiswa2);
routerMahasiswa.post('/mahasiswa' ,VerifyToken(['user' ,'superadmin']), createMahaiswa );
routerMahasiswa.delete('/mahasiswa/:id' ,VerifyToken(['admin' ,'superadmin']), deleteMahasiswa );

export default routerMahasiswa;