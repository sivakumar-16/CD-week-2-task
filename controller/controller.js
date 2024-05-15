
const pool = require('../config/db')
const queries = require('../model/Queries');
const bcrypt = require('bcrypt');

const getData=(req,res)=>{
    pool.query(queries.getUser,(error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}


const getDataById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const saltRounds =10;
 const addUser=(req,res)=>{
    const {name, email, password, age}=req.body;

    pool.query(queries.exist,[email],(error,results)=>{
        if (results.rows.length){
            res.send("user already exist")
        }

        bcrypt.hash(password, saltRounds, (hashError, hashedPassword) => {
            if (hashError) {
                res.status(500).send("Error hashing password");
                return;
            }

    pool.query(queries.addUser,[name, email, hashedPassword, age],(error,results)=>{
        if (error) throw error;
        res.status(201).send("user add successful ")
        })
    })
})
 }

 const deleteUser=(req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById, [id], (error,results)=>{
        const noUser = !results.rows.length;
        if (noUser){
            res.send("user not fount")
        }
        pool.query(queries.removeUser, [id], (error,results)=>{
            if (error) throw error;
            res.status(200).send("Delete successfuly")

        })
    })

 }

 const updateUser=(req,res)=>{
    const id = parseInt(req.params.id);
    const { name, email, password, age } = req.body;
    
        pool.query(queries.getUserById, [id], (error,results)=>{
        const noUser = !results.rows.length;
        if (noUser){
            res.send("user not fount")
        }
        pool.query(queries.updateUser, [name, email, password, age, id], (error, results) => {
            if (error) {
                res.status(500).send("Error updating user");
                return;
            }
            res.status(200).send("Update successful");
        });
    })
 }



module.exports = { getData,getDataById,addUser,deleteUser,updateUser}
