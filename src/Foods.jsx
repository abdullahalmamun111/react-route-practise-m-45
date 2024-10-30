import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from './Food';

const Foods = (props) => {
    const foods = useLoaderData();
    const realfoods = foods.categories;
    console.log(realfoods)
    return (
        <div>
            <h1>Foods: {realfoods.length} </h1>
        <div className='grid'>
            
            {
                realfoods.map(food => <Food food={food}></Food>)
            }
        </div>
        </div>
    );
};

export default Foods;