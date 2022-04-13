import React, { Component } from "react";

class Favourites extends Component{
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }

        this.getData = this.getData.bind(this);
        this.deleteDrink = this.deleteDrink.bind(this);
        this.addDrink = this.addDrink.bind(this);
    }

    componentDidMount(){
        this.getData();
    }

    // DATABASE
    getData() {
       fetch('/drinks')
       .then((res) => res.json())
       .then((results) => {
           this.setState({data: results})
           console.log("Data has been received")
           console.log(results)
       })
    }

    // Delete a drink from the favourites list in the DB
    deleteDrink(drink) {
        fetch(`/delete/${drink}`)

        // relaod the window to display the corect info
        window.localStorage.reload();
    }

    // Add a drink to the DB
    addDrink() {
        // get the drink from the api 
        const drink = "drink" //get actual drink remove this line

        fetch(`/add/${drink}`)

        // reload the window to display the correct info
        window.location.reload();
    }


    render() {
        return(
            <div className="favoritesContainer">
                <h3>Favourites</h3>
                <div></div>
            </div>
        )
    }
}

export default Favourites