import dbs from "../../models/index.js";

export const getMatkuliah = async(req, res) => {
    try{
        const matakuliah = await dbs.matakuliah.findAll({
            include : [
                {
                    model : dbs.mahasiswa2,
                    through : {
                        attributes : []
                    }
                }
            ]
        });
         res.status(200).send({
            status: 200,
            message : "success",
            matakuliah
         })

    }catch(e){
        res.send({
            status : 500,
            message: e
        })
    }
}