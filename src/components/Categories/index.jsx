import React from 'react'
import { useEffect, useState } from 'react'
import { Category } from './Category'
import './categories.css'
export const Categories = () => {
  const [data, setData] = useState([])
  const [categories, setCategories] = useState([])
  const [searchValue, setSearchValue]=useState("")
  const getData = async () => {
    const rs = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    const jsonRs = await rs.json()
    setData(jsonRs.categories)
    setCategories(jsonRs.categories)
  }

const handleSearchInput = (e) =>{
setSearchValue(e.target.value)
const rs= data.filter(category=> category.strCategory.toLowerCase().includes(searchValue.toLowerCase()))
setCategories(rs)
}

  useEffect(() => {
    getData()
  }, [])
  return (
    <div className='categories-container'>
      <input type="text" value={searchValue} onChange={handleSearchInput}></input>
      <ul>
        {
           categories.map((category, i) => <Category key={i} category={category}></Category>)
        }
      </ul>

    </div>
  )
}
