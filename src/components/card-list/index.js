import React from 'react'
import "./style.css"
import Card from "../card"
const index = ({ robots }) => {
    return (
        <div className="card-list">
            {robots.map(el => (
                <Card key={el.id} robot={el}></Card>
            ))}
        </div>
    )
}

export default index
