import dbs from "../../models/index.js";

export const createMahaiswa = async(req, res)=> {
    try{
       const {nama , email , prodi} = req.body;
       await dbs.mahasiswa.create({nama : nama , email: email , prodi: prodi});
       res.send({
        status: 200,
        message: "Berhasil Menambahkan Mahasiswa"
       })

    }catch(e){
        res.send({
            status : 500,
            message: e
        })
    }
}

export const  deleteMahasiswa = async(req , res) => {
    try{
        const {id} = req.params
        const dataId = await dbs.mahasiswa.findOne({
            where: {
                id: id
              }
        })

     if(dataId){
     await dbs.mahasiswa.destroy({
        where: {
            id: id
          }
     });
     res.send({
        status: 200,
        message: "Berhasil di Hapus",
        dataId
       })
     }
     res.send({
        status: 400,
        message: "Data Tidak di Temukan",
        dataId
       })

    }catch(e){
        res.send({
            status : 500,
            message: e
        })
    }
}