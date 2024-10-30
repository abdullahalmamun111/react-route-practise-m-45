import React from 'react';

const Food = ({food}) => {
    const {strCategory,strCategoryDescription,idCategory,strCategoryThumb} = food;
    return (
        <div className='card'>
            <h3>Food ID: {idCategory}</h3>
            <h3>Food Name: {strCategory}</h3>
            <img src={strCategoryThumb} alt="" />
            <p>{strCategoryDescription}</p>

        </div>
    );
};

export default Food;