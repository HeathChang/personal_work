import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = (props) => {
    //new Date()는 object이기 떄문에 toISOString() 사용해야함.

    //useState() is react hook
    //const 사용하는 이유: = 사용해서 re-assign하지 못하게 하기 위해 
    const [title, setTitle] = useState(props.title);
    //1. point of the managed value => JSX code에서 사용할 이름 
    //2. function we can later call to set a new title

    const clickHandler = () => {
        setTitle('Updated ! ');
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem
