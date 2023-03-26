import { Sequelize } from "sequelize";
import db from "../config/database.js";
import UserModels from "./UserModels.js"
import MahasiswaModels from "./MahasiswaModels.js";
import RoleModels from "./RoleModels.js";
import MatakuliahModels from "./MatakuliahModels.js";
import Mahasiswa2Models from "./Mahasiswa2Models.js";
import MahasiswaMatkul from "./MahasiswaMatkul.js";
import ImageModels from "./ImageModels.js";
import BarangModels from "./BarangModels.js";

const dbs = {};
dbs.Sequelize = Sequelize;
dbs.db = db;

dbs.user = UserModels(db , Sequelize);
dbs.mahasiswa = MahasiswaModels(db , Sequelize);
dbs.role = RoleModels(db , Sequelize);
dbs.mahasiswa2 = Mahasiswa2Models(db , Sequelize);
dbs.matakuliah = MatakuliahModels(db , Sequelize);
dbs.mahasiswa_matkul = MahasiswaMatkul(db , Sequelize);
dbs.uploadImageLocal = ImageModels(db , Sequelize);
dbs.barang  = BarangModels(db , Sequelize);

//relasi user dan role (many to one)
dbs.user.hasMany(dbs.role , {as : "role"});
dbs.role.belongsTo(dbs.user , {
    foreignKey : 'userId',
    as : "user"
});

//relasi matakuliah dan mahaiswa 2 (many to many)
dbs.matakuliah.belongsToMany(dbs.mahasiswa2, { through: dbs.mahasiswa_matkul });
dbs.mahasiswa2.belongsToMany(dbs.matakuliah, { through: dbs.mahasiswa_matkul });



export default dbs;