import React, { useState, useEffect } from 'react';
import Favourites from './FavouritesUI';

// IMAGES
import coffee from '../images/coffee.jpg'

 function DrinksUI() {

    let [drinks, SetDrinks] = useState([])
    let [questions, SetQuestions] = useState([])
    let [modelName, SetModelName] = useState([])


    // ------------------- Start of API ops --------------------------
     // fetch api and place in a var for reference
     useEffect( () => {

        // API
         fetch(`https://api.up2tom.com/v3/models/58d3bcf97c6b1644db73ad12`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': "Bearer 9307bfd5fa011428ff198bb37547f979"
            }
         })
         .then(res => res.json())
         .then( result => {
            SetModelName(result.data.attributes.name)
            SetDrinks(result.data.attributes.metadata.prediction.domain.values)
            SetQuestions(result.data.attributes.metadata.attributes)
         })

     }, [])

     // eliminates rendering issues 
     function displayForm(){
         if( questions.length > 0) {
             return(
                <form>
                    <div className="labelInput">
                        <label>{questions[0].question}</label>
                        <input type="number"/>
                    </div> <br/>
                    <div className="labelInput">
                        <label>{questions[1].question}</label>
                        <select>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div><br/>
                    <div className="labelInput">
                        <label>{questions[2].question}</label>
                        <input type="number"/>
                    </div><br/>
                    <div className="labelInput">
                        <label>{questions[3].question}</label>
                        <select>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div><br/>
                    <div className="labelInput">
                        <label>{questions[4].question}</label>
                        <input type="time"/>
                    </div><br/>
                    <div className="labelInput">
                        <label>{questions[5].question}</label>
                        <select>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div><br/>
                    <div className="labelInput">
                        <label>{questions[6].question}</label>
                        <select>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div><br/>
                    <div className="labelInput">
                        <label>{questions[7].question}</label>
                        <input type="number"/>
                    </div><br/>
                    <div className="labelInput">
                        <label>{questions[8].question}</label>  
                        <input type="number"/>
                    </div><br/>
                        <button>SUBMIT</button>
                </form>
             )
         }

         // ----------------------------- END OF API ---------------------------


     }

         return( 
             <div className="UIcontainer" >
                <h1>{modelName}</h1>
                
                <div className="formContainer">
                    <div>{displayForm()}</div>
                    <div><img src={coffee}/></div>
                </div>

                <Favourites/>
                 
                 
             </div>
         )
 }

 export default DrinksUI