const mongoose = require('mongoose');

// declaring the drink schema
let drinkSchema = mongoose.Schema({
    drink: {
        type: String,
        required: true
    }
})

// creating the model
const Drink = mongoose.model("drinks", drinkSchema);

// exporting the model for use
module.exports = Drink