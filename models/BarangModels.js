export default (db , DataTypes) => {
    const Barang = db.define("barang", {
        nama_barang : {
            type : DataTypes.STRING
        },
        stok : {
            type : DataTypes.INTEGER
        },
        harga : {
            type : DataTypes.INTEGER
        },
    },{
        freezeTableName : true
    })

    return Barang
}