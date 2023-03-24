import MatakuliahModels from "./MatakuliahModels.js";
import Mahasiswa2Models from "./Mahasiswa2Models.js";

export default (db , DataTypes) => {
    const MahasiswaMatkul = db.define("mahasiswaMatkul", {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true,
            allowNull : false
        },
        mahasiswa2Id: {
            type: DataTypes.INTEGER,
            references: {
              model: Mahasiswa2Models, // 'Movies' would also work
              key: 'id'
            }
          },
        matakuliahId: {
            type: DataTypes.INTEGER,
            references: {
              model: MatakuliahModels, // 'Actors' would also work
              key: 'id'
            }
          }
    },{
        freezeTableName : true
    })

    return MahasiswaMatkul
}