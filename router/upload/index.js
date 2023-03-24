import express from "express";
import { uploadImage } from "../../controller/upload/UploadImageController.js";
import { uploadImageCloud } from "../../controller/upload/UploadImageControllerCloud.js";
import UploadImageLocal from "../../middleware/uploadImagesLocal.js";
import UploadImageCloud from "../../middleware/uploadImageCloud.js";
const routerUpload = express.Router();

routerUpload.post('/upload-image-lokal', UploadImageLocal.single("gambar"), uploadImage)
routerUpload.post('/upload-image-cloud', UploadImageCloud.single("gambar"), uploadImageCloud)

export default routerUpload;