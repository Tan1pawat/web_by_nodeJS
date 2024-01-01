const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.createConnection('mongodb+srv://admin:admin12345@cluster0.uxdoohz.mongodb.net/product?retryWrites=true&w=majority')
const ProductSchema = new Schema({
    image : {
        data: Buffer,
        type: Blob,
        required: [true,'please provide img']
    },
    productname : {
        type: String,
        required: [true,'please provide productname']
    },
    numofheros : {
        type: Number,
        required: [true,'please provide numofheros']
    },
    rank : {
        type: String,
        required: [true,'please provide rank']
    },
    winrate : {
        type: Number,
        required: [true,'please provide winrate']
    },
    golds : {
        type: Number,
        required: [true,'please provide gold']
    },
    redgem : {
        type: Number,
        required: [true,'please provide redgem']
    },
    redmarble : {
        type: Number,
        required: [true,'please provide redmarble']
    },
    coupon : {
        type: Number,
        required: [true,'please provide coupon']
    }
})

const Product = mongoose.model('Product',ProductSchema)
module.exports = Product