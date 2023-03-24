
import dbs from "../../models/index.js";

export const uploadImage = async(req, res) => {
    try{

        await dbs.uploadImageLocal.create({
            nama_gambar: req.file.filename
        });
        res.send({
            status : 200,
            message: "success",
            // data : req.file.filename
        })
        
    }catch(e){
        res.send({
            status : 500,
            message: e
        })
    }
}