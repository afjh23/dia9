import React from 'react'

export const Category = ({category:{strCategory, strCategoryThumb,
    strCategoryDescription}}) => {

  return (
    <li className='category-item'>
        <span>{strCategory}</span>

    </li>
    )
}
