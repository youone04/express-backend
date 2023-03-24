import dotenv from "dotenv";
dotenv.config();
import dbs from "../../models/index.js";
import cloudinary from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  });

export const uploadImageCloud = async(req, res) => {
    try{

        const hasil = new Promise((resolve , reject) => {
           
            try{
                cloudinary.v2.uploader.upload(req.file.path, async(err, result) => {
                    if(err) throw err;
                    await dbs.uploadImageLocal.create({
                        nama_gambar: result.url
                    });
                    resolve(result.url)
                })

            }catch(e){
                reject(e)
            }
        });

        const data = await hasil;

        res.send({
            status: 200,
            message: "success",
            data
        })

        
    }catch(e){
        res.send({
            status : 500,
            message: e
        })
    }
}