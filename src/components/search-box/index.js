import React from 'react'
import "./style.css"
const index = ({search, onSearch}) => {
    return (
        <input 
        className="search-box" 
        type="text" 
        placeholder="search robot..."
        onChange={onSearch} 
        />
    )
}

export default index
