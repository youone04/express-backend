import dbs from "../../models/index.js";
import bcrypt from "bcrypt";

export const getUser = async(req , res) => {
    try{

        const user = await dbs.user.findAll();
        res.send({
            status: 200,
            data: user
        })

    }catch(e){
        res.send({
            status : 500,
            message: e
        })
    }
}

export const createUser = async(req, res)=> {
    try{
       const {nama , email , password , role} = req.body;
       const salt = await bcrypt.genSalt();
       const hashPassword = await bcrypt.hash(password.toString(), salt)
       const reg = await dbs.user.create({nama : nama , email: email , password: hashPassword});
       await dbs.role.create({role : role, userId: reg.dataValues.id })

       res.send({
        status: 200,
        message: "Berhasil Regitrasi"
       })

    }catch(e){
        res.send({
            status : 500,
            message: e
        })
    }
}

export const updateUser = async(req , res) => {
    try{
        const {nama , password} = req.body;
        const {email} = req.params;
        await dbs.user.update(
            { nama: nama , password: password },
            { where: { email: email } }
        );

    res.send({
        status: 200,
        message: "Berhasil Update"
       })

    }catch(e){
        res.send({
            status : 500,
            message: e
        })
    }
}

export const  deleteUser = async(req , res) => {
    try{
        const {email} = req.params

     await dbs.user.destroy({
        where: {
            email: email
          }
     });

     res.send({
        status: 200,
        message: "Berhasil di Hapus"
       })

    }catch(e){
        res.send({
            status : 500,
            message: e
        })
    }
}

