import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
// import router from "./router/index.js";
import db from "./config/database.js";
import dbs from "./models/index.js";
import path from "path";
import routerAuth from "./router/login/index.js";
import routerMahasiswa from "./router/mahasiswa/index.js";
import routerMatakuliah from "./router/matakuliah/index.js";
import routerUpload from "./router/upload/index.js";
import routerUser from "./router/user/index.js";


const app  = express();
dotenv.config();
const PORT =  3100;
const __dirrname = path.resolve();

try{
    await db.authenticate();
    console.log("database terhubung");
    // await dbs.user.sync();
    // await dbs.mahasiswa.sync();
    // await dbs.role.sync();
    // await dbs.mahasiswa2.sync();
    // await dbs.matakuliah.sync();
    // await dbs.mahasiswa_matkul.sync();
    // await dbs.uploadImageLocal.sync();


}catch(e){
    console.log('database ',e)
}

app.use("/images", express.static(path.join(__dirrname, "public/uploads")));
app.use(cors({
    origin : '*',
    methods : "GET , HEAD , PUT , POST , PATCH , DELETE",
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan("dev"));


// app.use('/api',router);
app.use('/api',routerAuth);
app.use('/api',routerMahasiswa);
app.use('/api',routerMatakuliah);
app.use('/api',routerUpload);
app.use('/api',routerUser);

app.listen(PORT , () => {
    console.log("apps running port 3100")
})