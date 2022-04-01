import { Link } from 'react-router-dom';
import './Meal.css'

const Meal = ({meal}) => {
    const {strMeal,strMealThumb,strInstructions}=meal;

    return (
        <div className='border-2 bg-violet-300 m-5 p-3'>
            <img src={strMealThumb} alt="" />
            <h1 className='text-center text-2xl text-violet-900 my-2'>{strMeal}</h1>
            <p>{strInstructions?.slice(0,150)}</p>
            <Link className='meal-details p-2 px-5 bg-violet-600 text-white mt-3 flex  mx-auto'
            to={'/meal/'+strMeal}>Meal Deatail</Link>
        </div>
    );
};

export default Meal;