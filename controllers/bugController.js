const Bug = require('../models/bugModel')

const postBugs = async (req,res) => {
    try {
        const {title,priority,description} = req.body;
        const newBug = new Bug({title,priority,description});
        await newBug.save();
        res.status(200).json({
            bugs:newBug
        })
    }
    catch(err) {
        res.status(500).json({
            success:false,
            message:"Cannot Post Bug"
        })
    }
}

const allBugs = async (req,res) => {
    try {
        const getAllBug = await Bug.find();
        if(!getAllBug || getAllBug.length === 0){
            return res.json({
                message:"There is no bug present"
            })
        }
        res.status(200).json({
            success:true,
            bugs:getAllBug
        })
        
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}

module.exports = {postBugs,allBugs};