import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../features/todo/todoSlice";

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }

    return (
        <form onSubmit={handleSubmit} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigi-500 focus:ring-2 focus:ring-indigo-900
                text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors dduration-200 ease-in-out"
                placeholder="Enter a todo"
                value={input}
                onChange={(event) => setInput(event.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add todo
            </button>
        </form>
    )
}

export default AddTodo;
