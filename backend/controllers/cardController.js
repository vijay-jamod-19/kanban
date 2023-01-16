const Card = require('../models/CardModel');
const asyncHandler = require('express-async-handler');
const { update } = require('../models/UserModel');

const addCard = asyncHandler(async(req,res)=>{
    const {user,board,title,description,status} = req.body;

    const card = await Card.create({
        User:user,
        Board:board,
        title,
        description,
        status
    });

    if(card){
        res.status(201).json({            
            message:'Card Created Successfully'
        })
    }else{
        res.status(401).json({message:'Something Went Wrong'})
    }
});

// Edit Route 
const editCard = async (req,res) => {
    try {
        const card = await Card.findById(req.params.id);
        if(card){
            card.User = req.body.user || card.User,
            card.Board = req.body.board || card.Board,
            card.title = req.body.title || card.title,
            card.description = req.body.description || card.description,
            card.status = req.body.status || card.status
            
            const updateCard = await card.save();
            res.json({
                _id:updateCard._id,
                User:updateCard.User,
                Board:updateCard.Board,
                title:updateCard.title,
                description:updateCard.description,
                status:updateCard.status
            });
        }else{
            return res.status(404).json({message: "Card Not Found !!!"})
        }
        
    } catch (error) {
        res.status(404).send(error)
        console.log(error)
    }
}

// Delete Route
const deleteCard = async (req,res) => {
    try {
        await Card.findOneAndDelete({_id:req.params.id})
        res.status(200).json({message:'Card Deleted'})
    } catch (error) {
        res.status(404).send(error)
    }
}

const listCard = asyncHandler(async(req,res)=>{
    const card = await Card.find({});
    if(card){
        res.status(201).json(card);
    }else{
        res.status(401).json({message:'Card Not Available'});
    }
});

module.exports = {addCard,editCard,deleteCard,listCard};