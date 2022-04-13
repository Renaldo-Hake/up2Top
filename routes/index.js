// All routes to disply the db  info to the user
//applies all crud operations

module.exports = function(app) {
    const drink = require('../controllers/drinks.controller.js');

    app.get("/drinks", drink.findAll);
    app.get("/delete/:id", drink.deleteDoc);
    app.get("/add/:drink", drink.create)
}