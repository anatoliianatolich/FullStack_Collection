const mongoose = require("mongoose");


const ProductSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    picture: Buffer
  });

const Product = mongoose.model('Product', ProductSchema);

const newProduct = new Product({
    name : "test",
    price: 100,
    status: 'true',
    created: 'test'
});

newProduct.save((err)=> {
    if(err) throw err;
    console.log('write new product');
});


