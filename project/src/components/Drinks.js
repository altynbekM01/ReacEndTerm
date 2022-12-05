import React, {Component, useState, useEffect} from "react";

function Drinks() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    let [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.drinks);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
    
    let a=typeof(items);
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (<div>Loading...{a} </div>);
    } else {
      return (
        <ul>
          {items.map((item,index) => (
            <li key={index}>
            <div>
            <h2 >{item.strDrink}</h2>
              <img width="50" height="50" src={item.strDrinkThumb}/>
            </div>
              
             
            </li>
          ))}
        </ul>
      );
    }
  
  }

  export default Drinks;




