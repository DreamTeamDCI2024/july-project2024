import userModel from "../models/User.js";



export const createUser = async (req, res, next)=> {
    try{
        const{ name, email, password, phone, isAdmin, street, apartment, zip, city, country } = req.body;

        let existingUser = await userModel.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "The email already exists"})
        }
        const newUser = new userModel({
            name, email, password, isAdmin, phone, street, apartment, zip, city,country
        })

        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);
    }
}