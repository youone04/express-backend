import dbs from "../../models/index.js";

export const getMahasiswa2 = async(req, res) => {
    try{
        const mahasiswa = await dbs.mahasiswa2.findAll({
            include : [
                {
                    model : dbs.matakuliah,
                    through : {
                        attributes : []
                    }
                }
            ]
        });
         res.status(200).send({
            status: 200,
            message : "success",
            mahasiswa
         })

    }catch(e){
        res.send({
            status : 500,
            message: e
        })
    }
}