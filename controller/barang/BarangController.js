import dbs from "../../models/index.js";

export const barang = async(req, res) => {
    try{
        const barang = await dbs.barang.findAll();
         res.status(200).send({
            status: 200,
            message : "success",
            barang
         })
    }catch(e){
        res.send({
            status : 500,
            message: e
        })
    }
}

export const minStok = async(req, res) => {
    try{
        const {stok} = req.body;
        const {id} = req.params;

        await dbs.barang.increment('stok', { by: -stok, where: { id: id}});
         res.status(200).send({
            status: 200,
            message : "success",
         })
    }catch(e){
        res.send({
            status : 500,
            message: e
        })
    }
}

export const addStok = async(req, res) => {
    try{
        const {stok} = req.body;
        const {id} = req.params;
        
        await dbs.barang.increment('stok', { by: stok, where: { id: id}});
         res.status(200).send({
            status: 200,
            message : "success",
         })
    }catch(e){
        res.send({
            status : 500,
            message: e
        })
    }
}

