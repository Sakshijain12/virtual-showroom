const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema({
    houseNumber: {
        type : String,
        required : true,
    },
    street: {
        type : String,
        required : true,
    },
    city: {
        type : String,
        required : true,
    },
    state: {
        type : String,
        required : true,
    },
    pinCode: {
        type : Number,
        required : true,
    },
    Phone: {
        type : Number,
        required : true,
    }
  });

const orderSchema = mongoose.Schema({
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        //ref : 'User'
    },
    address: {
        houseNumber: {
            type : String,
            required : true,
        },
        street: {
            type : String,
            required : true,
        },
        city: {
            type : String,
            required : true,
        },
        state: {
            type : String,
            required : true,
        },
        pinCode: {
            type : Number,
            required : true,
        },
        Phone: {
            type : Number,
            required : true,
        }
    },
    productList : {
        type : Array,
        default : [],
    },
    status :{
        type : String,
        default : "1",
    }
}, { timestamps: true })

const Order = mongoose.model('Order', orderSchema);

module.exports = { Order }