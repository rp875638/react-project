const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

const users = []
const  signup = (req, res, next)=>{
    try{ 
        let user = users.filter(user=>user.email == req.body.email);
        console.log(user);
        if(user.length >0){
            res.status(304).json({message: "User already exist"})
        }else{
            const secret = uuidv4();
            const token  = jwt.sign({email:req.body.email, password:req.body.password}, secret);
            users.push({
                email: req.body.email,
                password: req.body.password,
                token,
                secret
            })
            res.status(200).json({message: "Signup successfully",user:{isAuthenticated: true,token}});
        }
        
    }
    catch(error){
        res.status(401).json({message:error.message});
    }
    
}

 const login = (req, res, next)=>{
     try{
        let user = users.filter(user=>user.email == req.body.email);
        if(user.length >0){
            console.log(user);
            const token  = jwt.sign({email:req.body.email, password:req.body.password},user[0].secret);
            users.map(user=>{
                if(user.email == req.body.email){
                    user.token = token
                }
                return user;
            });
            console.log(users);
            res.status(200).json({message:"Login successfully",user:{isAuthenticated: true,token}});
        }
        else{
            res.status(404).json({message: "User not found"})
        }
        
     }
     catch(error){
         console.log(error.message);
        res.status(401).json({message: error.message});
     }
     
}

const logout = (req, res, next)=>{
    res.status(200).json({})
}

module.exports = {signup, login, logout}