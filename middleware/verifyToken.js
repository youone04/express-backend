import jwt from "jsonwebtoken";

export const VerifyToken = (userRoles) => {
    return (req, res , next) => {
        try{

            const authheader = req.headers.authorization;
            const token = authheader && authheader.split(" ")[1];
            if(!token) return res.sendStatus(401)
            jwt.verify(token ,process.env.JWT_TEXT , (err , decode) => {
                if(err)return res.sendStatus(403);
                const dataRole = [];
                decode.role.map(d => {
                    dataRole.push(d.role)
                });

                if(!userRoles.some(data => dataRole.includes(data) )) return res.sendStatus(403)
                req.email = decode.email;
                next()
            })

        }catch(e){
            res.send({
                status: 500,
                message: e
            })
        }
    }
}