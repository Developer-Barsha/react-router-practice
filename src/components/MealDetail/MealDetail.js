import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MealDetail.css'


const MealDetail = () => {
    const {name} = useParams();

    const [meal, setMeal] = useState({});
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+name)
        .then(res=>res.json())
        .then(data=>setMeal(data.meals[0]))
    },[name]);

    const {strMeal,strMealThumb,strInstructions}=meal;

    console.log(meal);
    return (
            <div style={{display:'flex', gap:'20px', width:'80%', border:'2px solid slateblue'}} className='mx-auto my-10 meal-detail'>
                <img style={{width:'300px'}} className='mx-auto' src={strMealThumb} alt="" />
                <div className='my-auto info mx-auto p-4'>
                    <h1 className='text-4xl py-3 font-bold'>{strMeal}</h1>
                    <p className='font-bolder' title={strInstructions}>{strInstructions?.slice(0,600)+'...'}</p>
                </div>
            </div>
    );
};

export default MealDetail;