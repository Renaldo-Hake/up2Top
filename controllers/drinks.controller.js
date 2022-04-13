const Drink = require('../models/drinkSchema.js');

// FIND ALL THE DRINKS IN THE DB
exports.findAll = function(req, res) {
    Drink.find()
    .then((results) => {
        res.send(results)
    })
     .catch((err) => {
         //further expansion on error handling to come
         console.log(err)
     })
}

// DELETE FRINK FROM THE DB
exports.deleteDoc = function(req, res) {
    Drink.findOneAndRemove({_id: req.params.id}, function(err){
        if(err) return handleError(err);
        console.log("Car Removed");
        res.send("Car Removed")
    })
}

// CREATE AND SAVE A NEW DRINK DOCUMENT
exports.create = function(req, res) {
    const drink = new Drink({
        drink: req.params.drink
    })

    drink.save()
        .then((result) => {
            res.send(result);
        })
            .catch((err) => {
                // improved error handling to come
                console.log(err);
            })
}