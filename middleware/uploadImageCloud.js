import multer from "multer";
import path from "path";
const __dirrname = path.resolve();


const UploadImageCloud = multer({
    storage: multer.diskStorage({
        fileFilter : (req, file , cb) =>{
            let ext = path.extname(file.originalname);
            let extAllow = [".jpg" ,".jpeg", ".png"];
            if(!extAllow.includes(ext)){
                cb(new Error("File type is not support"));
                return;
            }
         cb(null , true);
        },
        filename : (req, file, cb) => {
            const nameImage = file.originalname.split(".");
            // gambar.png
            // ["gambar", "png"]
            cb(null, nameImage[0]+"-"+Date.now()+path.extname(file.originalname) )
        }   
    })
})

export default UploadImageCloud;