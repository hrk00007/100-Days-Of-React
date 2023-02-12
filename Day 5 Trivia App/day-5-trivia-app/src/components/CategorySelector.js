import React from 'react';
import categories from '../categories';

let CategorySelector = ({ category, chooseCategory }) => {
    return (
        <React.Fragment>
            <div className='category-selector'>
                <p>Select a Category</p>
                <select value={category} onChange={(e) => chooseCategory(e.target.value)}>
                    {
                        categories.map((category, index) => (
                            <option key={index} value={category.id}>{category.name}</option>
                        ))
                    }
                </select>
            </div>

        </React.Fragment>
    )
}

export default CategorySelector;