import { useEffect, useState } from 'react';

type ToDo = {
    id: number,
    userId: number,
    description: string,
    done: boolean,
}

type ToDoList = ToDo[];


function ToDoList() {
    const [isLoading, setIsLoading] = useState<Boolean>(true);
    const [toDoList, setToDoList] = useState<ToDoList>([]);

    async function fetchTodos() {
        const response = await fetch("/api/todos")
        const body = await response.json()
        if (body._embedded.todos) {
            setIsLoading(false)
            setToDoList(body._embedded.todos)
        }
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const CLASS_NAME = "to-do-list"
    return <div className={CLASS_NAME}>
        <h2>To-Do List</h2>
        {toDoList.map((toDo) => {
            return <div key={toDo.id}>
                <p>{toDo.description}</p>
                <input type="checkbox" name="done" id={`done-${toDo.id}`} checked={toDo.done} />
            </div>
        })}
    </div>;
}


export default ToDoList;
