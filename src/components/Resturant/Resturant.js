import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Resturant.css'

const Resturant = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+searchText)
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
    },[searchText]);

    const searchMeal =e=>{
        setSearchText(e.target.value);
    }

    return (
        <div>
            <h2>Search the food you want</h2>
            <input style={{border:'1px solid black'}} type="text" onChange={searchMeal} name="" id="" />
            <div className="meals grid grid-cols-3">
                {
                    meals.map(meal=><Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Resturant;