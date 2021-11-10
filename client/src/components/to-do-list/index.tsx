import { useEffect, useState } from 'react';
import Api, { CreateToDo } from '../../api';

export type ToDo = {
    id: number,
    userId: number,
    description: string,
    done: boolean,
}

type ToDoList = ToDo[];


// TO DO: Add update, delete, and create functionality

type Props = {
    api: Api
}

function ToDo(remove: (toDoId: number) => void, toDoList: ToDo[]) {
    return toDoList.map((toDo: ToDo) => {
        return <div key={toDo.id}>
            <p>{toDo.description}</p>
            <input type="checkbox" name="done" id={`done-${toDo.id}`} checked={toDo.done} />
            <button onClick={() => {
                remove(toDo.id)
            }}>Remove</button>
        </div>
    })
}

function ToDoList(props: Props) {
    const [isLoading, setIsLoading] = useState<Boolean>(true);
    const [toDoList, setToDoList] = useState<ToDoList>([]);
    const [showError, setShowError] = useState<Boolean>(false);


    function handleSubmit(event: any) {
        event.preventDefault();
        const value = event.target[0].value;
        if (value) {
            const toDo: CreateToDo = {
                userId: toDoList[0].userId,
                description: value,
                done: false
            }
            props.api.create(toDo)
        }
    }

    async function remove(id: number) {
        let response = await props.api.delete(id);
        if (!response || !response.ok) {
            setShowError(true)
        }
        else {
            setShowError(false)
            let updatedToDoList = toDoList.filter((toDo: ToDo) => toDo.id !== id)
            setToDoList(updatedToDoList)
        }
    }

    async function fetchTodos() {
        const response = await props.api.getAllToDos();
        if (!response) {
            setShowError(true)
        }
        else {
            setShowError(false)
            const body = await response.json()
            if (body._embedded.todos) {
                setIsLoading(false)
                setToDoList(body._embedded.todos)
            }
        }
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    if (showError) {
        return <p>Something went wrong, please try again later.</p>
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const CLASS_NAME = "to-do-list"
    return <div className={CLASS_NAME}>
        <h2>To-Do List</h2>
        {ToDo(remove, toDoList)}
        <form onSubmit={(e: any) => handleSubmit(e)}>
            <input type="text" title="Add" name="Add" placeholder="Add to do here" />
            <input type="submit" value="Add" />
        </form>
    </div>;
}

export default ToDoList;
