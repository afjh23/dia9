import React from 'react' // Se importan las bibliotecas necesarias: React, useState, useEffect y el archivo de estilos meals.css.
import './meals.css'
import { useState, useEffect } from 'react'

// Se declara el componente funcional Meals
export const Meals = () => {
    // data y setData: Para almacenar y actualizar todos los datos de las comidas obtenidas desde la API
    // meals y setMeals: Para almacenar y actualizar las comidas que se mostrarán (que pueden estar filtradas según el valor de búsqueda)
    // searchValue y setSearchValue: Para almacenar y actualizar el valor del input de búsqueda
    const [data, setData] = useState([])
    const [meals, setMeals] = useState([])
    const [searchValue, setSearchValue]=useState("")

    // Esta función  'getData' es asíncrona y se encarga de hacer una solicitud fetch a la API de TheMealDB para obtener las comidas de la categoría "Seafood"
    // Una vez que se obtienen los datos en formato JSON, se actualizan los estados data 'setData' y meals 'setMeals' con las comidas obtenidas
    const getData = async () => {
        const rs = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        const jsonRs = await rs.json()
        setData(jsonRs.meals)
        setMeals(jsonRs.meals)
    }
    // Este hook 'useEffect'se ejecuta una sola vez cuando el componente se monta, gracias a que se le pasa un array vacío [] como segundo argumento
    // Dentro del 'useEffect' se llama a 'getData' para obtener los datos de las comidas al cargar el componente
    useEffect(() => {
        getData()
    }, [])
    // Esta función 'searchMeal' filtra las comidas almacenadas en data según el valor actual de searchValue
    // Se utiliza el método 'filter' y 'toLowerCase' para hacer la búsqueda case-insensitive (insensible a mayúsculas y minúsculas)
    // Luego, se actualiza el estado meals con el resultado del filtro
    const searchMeal = () => {
        const rs= data.filter(meal => meal.strMeal.toLowerCase().includes(searchValue.toLowerCase()))
        setMeals(rs)
    }
    // Esta función 'handleSearchInput' se ejecuta cada vez que el usuario escribe en el input de búsqueda
    // Actualiza el estado searchValue 'setSearchValue'  con el valor actual del input
    const handleSearchInput = (e) => {
        setSearchValue(e.target.value)
    }
    // El componente retorna un JSX que define la estructura de la interfaz de usuario
    // Un contenedor div con la clase 'meals-container' que envuelve todo el contenido: 
    // Un contenedor div con la clase 'search-container' que contiene un input y un botón para realizar la búsqueda
        // El 'input' tiene su valor controlado por el estado 'searchValue' y ejecuta 'handleSearchInput' en cada cambio
        // El botón 'X' llama a searchMeal al ser presionado
    // Una lista ul con la clase meals-list que itera sobre el estado meals y renderiza un li para cada comida
        // Cada li tiene una figura con la imagen de la comida (strMealThumb) y un contenedor con la información de la comida (strMeal)
    return (
        // Este 'div' con la clase meals-container actúa como el contenedor principal para todo el contenido que se va a mostrar en el componente Meals. Todo lo demás está anidado dentro de este 'div'.
        <div className='meals-container'>
            <div className='search-container'> // Dentro de meals-container, hay un div con la clase search-container
                <input 
                    type="text" 
                    value={searchValue} 
                    onChange={handleSearchInput}
                />
                <button onClick={searchMeal}>X</button>
            </div>
            <ul className='meals-list'>
                {
                    meals && meals.map((meal) =>
                        <li className='meal-item'>
                            <figure className='item-img-container'>
                                <img src={meal.strMealThumb} />
                            </figure>
                            <div className='meal-info'>
                                <h2>{meal.strMeal}</h2>
                            </div>
                        </li>)
                }
            </ul>
        </div>
    )
}
=======
import React from 'react'

export const index = () => {
  return (
    <div>index</div>
  )
}
