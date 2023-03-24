export default (db , DataTypes) => {
    const Images = db.define("image", {
        nama_gambar : {
            type : DataTypes.STRING
        }
    },{
        freezeTableName : true
    })

    return Images
}