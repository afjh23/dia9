import React from 'react'
import './mealdescription.css'
import { useEffect, useState } from 'react'

export const MealDescription = () => {
    const [data, setData] = useState([])
    const [meals, setMeals] = useState([])
    const [searchValue, setSearchValue] = useState("")

    const getData = async () => {
        const rs = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
        const jsonRs = await rs.json()
        console.log(jsonRs.meals[0])
        setData(jsonRs.meals[0])
        setMeals(jsonRs.meals[0])
    }

    const ingredients = [];
    const measures = [];

    for (let key in meals) {
        if (key.slice(0, 13) === 'strIngredient' && meals[key]) {
            ingredients.push(meals[key]);
        }
        if (key.slice(0, 10) === 'strMeasure' && meals[key]) {
            measures.push(meals[key]);
        }
    }
    const ingredientMeasure = ingredients.map((ingredient, index) => [ingredient, measures[index]]);

    const url = meals && meals.strYoutube ? meals.strYoutube.slice(meals.strYoutube.indexOf('://') + 3) : '';


    useEffect(() => {
        getData()
    }, [])


    return (
        <div className='description-container'>
            <div className='header-title'>
                <figure>
                    <img src={meals.strMealThumb}></img>
                </figure>
                <h1>{meals.strMeal}</h1>
            </div>

            <div className='directions'>
                <div className='ingredientes'>
                    <h3>Ingredientes</h3>
                    <ul>
                        {ingredientMeasure.map((item, index) => (
                            <li key={index}>{`${item[1]} of ${item[0]}`}</li>
                        ))}
                    </ul>
                </div>
                <div className='instructions'>
                    <h3>Instrucciones</h3>
                    <span>{meals.strInstructions}</span>
                </div>

            </div>
            <div className='meals-video'>
                <video width="600" controls>
                    <source src={url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}
