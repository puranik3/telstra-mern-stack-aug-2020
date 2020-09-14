const mongoose = require( 'mongoose' );

const reviewSchema = new mongoose.Schema({
    createdDate: {
        type: Date,
        required: true
    },
    reviewer: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    title: String,
    text: {
        type: String,
        required: true
    }
});

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    category: {
        type: String,
        values: [ 'Electronics', 'Books', 'Clothes', 'Appliances' ],
        message: 'Unsupported category'
    },
    imageUrl: String,
    releaseDate: Date,
    reviews: [ reviewSchema ]
});

// generate a model class from the schema
// adds the generated class back to mongoose object
mongoose.model( 'Product', productSchema );