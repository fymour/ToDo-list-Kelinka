
import React, { useState } from 'react'
import './listtodo.css'

export default function Listtodo({ todo, setTodo }) {

    const [edit, setEdit] = useState(false)
    const [value, setValue] = useState('')

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id != id)
        setTodo(newTodo)
    }
    function editTodo(id, title) {
        setEdit(id)
        setValue(title)
    }
    function saveTodo(id) {
        let newTodo = [...todo].map(item => {
            if (item.id == id) {
                item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }
    function statusTodo(id) {
        let newTodo = [...todo].filter(item => {
            if (item.id = id) {
                item.boolean = !item.boolean
            }
            return item
        })
        setTodo(newTodo)
    }

    return (
        <div className='blocks'>
            {
                todo.map(item => (
                    <div className="kanka" key={item.id}>
                        {
                            edit == item.id ?
                                <div className='whenchange'>
                                    <input value={value} onChange={(e) => setValue(e.target.value)} />
                                </div> :
                                <div>{item.title}</div>

                        }

                        {
                            edit == item.id ?
                                <div className='saving'>
                                    <button onClick={() => saveTodo(item.id)}>Сохранить</button>
                                </div> :
                                <div className='icons'>
                                    <button onClick={() => deleteTodo(item.id)}><span className="material-symbols-outlined">
                                        delete
                                    </span></button>
                                    <button onClick={() => editTodo(item.id, item.title)}><span className="material-symbols-outlined">
                                        edit
                                    </span></button>
                                    <button onClick={() => statusTodo(item.id)}
                                    >{
                                            item.boolean ?
                                                <span className="material-symbols-outlined">
                                                    check_circle
                                                </span>:
                                                <span className="material-symbols-outlined">
                                                    close
                                                </span>g
                                        }
                                    </button>
                                </div>
                        }


                    </div>
                ))
            }
        </div>
    )
}
