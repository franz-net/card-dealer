import express from "express";
import {GetHand} from "../../common";
const router = express.Router()

console.log('here!!')
router.get('/', (req, res)=>{
    const hand = GetHand()
    res.json({
        "cards": hand
    })
})

module.exports = router