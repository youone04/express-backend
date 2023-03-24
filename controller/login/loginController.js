import dbs from "../../models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


export const login = async(req, res) => {
    try{

        const {email , password} = req.body;
        const user = await dbs.user.findOne({
            where: {
                email : email
            },
            include : [
                {
                    model : dbs.role,
                    as : "role",
                    attributes : ['role']
                }

            ]
        });

        if(password === '') return res.send({status: 400, message: "Password Tidak Boleh Kosong"});
        if(!user) return res.send({status: 404, message: "User tidak di Temukan"});
        const match = await bcrypt.compare(password ,user.password );
        if(!match) return res.send({status: 400, message: "Password Salah"});
        const token = jwt.sign({
                id : user.id,
                nama : user.nama,
                email: user.email,
                role : user.role
        },process.env.JWT_TEXT, {
            expiresIn : "1d"
        });

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            // secure: true
          });        
          res.json({token ,user});

    }catch(e){
        res.send({
            status : 500,
            message: e
        })
    }
}

export const logout = (req, res) => {
    try{
        // logout  
        res.clearCookie("token");
    }catch(e){
        res.send({
            status : 500,
            message: e
        })
    }
}