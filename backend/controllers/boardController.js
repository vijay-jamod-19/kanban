const Board = require('../models/BoardModel');
const asyncHandler = require('express-async-handler');

const addBoard = asyncHandler(async(req,res)=>{
    const {user,title} = req.body;
    
    const board = await Board.create({
        User:user,
        title
    });

    if(board){
        res.status(201).json({
            message:'Board Created Successfully'
        })
    }else{
        res.status(401).json({message:'Something Went Wrong'})
    }
});

// Edit Route 
const editBoard = async (req,res) => {
    try {
        const {user,title} = req.body;
        const board = await Board.findById(req.params.id);
        if(board){
            board.User = user || board.User,
            board.title = title || board.title
            
            const updateBoard = await board.save();
            res.json({
                _id:updateBoard._id,
                User:updateBoard.User,
                title:updateBoard.title
            });
        }else{
            return res.status(404).json({message: "Board Not Found !!!"})
        }
    } catch (error) {
        res.status(404).send(error)
        console.log(error)
    }
}

// Delete Route
const deleteBoard = async (req,res) => {
    try {
        await Board.findOneAndDelete({_id:req.params.id})
        res.status(200).json({message:'Board Deleted'})
    } catch (error) {
        res.status(404).send(error)
    }
}

const listBoard = asyncHandler(async(req,res)=>{
    const board = await Board.find({});
    if(board){
        res.status(201).json(board);
    }else{
        res.status(401).json({message:'Board Not Available'});
    }
});

module.exports = {addBoard,editBoard,deleteBoard,listBoard};