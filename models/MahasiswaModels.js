export default (db , DataTypes) => {
    const Mahasiswa = db.define("mahasiswa", {
        nama : {
            type : DataTypes.STRING
        },
        email : {
            type : DataTypes.STRING,
            unique : true
        },
        prodi : {
            type : DataTypes.STRING,
        }
    },{
        freezeTableName : true
    })

    return Mahasiswa
}