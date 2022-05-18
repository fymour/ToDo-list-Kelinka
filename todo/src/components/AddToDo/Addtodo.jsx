import React, { useState } from 'react'
import { v4 as uuid } from "uuid"
import './addtodo.css'

export default function Addtodo({ todo, setTodo }) {
    const [value, setValue] = useState('')
    function saveTodo() {
        const t = {
            id: uuid(),
            title: value,
            complete: false
        }

        const newTodo = [t, ...todo]

        setTodo(newTodo)
        setValue('')
    }
    return (
        <div className="block">
            <div className='addtodo'>
                <label className='labeladd'>KelinTask</label>
                <input 
                    className='inputadd' 
                    placeholder='Добавьте Келинке работу' 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                />
                <button className='submitbtn' onClick={saveTodo}>Сохранить</button>
            </div>
        </div>
    )
}
